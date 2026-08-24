// src/lib/guidePhotoFallback.ts
//
// Gate 22E — fuente única del fallback de foto local aprobado para UN
// guía activo concreto que hoy existe en Strapi sin `foto` cargada
// (documentId a5nibov6t3byqe25wuwqd46t, confirmado vía
// GET /api/guias?populate=foto). Extraído de GuidesSection.astro (Home)
// para que GuidesSectionTour.astro (tour landings) use exactamente el
// mismo mapeo en vez de mantener una copia propia que pueda divergir.
//
// NO se sube a Strapi (backend/producción, fuera de alcance): es un
// fallback puramente frontend, atado a este documentId específico —
// nunca se aplica a ningún otro guía sin foto, para no atribuir esta
// foto a la persona equivocada.

export const APPROVED_GUIDE_PHOTO_FALLBACK: Record<string, string> = {
  a5nibov6t3byqe25wuwqd46t:
    "/images/guides/guia-local-belgotours-paraguas-amarillo-bruselas.webp",
};

export const APPROVED_GUIDE_PHOTO_ALT: Record<string, Record<string, string>> = {
  a5nibov6t3byqe25wuwqd46t: {
    es: "Guía local de BelgoTours con paraguas amarillo en Bruselas",
    en: "BelgoTours local guide with yellow umbrella in Brussels",
    it: "Guida locale di BelgoTours con ombrello giallo a Bruxelles",
    fr: "Guide local BelgoTours avec parapluie jaune à Bruxelles",
    pt: "Guia local da BelgoTours com guarda-chuva amarelo em Bruxelas",
  },
};
