import type { APIRoute } from "astro";
import { getFullTourCatalog } from "@/lib/tourCatalog";

// Sitemap oficial de BelgoTours — única fuente declarada en robots.txt.
// B09 Gate 15 — las URLs de TOURS ahora se generan desde el catálogo
// real de Strapi (getFullTourCatalog, mismo endpoint público ya
// usado por Home/SearchBox/related-tours). Esta ruta ya es SSR (sin
// prerender), así que un tour publicado en Strapi aparece aquí en la
// siguiente petición, sin build/deploy. El resto (home/blog/B2B) se
// mantiene hand-written: no son catálogo dinámico, son un puñado fijo
// de páginas editoriales.
//
// Prioridad determinista sin inventar un campo de Strapi que no
// existe: free tours (el producto principal, alta frecuencia de
// cambio real vía disponibilidad) > el resto.

const base = "https://belgotours.com";

function tourPriority(tipoTour: string): { priority: string; changefreq: string } {
  return tipoTour === "free"
    ? { priority: "0.9", changefreq: "daily" }
    : { priority: "0.7", changefreq: "weekly" };
}

export const GET: APIRoute = async () => {
  const catalog = await getFullTourCatalog();
  const tourUrls = catalog.map((t) => ({
    loc: `${base}/${t.locale}/tours/${t.slug}`,
    ...tourPriority(t.tipo_tour),
  }));

  const urls = [
    // HOME — máxima prioridad
    { loc: `${base}/es/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${base}/en/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${base}/it/`, priority: "0.9", changefreq: "weekly" },
    { loc: `${base}/fr/`, priority: "0.9", changefreq: "weekly" },
    { loc: `${base}/pt/`, priority: "0.7", changefreq: "weekly" },

    // TOURS (ES/EN/IT/FR) — dinámico desde Strapi
    ...tourUrls,

    // BLOG ES
    { loc: `${base}/es/blog/`, priority: "0.7", changefreq: "weekly" },
    { loc: `${base}/es/blog/que-ver-en-bruselas`, priority: "0.7", changefreq: "monthly" },
    { loc: `${base}/es/blog/free-tour-bruselas-guia-completa`, priority: "0.8", changefreq: "monthly" },
    { loc: `${base}/es/blog/que-ver-en-brujas-en-un-dia`, priority: "0.6", changefreq: "monthly" },

    // BLOG EN
    { loc: `${base}/en/blog/`, priority: "0.7", changefreq: "weekly" },
    { loc: `${base}/en/blog/things-to-do-in-brussels`, priority: "0.7", changefreq: "monthly" },
    { loc: `${base}/en/blog/free-walking-tour-brussels-guide`, priority: "0.8", changefreq: "monthly" },

    // B2B
    { loc: `${base}/es/b2b-collaboration-belgium`, priority: "0.5", changefreq: "monthly" },
    { loc: `${base}/en/b2b-collaboration-belgium`, priority: "0.5", changefreq: "monthly" },
  ];

  // Sin <lastmod>: no hay una fecha de modificación real por URL (esta
  // ruta se prerrenderiza en build, así que "hoy" era la fecha del
  // build, idéntica para las 25 URLs sin importar si esa página
  // cambió — una señal falsa. Se prefiere omitirlo a enviarlo mal
  // (B06B, item 7 de la autorización).
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
