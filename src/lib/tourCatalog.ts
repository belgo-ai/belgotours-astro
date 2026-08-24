// src/lib/tourCatalog.ts
//
// Gate 15 — capa única de catálogo de tours. Fuente única de verdad:
// Strapi (GET /api/public/tours?locale=X, ya existente, sin cambios
// de backend). Todo lo que antes vivía en registros estáticos del
// frontend (SearchBox, related tours, hreflang, sitemap) se deriva
// desde aquí en tiempo de request — publicar un tour nuevo en Strapi
// no requiere tocar Astro.
//
// Gate 15B — el endpoint ahora sí expone hero_media (misma foto real
// que ya usa la página del tour, sin subir/duplicar nada — ver
// backend-work/src/api/tour/controllers/tour.js).

import { STRAPI_URL } from './api.js';

export type TourLocale = 'es' | 'en' | 'it' | 'fr';
export type TourCity = 'bruselas' | 'brujas';
export type TourType = 'free' | 'privado' | 'especial';

export interface TourHero {
  url: string; // absoluta, tamaño 'medium' si existe, si no la original
  width: number;
  height: number;
  alt: string | null;
  // Gate media/image system — mismos 4 formatos que Strapi ya genera
  // y que tourSlug.astro ya usa para el hero/itinerario de la landing
  // (mediaSrcSet); aquí se expone lo mismo para las cards de
  // ToursDestacados, que hoy piden siempre el tamaño 'medium' fijo
  // sin importar el ancho real de la card. '' si no hay formatos.
  srcset: string;
}

export interface TourCatalogItem {
  id: number;
  documentId: string;
  locale: TourLocale;
  slug: string;
  titulo: string;
  seo_h1: string | null;
  display_priority: number | null; // orden comercial dentro de tipo_tour; null = sin asignar, cae a id ascendente
  duracion: number; // minutos; 0 = dato no cargado todavía en Strapi, no inventar
  ciudad: TourCity;
  tipo_tour: TourType;
  booking_mode: 'direct' | 'request';
  review_mode: 'auto' | 'manual';
  pago_libre: boolean;
  precio_base: number | null;
  hero: TourHero | null; // null = tour sin hero_media cargado en Strapi todavía, no inventar
}

