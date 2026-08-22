import type { APIRoute } from "astro";

// Sitemap oficial de BelgoTours — única fuente declarada en robots.txt.
// Lista hand-written, NO generada desde Strapi. Cuando se publique un
// tour/artículo de blog nuevo hay que añadir aquí su URL manualmente
// (NEW_TOUR_SITEMAP_AUTOMATION=NO, ver CURRENT_GATE.md/BACKLOG.md,
// bloque B06B). Ya existe `getTourSlugs()` en `src/lib/api.js`, que
// podría usarse para generar esta lista dinámicamente desde Strapi en
// un futuro bloque — no implementado aquí para no cambiar la
// arquitectura sin autorización explícita.

const base = "https://belgotours.com";

export const GET: APIRoute = async () => {
  const urls = [
    // HOME — máxima prioridad
    { loc: `${base}/es/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${base}/en/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${base}/it/`, priority: "0.9", changefreq: "weekly" },
    { loc: `${base}/fr/`, priority: "0.9", changefreq: "weekly" },
    { loc: `${base}/pt/`, priority: "0.7", changefreq: "weekly" },

    // TOURS ES — alta prioridad
    { loc: `${base}/es/tours/free-tour-bruselas`, priority: "1.0", changefreq: "daily" },
    { loc: `${base}/es/tours/free-tour-brujas`, priority: "0.9", changefreq: "daily" },
    { loc: `${base}/es/tours/free-tour-cerveza-bruselas`, priority: "0.9", changefreq: "daily" },
    { loc: `${base}/es/tours/tour-chocolate-cerveza-bruselas`, priority: "0.8", changefreq: "weekly" },
    { loc: `${base}/es/tours/tour-privado-bruselas`, priority: "0.8", changefreq: "weekly" },
    { loc: `${base}/es/tours/tour-privado-brujas`, priority: "0.7", changefreq: "weekly" },

    // TOURS EN
    { loc: `${base}/en/tours/free-tour-brussels`, priority: "1.0", changefreq: "daily" },
    { loc: `${base}/en/tours/private-tour-brussels`, priority: "0.8", changefreq: "weekly" },

    // TOURS IT
    { loc: `${base}/it/tours/free-tour-bruxelles`, priority: "0.9", changefreq: "daily" },
    { loc: `${base}/it/tours/tour-privato-bruxelles`, priority: "0.7", changefreq: "weekly" },

    // TOURS FR
    { loc: `${base}/fr/tours/tour-prive-bruxelles`, priority: "0.8", changefreq: "weekly" },

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