function absoluteMediaUrl(path: string): string {
  const apiBase = STRAPI_URL.replace(/\/api\/?$/, '').replace(/\/$/, '');
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${apiBase}${path}`;
}

function heroSrcSet(imagen: any): string {
  if (!imagen?.formats) return '';
  return (['thumbnail', 'small', 'medium', 'large'] as const)
    .map((key) => imagen.formats[key])
    .filter((f: any) => f?.url && f?.width)
    .map((f: any) => `${absoluteMediaUrl(f.url)} ${f.width}w`)
    .join(', ');
}

function normalizeHero(raw: any): TourHero | null {
  const imagen = raw?.hero_media?.imagen;
  if (!imagen?.url) return null;
  const medium = imagen.formats?.medium;
  const chosen = medium ?? imagen;
  return {
    url: absoluteMediaUrl(chosen.url),
    width: chosen.width,
    height: chosen.height,
    alt: imagen.alternativeText ?? null,
    srcset: heroSrcSet(imagen),
  };
}

const CATALOG_LOCALES: TourLocale[] = ['es', 'en', 'it', 'fr'];

// Gate 22 / 22B — orden de catálogo. Estructura real, no inferida de
// texto/slug:
//   1) tipo_tour (free antes que especial antes que privado — dato
//      real ya usado en todo el sitio).
//   2) display_priority ascendente dentro del mismo tipo (campo real
//      de Strapi, Gate 22B — p.ej. Free Tour general=10, Beer=20, sin
//      depender de cuál se creó antes).
//   3) id ascendente como último desempate, sólo cuando dos tours
//      comparten tipo_tour Y display_priority (o ninguno de los dos
//      lo tiene todavía) — nunca decide el orden comercial por sí
//      solo para los productos ya configurados.
// El backend devuelve la lista ordenada por título (alfabético), lo
// que colocaba "Free Beer Tour..." antes que "Free Tour..." — el bug
// real reportado en Gate 22. Se reordena aquí, una sola vez en el
// origen, para que todo lo que consume el catálogo (SearchBox, cards,
// sitemap, related tours) lo reciba ya correcto.
const TIPO_TOUR_RANK: Record<TourType, number> = { free: 0, especial: 1, privado: 2 };

function sortForDisplay(items: TourCatalogItem[]): TourCatalogItem[] {
  return items.slice().sort((a, b) => {
    const rank = TIPO_TOUR_RANK[a.tipo_tour] - TIPO_TOUR_RANK[b.tipo_tour];
    if (rank !== 0) return rank;
    const pa = a.display_priority ?? Number.POSITIVE_INFINITY;
    const pb = b.display_priority ?? Number.POSITIVE_INFINITY;
    if (pa !== pb) return pa - pb;
    return a.id - b.id;
  });
}

// IMPORTANTE: sin caché a nivel de módulo aquí a propósito. En una
// función serverless "caliente" (Netlify) el módulo persiste entre
// requests — una caché sin expiración dejaría un tour recién
// publicado en Strapi invisible hasta el próximo cold start,
// contradiciendo el objetivo del propio Gate. Cada página evita
// pedir el mismo locale más de una vez pasando el catálogo ya
// obtenido como prop a los componentes hijos (ver index.astro →
// ToursDestacados), no cacheando aquí.
async function fetchCatalogForLocale(locale: TourLocale): Promise<TourCatalogItem[]> {
  try {
    const base = STRAPI_URL.replace(/\/$/, '');
    const res = await fetch(`${base}/public/tours?locale=${locale}`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) {
      console.error('[tourCatalog] public/tours error', locale, res.status);
      return [];
    }
    const json = await res.json();
    if (!Array.isArray(json)) return [];
    const items = json.map((t: any) => ({
      ...t,
      locale,
      hero: normalizeHero(t),
    })) as TourCatalogItem[];
    return sortForDisplay(items);
  } catch (err) {
    // Fallo de Strapi no debe romper Home/tour pages — degradación
    // controlada: catálogo vacío para ese idioma, no crash.
    console.error('[tourCatalog] fetch failed', locale, err);
    return [];
  }
}

/** Catálogo de tours publicados para UN idioma. Nunca lanza. */
export async function getTourCatalog(locale: TourLocale): Promise<TourCatalogItem[]> {
  return fetchCatalogForLocale(locale);
}

/** Catálogo completo de TODOS los idiomas con tours reales (es/en/it/fr). */
export async function getFullTourCatalog(): Promise<TourCatalogItem[]> {
  const results = await Promise.all(CATALOG_LOCALES.map(getTourCatalog));
  return results.flat();
}

/**
 * Agrupa el catálogo completo por documentId — la familia de
 * localizaciones real de Strapi (mismo producto en distintos
 * idiomas). Es la fuente para hreflang dinámico de tours.
 */
export async function getTourLocalizationGroups(): Promise<Map<string, TourCatalogItem[]>> {
  const all = await getFullTourCatalog();
  const groups = new Map<string, TourCatalogItem[]>();
  for (const item of all) {
    const list = groups.get(item.documentId) ?? [];
    list.push(item);
    groups.set(item.documentId, list);
  }
  return groups;
}

/** Formatea duracion (minutos, entero de Strapi) sin inventar nada. */
export function formatDuration(minutes: number, locale: TourLocale | 'pt' = 'es'): string {
  if (!minutes || minutes <= 0) return '';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hLabel = locale === 'en' ? 'h' : locale === 'it' ? 'h' : locale === 'fr' ? 'h' : 'h';
  if (h > 0 && m > 0) return `${h} ${hLabel} ${m} min`;
  if (h > 0) return `${h} ${hLabel}`;
  return `${m} min`;
}

const CITY_LABELS: Record<TourLocale | 'pt', Record<TourCity, string>> = {
  es: { bruselas: 'Bruselas', brujas: 'Brujas' },
  en: { bruselas: 'Brussels', brujas: 'Bruges' },
  it: { bruselas: 'Bruxelles', brujas: 'Bruges' },
  fr: { bruselas: 'Bruxelles', brujas: 'Bruges' },
  pt: { bruselas: 'Bruxelas', brujas: 'Bruges' },
};

export function cityLabel(ciudad: TourCity, locale: TourLocale | 'pt' = 'es'): string {
  return CITY_LABELS[locale]?.[ciudad] ?? CITY_LABELS.es[ciudad];
}

const KIND_LABELS: Record<TourLocale | 'pt', Record<TourType, string>> = {
  es: { free: 'Free Tour', privado: 'Tour Privado', especial: 'Tour Especial' },
  en: { free: 'Free Tour', privado: 'Private Tour', especial: 'Special Tour' },
  it: { free: 'Free Tour', privado: 'Tour Privato', especial: 'Tour Speciale' },
  fr: { free: 'Free Tour', privado: 'Tour Privé', especial: 'Tour Spécial' },
  pt: { free: 'Free Tour', privado: 'Tour Privado', especial: 'Tour Especial' },
};

export function tourTypeLabel(tipo: TourType, locale: TourLocale | 'pt' = 'es'): string {
  return KIND_LABELS[locale]?.[tipo] ?? KIND_LABELS.es[tipo];
}

const FREE_LABELS: Record<TourLocale | 'pt', string> = {
  es: 'Pago libre', en: 'Tip-based', it: 'Prezzo libero', fr: 'Contribution libre', pt: 'Preço livre',
};
const QUOTE_LABELS: Record<TourLocale | 'pt', string> = {
  es: 'Presupuesto', en: 'Quote', it: 'Preventivo', fr: 'Devis', pt: 'Orçamento',
};
const PER_PERSON_LABELS: Record<TourLocale | 'pt', string> = {
  es: 'por persona', en: 'per person', it: 'a persona', fr: 'par personne', pt: 'por pessoa',
};

/**
 * Texto de precio para tarjetas — misma regla que ya usaba el
 * registro estático: request-quote gana sobre precio_base real
 * (el tour es negociable aunque tenga un precio base interno);
 * si no, pago libre; si no, precio fijo real.
 */
export function priceLabel(t: Pick<TourCatalogItem, 'booking_mode' | 'pago_libre' | 'precio_base'>, locale: TourLocale | 'pt' = 'es'): string {
  if (t.booking_mode === 'request') return QUOTE_LABELS[locale] ?? QUOTE_LABELS.es;
  if (t.pago_libre) return FREE_LABELS[locale] ?? FREE_LABELS.es;
  if (t.precio_base) return `${t.precio_base}€ ${PER_PERSON_LABELS[locale] ?? PER_PERSON_LABELS.es}`;
  return FREE_LABELS[locale] ?? FREE_LABELS.es;
}

/** Mapeo ciudad Strapi (es) → clave de ciudad usada por SearchBox. */
export function cityKey(ciudad: TourCity): 'brussels' | 'bruges' {
  return ciudad === 'brujas' ? 'bruges' : 'brussels';
}

// Gate 22 — título corto para selector/cards. seo_h1 es el MISMO
// campo ya usado como H1 real de la landing (tourSlug.astro:
// `tour.seoH1 || tour.titulo`) — se reutiliza el mismo fallback aquí,
// sin tocar cómo se usa en la landing ni crear un campo nuevo.
// `titulo` (con subtítulo SEO largo) sigue siendo la fuente para
// SEO_title/meta — esto NUNCA sustituye eso, sólo la etiqueta visual
// del selector/card.
export function displayTitle(item: Pick<TourCatalogItem, 'seo_h1' | 'titulo'>): string {
  return (item.seo_h1 && item.seo_h1.trim()) || item.titulo;
}

/** Mapeo tipo_tour Strapi (es) → clave de "kind" usada por SearchBox. */
export function kindKey(tipo: TourType): 'free' | 'private' | 'special' {
  if (tipo === 'privado') return 'private';
  if (tipo === 'especial') return 'special';
  return 'free';
}

/**
 * Tours relacionados para una página de tour — Gate 15 §12.
 * Reglas: mismo idioma primero (nunca cruza idiomas), excluye el tour
 * actual, prioriza misma ciudad, orden determinista, tope de tarjetas.
 */
export function getRelatedTours(
  catalogForLocale: TourCatalogItem[],
  current: Pick<TourCatalogItem, 'slug' | 'ciudad' | 'tipo_tour'>,
  maxCount = 3
): TourCatalogItem[] {
  const others = catalogForLocale.filter((t) => t.slug !== current.slug);

  const sameCityRank = (t: TourCatalogItem) => (t.ciudad === current.ciudad ? 0 : 1);
  // Complementar el tipo del tour actual: si estás en un free tour,
  // prioriza otros free/especiales de la misma ciudad antes que otro
  // privado, y viceversa — sin excluir ninguno.
  const complementRank = (t: TourCatalogItem) => (t.tipo_tour === current.tipo_tour ? 1 : 0);

  return others
    .slice()
    .sort((a, b) => {
      const city = sameCityRank(a) - sameCityRank(b);
      if (city !== 0) return city;
      const complement = complementRank(a) - complementRank(b);
      if (complement !== 0) return complement;
      return a.slug.localeCompare(b.slug); // determinista
    })
    .slice(0, maxCount);
}
