/* empty css                                                           */
import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, j as renderScript, u as unescapeHTML, i as renderComponent, k as Fragment } from '../../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_Du494iuS.mjs';
import { $ as $$TourHeader } from '../../../chunks/TourHeader_0yEfAs_k.mjs';
import { $ as $$Footer } from '../../../chunks/Footer_DIYA9f-P.mjs';
import 'clsx';
/* empty css                                            */
export { renderers } from '../../../renderers.mjs';

const STRAPI_URL = "http://168.119.183.247:1337/api";
async function getTourBySlug(slug, locale = "es") {
  if (!slug) return null;
  const base = STRAPI_URL.replace(/\/$/, "");
  const params = new URLSearchParams();
  if (locale) params.set("locale", locale);
  const url = `${base}/public/tour/${encodeURIComponent(slug)}?${params.toString()}`;
  const res = await fetch(url, {
    headers: {
      "Accept": "application/json"
    }
  });
  if (!res.ok) {
    const errorText = await res.text();
    console.error("❌ Error getTourBySlug", res.status, errorText);
    return null;
  }
  const json = await res.json();
  return json ?? null;
}

// src/components/reviews-pro/reviews.i18n.js

const REVIEWS_I18N = {
  es: {
    title: "Reseñas",
    subtitle: "Opiniones reales y verificadas de viajeros.",
    labelTop: "Excelente",
    labelHigh: "Muy bueno",
    labelMid: "Bueno",
    labelLow: "Regular",
    labelBad: "Malo",
    basedOn: "Basado en",
    reviewsWord: "reseñas",
    verified: "Verificada",
    notVerified: "No verificada",
    categoriesTitle: "Valoración por categorías",
    starsTitle: "Distribución de estrellas",
    noReviews: "Aún no hay reseñas públicas para este tour en este idioma.",
    readMore: "Leer más",
    readLess: "Ver menos",
  },
  en: {
    title: "Reviews",
    subtitle: "Real, verified traveler reviews.",
    labelTop: "Excellent",
    labelHigh: "Very good",
    labelMid: "Good",
    labelLow: "Fair",
    labelBad: "Bad",
    basedOn: "Based on",
    reviewsWord: "reviews",
    verified: "Verified",
    notVerified: "Not verified",
    categoriesTitle: "Ratings by category",
    starsTitle: "Star distribution",
    noReviews: "No public reviews yet for this tour in this language.",
    readMore: "Read more",
    readLess: "Show less",
  },
  it: {
    title: "Recensioni",
    subtitle: "Recensioni reali e verificate di viaggiatori.",
    labelTop: "Eccellente",
    labelHigh: "Molto buono",
    labelMid: "Buono",
    labelLow: "Discreto",
    labelBad: "Scarso",
    basedOn: "Basato su",
    reviewsWord: "recensioni",
    verified: "Verificata",
    notVerified: "Non verificata",
    categoriesTitle: "Valutazione per categorie",
    starsTitle: "Distribuzione stelle",
    noReviews: "Non ci sono ancora recensioni pubbliche per questo tour in questa lingua.",
    readMore: "Leggi di più",
    readLess: "Mostra meno",
  },
  fr: {
    title: "Avis",
    subtitle: "Avis réels et vérifiés de voyageurs.",
    labelTop: "Excellent",
    labelHigh: "Très bien",
    labelMid: "Bien",
    labelLow: "Moyen",
    labelBad: "Mauvais",
    basedOn: "Basé sur",
    reviewsWord: "avis",
    verified: "Vérifié",
    notVerified: "Non vérifié",
    categoriesTitle: "Notes par catégorie",
    starsTitle: "Répartition des étoiles",
    noReviews: "Pas encore d’avis publics pour ce tour dans cette langue.",
    readMore: "Lire plus",
    readLess: "Voir moins",
  },
};

const $$Astro$9 = createAstro("https://belgotours.com");
const $$ReviewsPro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ReviewsPro;
  const STRAPI_API = "http://168.119.183.247:1337/api";
  const { tourSlug, lang, limit = 8, offset = 0 } = Astro2.props;
  const t = REVIEWS_I18N[lang] || REVIEWS_I18N.es;
  const params = new URLSearchParams();
  params.set("tour", tourSlug);
  params.set("lang", lang);
  params.set("limit", String(limit));
  params.set("offset", String(offset));
  const url = `${STRAPI_API.replace(/\/$/, "")}/public/reviews-pro?${params.toString()}`;
  let data = null;
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" }
    });
    if (res.ok) {
      data = await res.json();
    } else {
      console.error("❌ Error HTTP reviews-pro:", res.status, await res.text());
    }
  } catch (e) {
    console.error("❌ Error loading reviews-pro", e);
  }
  const summary = data?.summary || null;
  const categories = data?.categories || null;
  const reviews = data?.reviews || [];
  const pagination = data?.pagination || null;
  function ratingLabel(r) {
    const n = Number(r || 0);
    if (n >= 4.8) return t.labelTop;
    if (n >= 4.3) return t.labelHigh;
    if (n >= 3.6) return t.labelMid;
    if (n >= 2.8) return t.labelLow;
    return t.labelBad;
  }
  function pct(part, total) {
    const p = Number(part || 0);
    const tt = Number(total || 0);
    if (!tt) return 0;
    return Math.round(p / tt * 100);
  }
  const totalReviews = Number(summary?.total || 0);
  const avgRating = Number(summary?.rating || 0);
  const label = summary?.label || ratingLabel(avgRating);
  const stars = summary?.stars || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  return renderTemplate`${maybeRenderHead()}<section id="reviews-pro" class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> ${totalReviews > 0 ? renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-12 gap-10"> <!-- LEFT: SUMMARY + BARS --> <div class="lg:col-span-5"> <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200"> <div class="flex items-end justify-between gap-6"> <div> <div class="text-5xl font-extrabold text-gray-900"> ${avgRating.toFixed(1)} </div> <div class="mt-2 flex items-center gap-2"> <span class="text-yellow-500 text-xl leading-none"> ${"★".repeat(Math.round(avgRating))} </span> <span class="text-sm text-gray-700 font-semibold"> ${label} </span> </div> <div class="mt-2 text-sm text-gray-600"> ${t.basedOn} <span class="font-semibold">${totalReviews}</span> ${t.reviewsWord} </div> </div> </div> <div class="mt-6"> <div class="text-sm font-semibold text-gray-800 mb-3"> ${t.starsTitle} </div> <div class="space-y-2"> ${[5, 4, 3, 2, 1].map((s) => {
    const count = stars?.[s] ?? 0;
    const percent = pct(count, totalReviews);
    return renderTemplate`<div class="flex items-center gap-3"> <div class="w-10 text-sm text-gray-700 font-medium"> ${s}★
</div> <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"> <div class="h-2 bg-yellow-400"${addAttribute(`width:${percent}%;`, "style")}></div> </div> <div class="w-12 text-right text-sm text-gray-600"> ${percent}%
</div> </div>`;
  })} </div> </div> </div> ${categories && renderTemplate`<div class="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-200"> <div class="text-sm font-semibold text-gray-800 mb-4"> ${t.categoriesTitle} </div> <div class="space-y-3"> ${[
    ["profesionalidad", "Profesionalidad"],
    ["diversion", "Diversión"],
    ["comunicacion", "Comunicación"],
    ["calidad", "Calidad"],
    ["ruta", "Ruta"]
  ].map(([key, label2]) => {
    const val = Number(categories?.[key] ?? 0);
    const percent = Math.round(val / 5 * 100);
    return renderTemplate`<div> <div class="flex items-center justify-between text-sm mb-1"> <span class="text-gray-700 font-medium">${label2}</span> <span class="text-gray-900 font-semibold">${val.toFixed(1)}</span> </div> <div class="h-2 bg-gray-200 rounded-full overflow-hidden"> <div class="h-2 bg-gray-900"${addAttribute(`width:${percent}%;`, "style")}></div> </div> </div>`;
  })} </div> </div>`} </div> <!-- RIGHT: REVIEWS GRID --> <div class="lg:col-span-7"> <div class="grid gap-6"> ${reviews.map((r) => renderTemplate`<article class="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"> <div class="flex items-start justify-between gap-4"> <div> <div class="font-semibold text-gray-900"> ${r.nombre || "Viajero verificado"} </div> <div class="text-sm text-gray-600 mt-1 flex flex-wrap gap-2"> ${r.pais && renderTemplate`<span>${r.pais}</span>`} ${r.fecha && renderTemplate`<span>
•${" "} ${new Date(r.fecha).toLocaleDateString(
    lang === "en" ? "en-US" : lang === "it" ? "it-IT" : lang === "fr" ? "fr-FR" : "es-ES"
  )} </span>`} <span class="text-xs px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600"> ${r.verificada ? t.verified : t.notVerified} </span> </div> </div> <div class="text-yellow-500 text-base leading-none whitespace-nowrap"> ${"★".repeat(Number(r.rating || 0))} </div> </div> <p class="text-gray-800 mt-4 leading-relaxed"> ${r.comentario || ""} </p> </article>`)} </div> ${pagination?.hasMore && renderTemplate`<div class="mt-8 text-center"> <a${addAttribute(`#reviews-pro`, "href")} class="inline-flex items-center justify-center bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition">
Cargar más (próximo)
</a> </div>`} </div> </div>` : renderTemplate`<p class="text-gray-600 italic"> ${t.noReviews} </p>`} </div> </div> </section>`;
}, "/home/edu/belgotours-desarrollo/src/components/reviews-pro/ReviewsPro.astro", void 0);

const $$Astro$8 = createAstro("https://belgotours.com");
const $$GuidesSectionTour = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GuidesSectionTour;
  const { lang, guias = [], titleOverride, subtitleOverride } = Astro2.props;
  const STRAPI_BASE = "http://168.119.183.247:1337/api"?.replace("/api", "") || "http://168.119.183.247:1337";
  const texts = {
    es: {
      title: "Tus guías en este tour",
      subtitle: "Guías locales, cercanos y con experiencia. Te contamos historia + tips reales.",
      role: "Guía local BelgoTours"
    },
    en: {
      title: "Your guides for this tour",
      subtitle: "Local, friendly and experienced guides. History + real local tips.",
      role: "BelgoTours local guide"
    },
    it: {
      title: "Le guide di questo tour",
      subtitle: "Guide locali, simpatiche ed esperte. Storia + consigli reali.",
      role: "Guida locale BelgoTours"
    },
    fr: {
      title: "Vos guides pour ce tour",
      subtitle: "Guides locaux, sympathiques et expérimentés. Histoire + conseils locaux.",
      role: "Guide local BelgoTours"
    }
  };
  const t = texts[lang] || texts.es;
  const title = titleOverride && String(titleOverride).trim() || t.title;
  const subtitle = subtitleOverride && String(subtitleOverride).trim() || t.subtitle;
  function pickAttrs(entry) {
    return entry?.attributes ?? entry ?? {};
  }
  function absoluteMediaUrl(url) {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `${STRAPI_BASE}${url}`;
  }
  function guidePhotoUrl(foto) {
    const f = foto?.data?.attributes ?? foto?.attributes ?? foto ?? null;
    if (!f) return "";
    const url = f.formats?.small?.url || f.formats?.thumbnail?.url || f.formats?.medium?.url || f.url;
    return absoluteMediaUrl(url);
  }
  const normalizedGuides = (Array.isArray(guias) ? guias : []).map((g) => {
    const a = pickAttrs(g);
    return {
      id: g?.id ?? a?.id ?? crypto.randomUUID(),
      nombre: a?.nombre || "",
      slug: a?.slug || "",
      activo: typeof a?.activo === "boolean" ? a.activo : true,
      idiomas: Array.isArray(a?.idiomas) ? a.idiomas : [],
      fotoUrl: guidePhotoUrl(a?.foto)
    };
  }).filter((g) => g.activo && g.nombre);
  const hasGuides = normalizedGuides.length > 0;
  const guidesToShow = normalizedGuides.slice(0, 4);
  function normalizeLangTag(code) {
    const c = String(code || "").toLowerCase();
    if (!c) return "";
    return c.toUpperCase();
  }
  function imgAlt(nombre) {
    return nombre ? `${nombre} - ${t.role}` : t.role;
  }
  return renderTemplate`${hasGuides && renderTemplate`${maybeRenderHead()}<section id="guides" class="py-16 bg-white"><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><!-- Header --><div class="text-center max-w-3xl mx-auto mb-10"><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">${title}</h2><p class="text-gray-600 text-base md:text-lg">${subtitle}</p></div><!-- Grid --><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${guidesToShow.map((g) => renderTemplate`<article class="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-card hover:shadow-lg transition"><div class="flex items-center justify-center mb-4">${g.fotoUrl ? renderTemplate`<img${addAttribute(g.fotoUrl, "src")}${addAttribute(imgAlt(g.nombre), "alt")} width="120" height="120" loading="lazy" decoding="async" class="w-28 h-28 rounded-full object-cover ring-2 ring-yellow-300">` : renderTemplate`<div class="w-28 h-28 rounded-full bg-gray-100 ring-4 ring-yellow-200 flex items-center justify-center text-gray-400 text-3xl">
👤
</div>`}</div><h3 class="text-lg font-bold text-gray-900">${g.nombre}</h3><p class="text-sm text-yellow-600 font-semibold mt-1">${t.role}</p>${g.idiomas.length > 0 && renderTemplate`<div class="flex flex-wrap justify-center gap-2 mt-4">${g.idiomas.map((code) => renderTemplate`<span class="text-[11px] px-2 py-0.5 rounded-full border border-gray-200 text-gray-600 bg-gray-50">${normalizeLangTag(code)}</span>`)}</div>`}</article>`)}</div><!-- Nota opcional (suave) -->${normalizedGuides.length > 4 && renderTemplate`<div class="text-center mt-8 text-sm text-gray-500">${lang === "es" && "En algunos horarios puede asignarse otro guía del equipo según disponibilidad."}${lang === "en" && "On some timeslots, another team guide may be assigned depending on availability."}${lang === "it" && "In alcune fasce orarie potrebbe essere assegnata un’altra guida del team in base alla disponibilità."}${lang === "fr" && "Sur certains créneaux, un autre guide de l’équipe peut être attribué selon la disponibilité."}</div>`}</div></div></section>`}`;
}, "/home/edu/belgotours-desarrollo/src/components/tours/GuidesSectionTour.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$7 = createAstro("https://belgotours.com");
const $$AIAssistant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AIAssistant;
  const { tourId, tourName } = Astro2.props;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div id="aiAssistant" class="fixed bottom-28 right-6 z-40 transition-all duration-300" data-astro-cid-afvc5xqm> <!-- Bot\xF3n flotante --> <button id="aiAssistantButton" aria-label="Asistente del tour" class="bg-black text-[#FACC15]\n           w-14 h-14 rounded-full\n           shadow-2xl\n           flex items-center justify-center\n           transition-all duration-300\n           hover:scale-110 hover:bg-gray-900" data-astro-cid-afvc5xqm> <span class="text-xl" data-astro-cid-afvc5xqm>\u{1F916}</span> </button> <!-- Chat Container --> <div id="aiChatContainer" class="hidden fixed bottom-44 right-6\n           w-80 h-96\n           bg-white rounded-2xl\n           shadow-2xl border border-gray-200\n           z-50 flex flex-col" data-astro-cid-afvc5xqm> <!-- Header --> <div class="bg-black text-[#FACC15] p-4 rounded-t-2xl flex-shrink-0" data-astro-cid-afvc5xqm> <div class="flex items-center justify-between" data-astro-cid-afvc5xqm> <div class="flex items-center gap-3" data-astro-cid-afvc5xqm> <span class="text-lg" data-astro-cid-afvc5xqm>\u{1F916}</span> <div data-astro-cid-afvc5xqm> <h3 class="font-bold text-sm text-white" data-astro-cid-afvc5xqm>BelgoAI Assistant</h3> <p class="text-xs text-yellow-300" data-astro-cid-afvc5xqm>Para ', '</p> </div> </div> <button id="closeChatButton" class="text-[#FACC15] hover:text-yellow-300 text-lg" aria-label="Cerrar chat" data-astro-cid-afvc5xqm>\n\xD7\n</button> </div> </div> <!-- Chat Messages --> <div id="aiChatMessages" class="flex-1 p-4 overflow-y-auto bg-gray-50" data-astro-cid-afvc5xqm> <div class="ai-message bot-message mb-4" data-astro-cid-afvc5xqm> <div class="bg-white rounded-lg p-3 shadow-sm border" data-astro-cid-afvc5xqm> <p class="text-sm text-gray-700" data-astro-cid-afvc5xqm>\n\xA1Hola! Soy tu asistente IA para el ', '.  \n            \xBFEn qu\xE9 puedo ayudarte?\n</p> <div class="mt-3 space-y-1" data-astro-cid-afvc5xqm> <button class="quick-question-btn block w-full text-left text-xs\n                     text-gray-800 hover:text-black\n                     p-2 rounded hover:bg-gray-100" data-question="\xBFD\xF3nde es el punto de encuentro?" data-astro-cid-afvc5xqm>\n\u{1F4CD} Punto de encuentro\n</button> <button class="quick-question-btn block w-full text-left text-xs\n                     text-gray-800 hover:text-black\n                     p-2 rounded hover:bg-gray-100" data-question="\xBFCu\xE1nto dura el tour?" data-astro-cid-afvc5xqm>\n\u23F1\uFE0F Duraci\xF3n y horarios\n</button> <button class="quick-question-btn block w-full text-left text-xs\n                     text-gray-800 hover:text-black\n                     p-2 rounded hover:bg-gray-100" data-question="\xBFQu\xE9 debo llevar?" data-astro-cid-afvc5xqm>\n\u{1F392} Qu\xE9 llevar al tour\n</button> </div> </div> </div> </div> <!-- Input --> <div class="p-3 border-t border-gray-200 flex-shrink-0" data-astro-cid-afvc5xqm> <div class="flex gap-2" data-astro-cid-afvc5xqm> <input type="text" id="aiChatInput" placeholder="Escribe tu pregunta\u2026" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm\n                 focus:ring-2 focus:ring-[#FACC15] focus:border-transparent" data-astro-cid-afvc5xqm> <button id="sendMessageButton" class="bg-black text-[#FACC15]\n                 px-3 py-2 rounded-lg text-sm\n                 hover:bg-gray-900 transition\n                 flex items-center justify-center w-10" aria-label="Enviar mensaje" data-astro-cid-afvc5xqm>\n\u2192\n</button> </div> </div> </div> </div> <script>\n/* \u{1F539} TU SCRIPT ORIGINAL \u2013 NO MODIFICADO */\n<\/script> '])), maybeRenderHead(), tourName, tourName);
}, "/home/edu/belgotours-desarrollo/src/components/tours/AIAssistant.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$6 = createAstro("https://belgotours.com");
const $$GamificationSystem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GamificationSystem;
  const { tourId, tourName } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<div id="gamification" class="fixed top-20 right-4 z-30" data-astro-cid-da7jksui> <!-- Bot\xF3n colapsable --> <button id="gamificationToggle" class="bg-white rounded-full shadow-lg border border-gray-200 w-12 h-12 flex items-center justify-center hover:shadow-xl transition-all duration-300 mb-2" data-astro-cid-da7jksui> <span class="text-xl" data-astro-cid-da7jksui>\u{1F3AE}</span> </button> <!-- Panel de Gamificaci\xF3n (colapsado por defecto) --> <div id="gamificationPanel" class="hidden bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-64" data-astro-cid-da7jksui> <div class="text-center mb-3" data-astro-cid-da7jksui> <h3 class="font-bold text-gray-800 text-sm mb-1" data-astro-cid-da7jksui>Tour Gamificado</h3> <p class="text-xs text-gray-600" data-astro-cid-da7jksui>Gana puntos durante el tour</p> </div> <!-- Puntos Actuales --> <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 mb-3 text-center" data-astro-cid-da7jksui> <div class="text-xl font-bold text-gray-800" id="currentPoints" data-astro-cid-da7jksui>0</div> <div class="text-xs text-gray-600" data-astro-cid-da7jksui>puntos acumulados</div> </div> <!-- Logros Disponibles --> <div class="space-y-2 mb-3" data-astro-cid-da7jksui> <div class="achievement" data-points="50" data-achievement="selfie" data-astro-cid-da7jksui> <div class="flex items-center gap-2" data-astro-cid-da7jksui> <span class="text-lg" data-astro-cid-da7jksui>\u{1F4F8}</span> <div class="flex-1" data-astro-cid-da7jksui> <div class="text-xs font-medium text-gray-800" data-astro-cid-da7jksui>Selfie ic\xF3nico</div> <div class="text-xs text-gray-600" data-astro-cid-da7jksui>+50 puntos</div> </div> <div class="achievement-check text-sm" data-astro-cid-da7jksui>\u25CB</div> </div> </div> <div class="achievement" data-points="100" data-achievement="trivia" data-astro-cid-da7jksui> <div class="flex items-center gap-2" data-astro-cid-da7jksui> <span class="text-lg" data-astro-cid-da7jksui>\u{1F9E9}</span> <div class="flex-1" data-astro-cid-da7jksui> <div class="text-xs font-medium text-gray-800" data-astro-cid-da7jksui>Responde trivia</div> <div class="text-xs text-gray-600" data-astro-cid-da7jksui>+100 puntos</div> </div> <div class="achievement-check text-sm" data-astro-cid-da7jksui>\u25CB</div> </div> </div> <div class="achievement" data-points="200" data-achievement="secret" data-astro-cid-da7jksui> <div class="flex items-center gap-2" data-astro-cid-da7jksui> <span class="text-lg" data-astro-cid-da7jksui>\u{1F3AF}</span> <div class="flex-1" data-astro-cid-da7jksui> <div class="text-xs font-medium text-gray-800" data-astro-cid-da7jksui>Spot secreto</div> <div class="text-xs text-gray-600" data-astro-cid-da7jksui>+200 puntos</div> </div> <div class="achievement-check text-sm" data-astro-cid-da7jksui>\u25CB</div> </div> </div> </div> <!-- Premios --> <div class="pt-3 border-t border-gray-200" data-astro-cid-da7jksui> <h4 class="text-xs font-semibold text-gray-800 mb-2" data-astro-cid-da7jksui>Tus premios:</h4> <div class="space-y-1 text-xs" data-astro-cid-da7jksui> <div class="flex justify-between items-center" data-astro-cid-da7jksui> <span data-astro-cid-da7jksui>\u{1F539} 100 pts</span> <span class="text-green-600 font-medium" data-astro-cid-da7jksui>Sticker</span> </div> <div class="flex justify-between items-center" data-astro-cid-da7jksui> <span data-astro-cid-da7jksui>\u{1F539} 300 pts</span> <span class="text-blue-600 font-medium" data-astro-cid-da7jksui>Chocolate</span> </div> <div class="flex justify-between items-center" data-astro-cid-da7jksui> <span data-astro-cid-da7jksui>\u{1F539} 500 pts</span> <span class="text-purple-600 font-medium" data-astro-cid-da7jksui>15% descuento</span> </div> </div> </div> </div> </div> <script>
// Sistema de Gamificaci\xF3n Corregido
document.addEventListener('DOMContentLoaded', function() {
  console.log('\u{1F3AE} Inicializando Sistema de Gamificaci\xF3n...');
  
  const gamificationToggle = document.getElementById('gamificationToggle');
  const gamificationPanel = document.getElementById('gamificationPanel');
  const achievements = document.querySelectorAll('.achievement');
  const currentPointsElement = document.getElementById('currentPoints');
  
  let currentTourId = '\${tourId}' || 'free-tour-brujas-magica';
  let points = 0;
  let completedAchievements = new Set();
  let isPanelOpen = false;

  // Cargar progreso guardado
  function loadProgress() {
    const savedPoints = localStorage.getItem(\`belgotours_points_\${currentTourId}\`);
    const savedAchievements = localStorage.getItem(\`belgotours_achievements_\${currentTourId}\`);
    
    if (savedPoints) {
      points = parseInt(savedPoints);
      updatePointsDisplay();
    }
    
    if (savedAchievements) {
      completedAchievements = new Set(JSON.parse(savedAchievements));
      updateAchievementsDisplay();
    }
  }

  // Guardar progreso
  function saveProgress() {
    localStorage.setItem(\`belgotours_points_\${currentTourId}\`, points.toString());
    localStorage.setItem(\`belgotours_achievements_\${currentTourId}\`, JSON.stringify([...completedAchievements]));
  }

  // Toggle panel
  function togglePanel() {
    isPanelOpen = !isPanelOpen;
    if (isPanelOpen) {
      gamificationPanel.classList.remove('hidden');
    } else {
      gamificationPanel.classList.add('hidden');
    }
  }

  // Completar logro
  function completeAchievement(achievementType, pointsToAdd) {
    if (completedAchievements.has(achievementType)) {
      console.log('\u2705 Logro ya completado:', achievementType);
      return;
    }

    completedAchievements.add(achievementType);
    points += pointsToAdd;

    // Animaci\xF3n de puntos
    animatePoints(pointsToAdd);
    
    // Actualizar UI
    updateAchievementsDisplay();
    saveProgress();
    
    // Mostrar notificaci\xF3n
    showAchievementNotification(pointsToAdd, achievementType);
    
    console.log(\`\u{1F389} Logro completado: \${achievementType} +\${pointsToAdd}pts\`);
  }

  // Animaci\xF3n de puntos
  function animatePoints(pointsToAdd) {
    const startPoints = points - pointsToAdd;
    let current = startPoints;
    const increment = pointsToAdd / 20;
    const duration = 500;

    const timer = setInterval(() => {
      current += increment;
      if (current >= points) {
        current = points;
        clearInterval(timer);
      }
      currentPointsElement.textContent = Math.floor(current);
    }, duration / 20);
  }

  // Actualizar display de puntos
  function updatePointsDisplay() {
    currentPointsElement.textContent = points;
  }

  // Actualizar display de logros
  function updateAchievementsDisplay() {
    achievements.forEach(achievement => {
      const achievementType = achievement.dataset.achievement;
      const checkElement = achievement.querySelector('.achievement-check');
      
      if (completedAchievements.has(achievementType)) {
        checkElement.textContent = '\u2705';
        achievement.style.opacity = '0.7';
        achievement.style.cursor = 'default';
      } else {
        checkElement.textContent = '\u25CB';
        achievement.style.opacity = '1';
        achievement.style.cursor = 'pointer';
      }
    });
  }

  // Mostrar notificaci\xF3n
  function showAchievementNotification(pointsEarned, achievementType) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-24 bg-green-500 text-white px-4 py-2 rounded-lg shadow-2xl z-50 animate-bounce';
    notification.innerHTML = \`
      <div class="flex items-center gap-2">
        <span class="text-lg">\u{1F389}</span>
        <div class="text-sm">
          <div class="font-semibold">+\${pointsEarned} puntos!</div>
          <div>Logro desbloqueado</div>
        </div>
      </div>
    \`;

    document.body.appendChild(notification);

    // Remover despu\xE9s de 3 segundos
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }

  // Event Listeners
  if (gamificationToggle) {
    gamificationToggle.addEventListener('click', togglePanel);
    console.log('\u2705 Bot\xF3n gamificaci\xF3n configurado');
  }

  // Logros click
  achievements.forEach(achievement => {
    achievement.addEventListener('click', function() {
      const achievementType = this.dataset.achievement;
      const pointsToAdd = parseInt(this.dataset.points);
      
      if (!completedAchievements.has(achievementType)) {
        completeAchievement(achievementType, pointsToAdd);
      }
    });
  });

  // Cerrar panel al hacer click fuera
  document.addEventListener('click', function(event) {
    const gamification = document.getElementById('gamification');
    if (!gamification.contains(event.target) && isPanelOpen) {
      togglePanel();
    }
  });

  // Inicializar
  loadProgress();
  console.log('\u2705 Sistema de Gamificaci\xF3n inicializado correctamente');
  console.log('Puntos actuales:', points);
  console.log('Logros completados:', [...completedAchievements]);
});
<\/script> `], ["", `<div id="gamification" class="fixed top-20 right-4 z-30" data-astro-cid-da7jksui> <!-- Bot\xF3n colapsable --> <button id="gamificationToggle" class="bg-white rounded-full shadow-lg border border-gray-200 w-12 h-12 flex items-center justify-center hover:shadow-xl transition-all duration-300 mb-2" data-astro-cid-da7jksui> <span class="text-xl" data-astro-cid-da7jksui>\u{1F3AE}</span> </button> <!-- Panel de Gamificaci\xF3n (colapsado por defecto) --> <div id="gamificationPanel" class="hidden bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-64" data-astro-cid-da7jksui> <div class="text-center mb-3" data-astro-cid-da7jksui> <h3 class="font-bold text-gray-800 text-sm mb-1" data-astro-cid-da7jksui>Tour Gamificado</h3> <p class="text-xs text-gray-600" data-astro-cid-da7jksui>Gana puntos durante el tour</p> </div> <!-- Puntos Actuales --> <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 mb-3 text-center" data-astro-cid-da7jksui> <div class="text-xl font-bold text-gray-800" id="currentPoints" data-astro-cid-da7jksui>0</div> <div class="text-xs text-gray-600" data-astro-cid-da7jksui>puntos acumulados</div> </div> <!-- Logros Disponibles --> <div class="space-y-2 mb-3" data-astro-cid-da7jksui> <div class="achievement" data-points="50" data-achievement="selfie" data-astro-cid-da7jksui> <div class="flex items-center gap-2" data-astro-cid-da7jksui> <span class="text-lg" data-astro-cid-da7jksui>\u{1F4F8}</span> <div class="flex-1" data-astro-cid-da7jksui> <div class="text-xs font-medium text-gray-800" data-astro-cid-da7jksui>Selfie ic\xF3nico</div> <div class="text-xs text-gray-600" data-astro-cid-da7jksui>+50 puntos</div> </div> <div class="achievement-check text-sm" data-astro-cid-da7jksui>\u25CB</div> </div> </div> <div class="achievement" data-points="100" data-achievement="trivia" data-astro-cid-da7jksui> <div class="flex items-center gap-2" data-astro-cid-da7jksui> <span class="text-lg" data-astro-cid-da7jksui>\u{1F9E9}</span> <div class="flex-1" data-astro-cid-da7jksui> <div class="text-xs font-medium text-gray-800" data-astro-cid-da7jksui>Responde trivia</div> <div class="text-xs text-gray-600" data-astro-cid-da7jksui>+100 puntos</div> </div> <div class="achievement-check text-sm" data-astro-cid-da7jksui>\u25CB</div> </div> </div> <div class="achievement" data-points="200" data-achievement="secret" data-astro-cid-da7jksui> <div class="flex items-center gap-2" data-astro-cid-da7jksui> <span class="text-lg" data-astro-cid-da7jksui>\u{1F3AF}</span> <div class="flex-1" data-astro-cid-da7jksui> <div class="text-xs font-medium text-gray-800" data-astro-cid-da7jksui>Spot secreto</div> <div class="text-xs text-gray-600" data-astro-cid-da7jksui>+200 puntos</div> </div> <div class="achievement-check text-sm" data-astro-cid-da7jksui>\u25CB</div> </div> </div> </div> <!-- Premios --> <div class="pt-3 border-t border-gray-200" data-astro-cid-da7jksui> <h4 class="text-xs font-semibold text-gray-800 mb-2" data-astro-cid-da7jksui>Tus premios:</h4> <div class="space-y-1 text-xs" data-astro-cid-da7jksui> <div class="flex justify-between items-center" data-astro-cid-da7jksui> <span data-astro-cid-da7jksui>\u{1F539} 100 pts</span> <span class="text-green-600 font-medium" data-astro-cid-da7jksui>Sticker</span> </div> <div class="flex justify-between items-center" data-astro-cid-da7jksui> <span data-astro-cid-da7jksui>\u{1F539} 300 pts</span> <span class="text-blue-600 font-medium" data-astro-cid-da7jksui>Chocolate</span> </div> <div class="flex justify-between items-center" data-astro-cid-da7jksui> <span data-astro-cid-da7jksui>\u{1F539} 500 pts</span> <span class="text-purple-600 font-medium" data-astro-cid-da7jksui>15% descuento</span> </div> </div> </div> </div> </div> <script>
// Sistema de Gamificaci\xF3n Corregido
document.addEventListener('DOMContentLoaded', function() {
  console.log('\u{1F3AE} Inicializando Sistema de Gamificaci\xF3n...');
  
  const gamificationToggle = document.getElementById('gamificationToggle');
  const gamificationPanel = document.getElementById('gamificationPanel');
  const achievements = document.querySelectorAll('.achievement');
  const currentPointsElement = document.getElementById('currentPoints');
  
  let currentTourId = '\\\${tourId}' || 'free-tour-brujas-magica';
  let points = 0;
  let completedAchievements = new Set();
  let isPanelOpen = false;

  // Cargar progreso guardado
  function loadProgress() {
    const savedPoints = localStorage.getItem(\\\`belgotours_points_\\\${currentTourId}\\\`);
    const savedAchievements = localStorage.getItem(\\\`belgotours_achievements_\\\${currentTourId}\\\`);
    
    if (savedPoints) {
      points = parseInt(savedPoints);
      updatePointsDisplay();
    }
    
    if (savedAchievements) {
      completedAchievements = new Set(JSON.parse(savedAchievements));
      updateAchievementsDisplay();
    }
  }

  // Guardar progreso
  function saveProgress() {
    localStorage.setItem(\\\`belgotours_points_\\\${currentTourId}\\\`, points.toString());
    localStorage.setItem(\\\`belgotours_achievements_\\\${currentTourId}\\\`, JSON.stringify([...completedAchievements]));
  }

  // Toggle panel
  function togglePanel() {
    isPanelOpen = !isPanelOpen;
    if (isPanelOpen) {
      gamificationPanel.classList.remove('hidden');
    } else {
      gamificationPanel.classList.add('hidden');
    }
  }

  // Completar logro
  function completeAchievement(achievementType, pointsToAdd) {
    if (completedAchievements.has(achievementType)) {
      console.log('\u2705 Logro ya completado:', achievementType);
      return;
    }

    completedAchievements.add(achievementType);
    points += pointsToAdd;

    // Animaci\xF3n de puntos
    animatePoints(pointsToAdd);
    
    // Actualizar UI
    updateAchievementsDisplay();
    saveProgress();
    
    // Mostrar notificaci\xF3n
    showAchievementNotification(pointsToAdd, achievementType);
    
    console.log(\\\`\u{1F389} Logro completado: \\\${achievementType} +\\\${pointsToAdd}pts\\\`);
  }

  // Animaci\xF3n de puntos
  function animatePoints(pointsToAdd) {
    const startPoints = points - pointsToAdd;
    let current = startPoints;
    const increment = pointsToAdd / 20;
    const duration = 500;

    const timer = setInterval(() => {
      current += increment;
      if (current >= points) {
        current = points;
        clearInterval(timer);
      }
      currentPointsElement.textContent = Math.floor(current);
    }, duration / 20);
  }

  // Actualizar display de puntos
  function updatePointsDisplay() {
    currentPointsElement.textContent = points;
  }

  // Actualizar display de logros
  function updateAchievementsDisplay() {
    achievements.forEach(achievement => {
      const achievementType = achievement.dataset.achievement;
      const checkElement = achievement.querySelector('.achievement-check');
      
      if (completedAchievements.has(achievementType)) {
        checkElement.textContent = '\u2705';
        achievement.style.opacity = '0.7';
        achievement.style.cursor = 'default';
      } else {
        checkElement.textContent = '\u25CB';
        achievement.style.opacity = '1';
        achievement.style.cursor = 'pointer';
      }
    });
  }

  // Mostrar notificaci\xF3n
  function showAchievementNotification(pointsEarned, achievementType) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-24 bg-green-500 text-white px-4 py-2 rounded-lg shadow-2xl z-50 animate-bounce';
    notification.innerHTML = \\\`
      <div class="flex items-center gap-2">
        <span class="text-lg">\u{1F389}</span>
        <div class="text-sm">
          <div class="font-semibold">+\\\${pointsEarned} puntos!</div>
          <div>Logro desbloqueado</div>
        </div>
      </div>
    \\\`;

    document.body.appendChild(notification);

    // Remover despu\xE9s de 3 segundos
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }

  // Event Listeners
  if (gamificationToggle) {
    gamificationToggle.addEventListener('click', togglePanel);
    console.log('\u2705 Bot\xF3n gamificaci\xF3n configurado');
  }

  // Logros click
  achievements.forEach(achievement => {
    achievement.addEventListener('click', function() {
      const achievementType = this.dataset.achievement;
      const pointsToAdd = parseInt(this.dataset.points);
      
      if (!completedAchievements.has(achievementType)) {
        completeAchievement(achievementType, pointsToAdd);
      }
    });
  });

  // Cerrar panel al hacer click fuera
  document.addEventListener('click', function(event) {
    const gamification = document.getElementById('gamification');
    if (!gamification.contains(event.target) && isPanelOpen) {
      togglePanel();
    }
  });

  // Inicializar
  loadProgress();
  console.log('\u2705 Sistema de Gamificaci\xF3n inicializado correctamente');
  console.log('Puntos actuales:', points);
  console.log('Logros completados:', [...completedAchievements]);
});
<\/script> `])), maybeRenderHead());
}, "/home/edu/belgotours-desarrollo/src/components/tours/GamificationSystem.astro", void 0);

const $$Astro$5 = createAstro("https://belgotours.com");
const $$BookingSteps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BookingSteps;
  const { currentStep, lang } = Astro2.props;
  const steps = [
    {
      number: 1,
      label: {
        es: "Fecha & Grupo",
        en: "Date & Group",
        it: "Data & Gruppo",
        fr: "Date & Groupe",
        pt: "Data & Grupo"
      }
    },
    {
      number: 2,
      label: {
        es: "Tus Datos",
        en: "Your Details",
        it: "I tuoi Dati",
        fr: "Vos Coordonn\xE9es",
        pt: "Seus Dados"
      }
    },
    {
      number: 3,
      label: {
        es: "Confirmar",
        en: "Confirm",
        it: "Conferma",
        fr: "Confirmer",
        pt: "Confirmar"
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center mb-8"> <div class="flex items-center space-x-4 md:space-x-6"> ${steps.map((step, index) => renderTemplate`<div class="flex items-center"> <!-- Paso --> <div class="flex flex-col items-center"> <!-- Círculo --> <div${addAttribute(`w-11 h-11 rounded-full flex items-center justify-center border-2 font-semibold text-sm transition-all duration-300
              ${currentStep === step.number ? "bg-yellow-400 border-yellow-400 text-gray-900" : currentStep > step.number ? "bg-gray-900 border-gray-900 text-white" : "bg-white border-gray-300 text-gray-400"}`, "class")}> ${currentStep > step.number ? renderTemplate`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>` : step.number} </div> <!-- Label (desktop) --> <span${addAttribute(`text-xs mt-2 font-medium hidden md:block ${currentStep >= step.number ? "text-gray-800" : "text-gray-400"}`, "class")}> ${step.label[lang] || step.label.es} </span> </div> <!-- Conector --> ${index < steps.length - 1 && renderTemplate`<div${addAttribute(`w-6 md:w-10 h-0.5 transition-colors duration-300 ${currentStep > step.number ? "bg-gray-900" : "bg-gray-300"}`, "class")}></div>`} </div>`)} </div> </div>`;
}, "/home/edu/belgotours-desarrollo/src/components/booking/BookingSteps.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://belgotours.com");
const $$BookingCalendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BookingCalendar;
  const API = "http://168.119.183.247:1337/api";
  const { tour = {}, lang = "es" } = Astro2.props;
  const tourId = tour?.id || tour?.strapiId || tour?.documentId || tour?.attributes?.id || 3;
  const texts = {
    es: {
      selectDate: "Selecciona una fecha",
      selectTime: "Selecciona un horario",
      noTimes: "No hay horarios para esta fecha",
      maxPeople: "Plazas disponibles"
    },
    en: {
      selectDate: "Select a date",
      selectTime: "Select a time",
      noTimes: "No times available for this date",
      maxPeople: "Available spots"
    },
    it: {
      selectDate: "Seleziona una data",
      selectTime: "Seleziona un orario",
      noTimes: "Nessun orario disponibile per questa data",
      maxPeople: "Posti disponibili"
    }
  }[lang];
  function todayISO() {
    const d = /* @__PURE__ */ new Date();
    return d.toISOString().split("T")[0];
  }
  async function getHorariosByTourId(id) {
    const params = new URLSearchParams();
    params.set("populate", "*");
    params.set("filters[tour][id][$eq]", String(id));
    params.set("filters[fecha][$gte]", todayISO());
    params.set("pagination[limit]", "100");
    params.set("sort[0]", "fecha:asc");
    params.set("sort[1]", "hora:asc");
    const res = await fetch(`${API}/horarios?${params.toString()}`);
    const json = await res.json();
    return (json?.data ?? []).map((h) => {
      const a = h.attributes ?? h;
      const max = Number(a.cupoMaximo ?? 25);
      const ocup = Number(a.cupoOcupado ?? 0);
      return {
        id: h.id,
        fecha: a.fecha,
        hora: a.hora,
        cupoDisponible: Math.max(0, max - ocup),
        cupoMaximo: max,
        cupoOcupado: ocup
      };
    });
  }
  const horariosRaw = await getHorariosByTourId(tourId);
  const horarios = horariosRaw.filter((h) => h.cupoDisponible > 0);
  const fechasDisponibles = [...new Set(horarios.map((h) => h.fecha))];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="calendar-2026 space-y-8"', ' data-astro-cid-duwpe3oo> <!-- Fecha --> <div data-astro-cid-duwpe3oo> <label class="block font-semibold mb-2 text-gray-800" data-astro-cid-duwpe3oo> ', ' </label> <input id="fechaPicker" type="date" class="w-full md:w-auto border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:outline-none"', "", "", ' data-astro-cid-duwpe3oo> </div> <!-- Horarios --> <div data-astro-cid-duwpe3oo> <label class="block font-semibold mb-3 text-gray-800" data-astro-cid-duwpe3oo> ', ' </label> <div id="horariosContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-duwpe3oo></div> </div> </div> <script type="application/json" id="horarios-data">', "</script> ", " "])), maybeRenderHead(), addAttribute(lang, "data-lang"), texts.selectDate, addAttribute(fechasDisponibles[0] || todayISO(), "value"), addAttribute(fechasDisponibles[0] || todayISO(), "min"), addAttribute(fechasDisponibles[fechasDisponibles.length - 1] || todayISO(), "max"), texts.selectTime, unescapeHTML(JSON.stringify(horarios)), renderScript($$result, "/home/edu/belgotours-desarrollo/src/components/booking/BookingCalendar.astro?astro&type=script&index=0&lang.ts"));
}, "/home/edu/belgotours-desarrollo/src/components/booking/BookingCalendar.astro", void 0);

const $$Astro$3 = createAstro("https://belgotours.com");
const $$ParticipantCounter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ParticipantCounter;
  const { lang = "es" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="participant-counter space-y-6"> <!-- Adultos --> <div> <label class="block text-gray-800 font-semibold mb-2"> ${lang === "es" ? "\u{1F464} Adultos" : lang === "en" ? "\u{1F464} Adults" : lang === "it" ? "\u{1F464} Adulti" : lang === "fr" ? "\u{1F464} Adultes" : "\u{1F464} Adultos"} </label> <div class="flex items-center gap-4"> <button type="button" id="decreaseAdults" class="w-10 h-10 rounded-full flex items-center justify-center
               bg-gray-200 text-gray-700
               hover:bg-gray-300 transition
               disabled:opacity-40 disabled:cursor-not-allowed" disabled>
−
</button> <span id="adultsCount" class="text-xl font-bold text-gray-900 min-w-[2rem] text-center">
1
</span> <button type="button" id="increaseAdults" class="w-10 h-10 rounded-full flex items-center justify-center
               bg-yellow-400 text-gray-900
               hover:bg-yellow-500 transition">
+
</button> </div> </div> <!-- Niños --> <div> <label class="block text-gray-800 font-semibold mb-2"> ${lang === "es" ? "\u{1F9D2} Ni\xF1os (0\u201312 a\xF1os)" : lang === "en" ? "\u{1F9D2} Children (0\u201312)" : lang === "it" ? "\u{1F9D2} Bambini (0\u201312)" : lang === "fr" ? "\u{1F9D2} Enfants (0\u201312)" : "\u{1F9D2} Crian\xE7as (0\u201312)"} </label> <div class="flex items-center gap-4"> <button type="button" id="decreaseChildren" class="w-10 h-10 rounded-full flex items-center justify-center
               bg-gray-200 text-gray-700
               hover:bg-gray-300 transition
               disabled:opacity-40 disabled:cursor-not-allowed" disabled>
−
</button> <span id="childrenCount" class="text-xl font-bold text-gray-900 min-w-[2rem] text-center">
0
</span> <button type="button" id="increaseChildren" class="w-10 h-10 rounded-full flex items-center justify-center
               bg-yellow-400 text-gray-900
               hover:bg-yellow-500 transition">
+
</button> </div> </div> </div> ${renderScript($$result, "/home/edu/belgotours-desarrollo/src/components/booking/ParticipantCounter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/edu/belgotours-desarrollo/src/components/booking/ParticipantCounter.astro", void 0);

const $$Astro$2 = createAstro("https://belgotours.com");
const $$BookingForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookingForm;
  const { tour, lang } = Astro2.props;
  const isFreeTour = tour?.pagoLibre === true || tour?.precio === 0;
  const isPrivateTour = tour?.tipo_tour === "privado";
  const isSpecialTour = tour?.tipo_tour === "especial";
  const titleByLang = {
    es: "Reserva tu experiencia",
    en: "Book your experience",
    it: "Prenota la tua esperienza",
    fr: "Réservez votre expérience",
    pt: "Reserve sua experiência"
  };
  const contactTitleByLang = {
    es: "Tus datos de contacto",
    en: "Your contact details",
    it: "I tuoi dati di contatto",
    fr: "Vos coordonnées",
    pt: "Seus dados de contato"
  };
  const confirmTitleByLang = {
    es: "Confirma tu reserva",
    en: "Confirm your booking",
    it: "Conferma la prenotazione",
    fr: "Confirmez votre réservation",
    pt: "Confirme sua reserva"
  };
  const bookingSummaryByLang = {
    es: "Resumen de tu reserva",
    en: "Booking summary",
    it: "Riepilogo prenotazione",
    fr: "Résumé de la réservation",
    pt: "Resumo da reserva"
  };
  const privacyTextByLang = {
    es: "Acepto los términos y condiciones y la política de privacidad",
    en: "I accept the terms and conditions and privacy policy",
    it: "Accetto i termini e condizioni e la privacy policy",
    fr: "J'accepte les conditions générales et la politique de confidentialité",
    pt: "Aceito os termos e condições e a política de privacidade"
  };
  const marketingTextByLang = {
    es: "Quiero recibir información útil y recomendaciones de BelgoTours por email o WhatsApp.",
    en: "I want to receive useful information and recommendations from BelgoTours by email or WhatsApp.",
    it: "Desidero ricevere informazioni utili e consigli da BelgoTours via email o WhatsApp.",
    fr: "Je souhaite recevoir des informations utiles et des recommandations de BelgoTours par email ou WhatsApp.",
    pt: "Quero receber informações úteis e recomendações da BelgoTours por email ou WhatsApp."
  };
  const howHeardLabelByLang = {
    es: "¿Cómo nos conociste?",
    en: "How did you hear about us?",
    it: "Come ci hai conosciuto?",
    fr: "Comment nous avez-vous connus ?",
    pt: "Como nos conheceu?"
  };
  const STRAPI_API_BASE = "http://168.119.183.247:1337/api".replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<div id="bookingForm"${addAttribute(lang, "data-lang")}${addAttribute(STRAPI_API_BASE, "data-api")} class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden" data-astro-cid-5qetu56d> <!-- CABECERA --> <div class="bg-white border-b border-gray-200 p-6 md:p-8" data-astro-cid-5qetu56d> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4" data-astro-cid-5qetu56d> <!-- Título principal --> <div data-astro-cid-5qetu56d> <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1" data-astro-cid-5qetu56d> ${titleByLang[lang] || titleByLang.es} </h2> <p class="text-gray-600 text-sm md:text-base line-clamp-2" data-astro-cid-5qetu56d> ${tour?.titulo} </p> </div> <!-- Badge informativo (duración + tipo de tour) --> ${(tour?.duracion || tour?.precio === 0) && renderTemplate`<!-- Badge informativo -->
<div class="flex items-center" data-astro-cid-5qetu56d> <div class="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium" data-astro-cid-5qetu56d>  ${!isPrivateTour && tour?.duracion && renderTemplate`<span data-astro-cid-5qetu56d> ${(() => {
    const total = Number(tour.duracion);
    if (Number.isNaN(total)) return "";
    const h = Math.floor(total / 60);
    const m = total % 60;
    if (h && m) return `${h} h ${m} min`;
    if (h) return `${h} h`;
    return `${m} min`;
  })()} </span>`} ${!isPrivateTour && tour?.duracion && renderTemplate`<span class="opacity-40" data-astro-cid-5qetu56d>•</span>`}  <span data-astro-cid-5qetu56d> ${isFreeTour && (lang === "es" ? "Free tour · pago libre" : lang === "en" ? "Free tour · pay what you want" : lang === "it" ? "Free tour · offerta libera" : "Free tour")} ${isPrivateTour && tour?.precio && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5qetu56d": true }, { "default": async ($$result2) => renderTemplate`${lang === "es" && `Desde ${tour.precio} € / grupo`}${lang === "en" && `From €${tour.precio} / group`}${lang === "it" && `Da ${tour.precio} € / gruppo`}${lang === "fr" && `À partir de ${tour.precio} € / groupe`}` })}`} ${isSpecialTour && tour?.precio && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5qetu56d": true }, { "default": async ($$result2) => renderTemplate`${lang === "es" && `${tour.precio} € · pago al guía`}${lang === "en" && `€${tour.precio} · pay the guide`}${lang === "it" && `${tour.precio} € · pagamento alla guida`}${lang === "fr" && `${tour.precio} € · paiement au guide`}` })}`} </span> </div> </div>`} </div> </div> ${renderComponent($$result, "BookingSteps", $$BookingSteps, { "currentStep": 1, "lang": lang, "data-astro-cid-5qetu56d": true })} <div class="p-6 md:p-8 space-y-10" data-astro-cid-5qetu56d> <!-- PASO 1: FECHA / HORARIO / PARTICIPANTES --> <div id="step1" class="booking-step active space-y-6" data-astro-cid-5qetu56d> <h3 class="text-xl md:text-2xl font-bold text-gray-900" data-astro-cid-5qetu56d> ${lang === "es" && "Elige fecha, horario y personas"} ${lang === "en" && "Choose date, time and participants"} ${lang === "it" && "Scegli data, orario e partecipanti"} ${lang === "fr" && "Choisissez date, horaire et participants"} </h3> <p class="text-sm text-gray-600" data-astro-cid-5qetu56d> ${isFreeTour && (lang === "es" ? "Usaremos estos datos únicamente para enviarte la confirmación, el punto de encuentro y avisos importantes del tour." : lang === "en" ? "We will use this information only to send your confirmation, meeting point and important tour updates." : lang === "it" ? "Utilizzeremo questi dati esclusivamente per inviarti la conferma, il punto di incontro e comunicazioni importanti sul tour." : "We will only use your data for tour confirmation.")} ${isPrivateTour && (lang === "es" ? "Usaremos estos datos para diseñar tu tour privado a medida y ponernos en contacto contigo para definir los detalles." : lang === "en" ? "We’ll use this information to design your private tour and contact you to define the details." : lang === "it" ? "Utilizzeremo questi dati per progettare il tuo tour privato su misura e contattarti per definire i dettagli." : "Nous utiliserons ces informations pour concevoir votre tour privé et vous contacter.")} ${isSpecialTour && (lang === "es" ? "Usaremos estos datos para enviarte la confirmación de la reserva y los detalles del tour." : lang === "en" ? "We’ll use this information to send your booking confirmation and tour details." : lang === "it" ? "Utilizzeremo questi dati per inviarti la conferma della prenotazione e i dettagli del tour." : "We will use this information to send your booking details.")} </p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" data-astro-cid-5qetu56d> <div class="bg-gray-50 rounded-2xl border border-gray-200 p-4 md:p-5" data-astro-cid-5qetu56d> ${renderComponent($$result, "BookingCalendar", $$BookingCalendar, { "tour": tour, "lang": lang, "data-astro-cid-5qetu56d": true })} </div> <div class="bg-gray-50 rounded-2xl border border-gray-200 p-4 md:p-5 space-y-6" data-astro-cid-5qetu56d> ${renderComponent($$result, "ParticipantCounter", $$ParticipantCounter, { "lang": lang, "data-astro-cid-5qetu56d": true })} ${isFreeTour && renderTemplate`<p class="text-xs text-gray-500 leading-snug" data-astro-cid-5qetu56d> ${lang === "es" && "Máx. 7 personas por reserva. Para grupos más grandes, realiza varias reservas."} ${lang === "en" && "Max. 7 people per booking. For larger groups, please make multiple bookings."} ${lang === "it" && "Massimo 7 persone per prenotazione. Per gruppi più grandi, effettua più prenotazioni."} ${lang === "fr" && "Maximum 7 personnes par réservation. Pour les groupes plus nombreux, effectuez plusieurs réservations."} </p>`} </div> </div> </div> <!-- PASO 2: DATOS DEL CLIENTE --> <div id="step2" class="booking-step hidden space-y-6" data-astro-cid-5qetu56d> <h3 class="text-2xl font-bold text-gray-900" data-astro-cid-5qetu56d> ${contactTitleByLang[lang] || contactTitleByLang.es} </h3> <p class="text-sm text-gray-600" data-astro-cid-5qetu56d> ${lang === "es" && "Usaremos estos datos únicamente para enviarte la confirmación, el punto de encuentro y avisos importantes del tour."} ${lang === "en" && "We will use this information only to send your confirmation, meeting point and important tour updates."} ${lang === "it" && "Utilizzeremo questi dati solo per inviarti la conferma, il punto d’incontro e aggiornamenti importanti sul tour."} ${lang === "fr" && "Nous utiliserons ces informations uniquement pour vous envoyer la confirmation, le point de rendez-vous et les informations importantes du tour."} </p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-5qetu56d> <!-- Nombre --> <div data-astro-cid-5qetu56d> <label for="firstName" class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d> ${lang === "es" && "Nombre"} ${lang === "en" && "First name"} ${lang === "it" && "Nome"} ${lang === "fr" && "Prénom"} *
</label> <input id="firstName" name="firstName" type="text" required class="w-full p-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition placeholder-gray-400"${addAttribute(lang === "es" ? "Ej: María" : "John", "placeholder")} data-astro-cid-5qetu56d> </div> <!-- Apellidos --> <div data-astro-cid-5qetu56d> <label for="lastName" class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d> ${lang === "es" && "Apellidos"} ${lang === "en" && "Last name"} ${lang === "it" && "Cognome"} ${lang === "fr" && "Nom de famille"} *
</label> <input id="lastName" name="lastName" type="text" required class="w-full p-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition placeholder-gray-400"${addAttribute(lang === "es" ? "Ej: González López" : "Doe", "placeholder")} data-astro-cid-5qetu56d> </div> <!-- Ciudad --> <div data-astro-cid-5qetu56d> <label for="customerCity" class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d>
🏙️
${lang === "es" && "Ciudad de residencia"} ${lang === "en" && "City of residence"} ${lang === "it" && "Città di residenza"} ${lang === "fr" && "Ville de résidence"} *
</label> <input id="customerCity" name="customerCity" type="text" required class="w-full p-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition placeholder-gray-400" placeholder="Madrid, Brussels, Mexico City..." data-astro-cid-5qetu56d> </div> <!-- País --> <div data-astro-cid-5qetu56d> <label for="customerCountry" class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d>
🌍
${lang === "es" && "País"} ${lang === "en" && "Country"} ${lang === "it" && "Paese"} ${lang === "fr" && "Pays"} *
</label> <input id="customerCountry" name="customerCountry" type="text" required class="w-full p-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition placeholder-gray-400" placeholder="España, México, Italia..." data-astro-cid-5qetu56d> </div> <!-- Teléfono --> <div class="md:col-span-2" data-astro-cid-5qetu56d> <label class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d>
📱
${lang === "es" && "Móvil (WhatsApp recomendado)"} ${lang === "en" && "Mobile phone (WhatsApp recommended)"} ${lang === "it" && "Cellulare (WhatsApp consigliato)"} ${lang === "fr" && "Téléphone portable (WhatsApp recommandé)"} *
</label> <div class="flex gap-3" data-astro-cid-5qetu56d> <select id="countryCode" name="countryCode" required class="w-32 p-3 border border-gray-300 rounded-xl bg-white focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none text-sm" data-astro-cid-5qetu56d> <option value="" data-astro-cid-5qetu56d>${lang === "es" ? "País" : "Code"}</option> <option value="+34" data-astro-cid-5qetu56d>🇪🇸 +34</option> <option value="+32" data-astro-cid-5qetu56d>🇧🇪 +32</option> <option value="+33" data-astro-cid-5qetu56d>🇫🇷 +33</option> <option value="+39" data-astro-cid-5qetu56d>🇮🇹 +39</option> <option value="+44" data-astro-cid-5qetu56d>🇬🇧 +44</option> <option value="+49" data-astro-cid-5qetu56d>🇩🇪 +49</option> <option value="+351" data-astro-cid-5qetu56d>🇵🇹 +351</option> <option value="+52" data-astro-cid-5qetu56d>🇲🇽 +52</option> <option value="+1" data-astro-cid-5qetu56d>🇺🇸/🇨🇦 +1</option> </select> <input id="customerPhone" name="customerPhone" type="tel" required class="flex-1 p-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition placeholder-gray-400" placeholder="612 345 678" data-astro-cid-5qetu56d> </div> </div> <!-- Email --> <div data-astro-cid-5qetu56d> <label for="customerEmail" class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d>
📧
${lang === "es" && "Correo electrónico"} ${lang === "en" && "Email address"} ${lang === "it" && "Indirizzo email"} ${lang === "fr" && "Adresse email"} *
</label> <input id="customerEmail" name="customerEmail" type="email" required class="w-full p-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition placeholder-gray-400" placeholder="email@ejemplo.com" data-astro-cid-5qetu56d> </div> <!-- Confirmar Email --> <div data-astro-cid-5qetu56d> <label for="customerEmailConfirm" class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d>
✅
${lang === "es" && "Confirma tu correo"} ${lang === "en" && "Confirm your email"} ${lang === "it" && "Conferma la tua email"} ${lang === "fr" && "Confirmez votre email"} *
</label> <input id="customerEmailConfirm" name="customerEmailConfirm" type="email" required class="w-full p-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition placeholder-gray-400"${addAttribute(lang === "es" ? "Repite tu correo" : "Repeat your email", "placeholder")} data-astro-cid-5qetu56d> <p id="emailMismatch" class="text-xs text-red-500 mt-1 hidden" data-astro-cid-5qetu56d> ${lang === "es" && "Los correos no coinciden."} ${lang === "en" && "Emails do not match."} </p> </div> <!-- Comentarios --> <div class="md:col-span-2" data-astro-cid-5qetu56d> <label for="customerComments" class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d>
💬
${lang === "es" && "Comentarios (opcional)"} ${lang === "en" && "Comments (optional)"} ${lang === "it" && "Commenti (opzionale)"} ${lang === "fr" && "Commentaires (optionnel)"} </label> <textarea id="customerComments" name="customerComments" rows="3" class="w-full p-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition placeholder-gray-400"${addAttribute(
    lang === "es" ? "Ej: viajamos con niños pequeños, silla de ruedas, etc." : "Anything we should know?",
    "placeholder"
  )} data-astro-cid-5qetu56d></textarea> </div> <!-- Como nos conociste --> <div data-astro-cid-5qetu56d> <label for="howHeard" class="block text-gray-700 font-semibold mb-2" data-astro-cid-5qetu56d> ${howHeardLabelByLang[lang] || howHeardLabelByLang.es} </label> <select id="howHeard" name="howHeard" class="w-full p-3 border border-gray-300 rounded-xl bg-white focus:border-gray-900 focus:ring-2 focus:ring-yellow-300 focus:outline-none text-sm" data-astro-cid-5qetu56d> <option value="" data-astro-cid-5qetu56d>${lang === "es" ? "Selecciona una opción" : "Select an option"}</option> <option value="google" data-astro-cid-5qetu56d>Web / Google</option> <option value="flyer" data-astro-cid-5qetu56d>Flyer</option> <option value="instagram" data-astro-cid-5qetu56d>Instagram</option> <option value="facebook" data-astro-cid-5qetu56d>Facebook</option> <option value="youtube" data-astro-cid-5qetu56d>YouTube</option> <option value="friends" data-astro-cid-5qetu56d>Amigos / Familia</option> <option value="guruwalk" data-astro-cid-5qetu56d>GuruWalk</option> <option value="civitatis" data-astro-cid-5qetu56d>Civitatis</option> <option value="tripadvisor" data-astro-cid-5qetu56d>TripAdvisor</option> <option value="getyourguide" data-astro-cid-5qetu56d>GetYourGuide</option> <option value="freetour" data-astro-cid-5qetu56d>FreeTour.com</option> <option value="meeting-point" data-astro-cid-5qetu56d>Punto de encuentro</option> <option value="other" data-astro-cid-5qetu56d>Otro</option> </select> </div> <!-- Marketing --> <div class="flex items-start gap-3 md:col-span-2" data-astro-cid-5qetu56d> <input id="marketingConsent" name="marketingConsent" type="checkbox" class="mt-1 accent-gray-900" data-astro-cid-5qetu56d> <span class="text-sm text-gray-700" data-astro-cid-5qetu56d> ${marketingTextByLang[lang] || marketingTextByLang.es} </span> </div> </div> </div> <!-- PASO 3: RESUMEN + TÉRMINOS --> <div id="step3" class="booking-step hidden space-y-6" data-astro-cid-5qetu56d> <h3 class="text-2xl font-bold text-gray-900" data-astro-cid-5qetu56d>
✅ ${confirmTitleByLang[lang] || confirmTitleByLang.es} </h3> <div class="bg-gray-50 rounded-2xl border-2 border-gray-200 p-6 space-y-4" data-astro-cid-5qetu56d> <h4 class="font-semibold text-lg text-gray-800" data-astro-cid-5qetu56d> ${bookingSummaryByLang[lang] || bookingSummaryByLang.es} </h4> <div class="space-y-3 text-gray-700 text-sm" data-astro-cid-5qetu56d> <div class="flex justify-between" data-astro-cid-5qetu56d> <span data-astro-cid-5qetu56d>Tour</span> <span class="font-semibold text-right max-w-[60%]" data-astro-cid-5qetu56d> ${tour?.titulo} </span> </div> <div class="flex justify-between" data-astro-cid-5qetu56d> <span data-astro-cid-5qetu56d>${lang === "es" ? "Fecha" : "Date"}</span> <span class="font-semibold" id="summaryDate" data-astro-cid-5qetu56d>--/--/----</span> </div> <div class="flex justify-between" data-astro-cid-5qetu56d> <span data-astro-cid-5qetu56d>${lang === "es" ? "Horario" : "Time"}</span> <span class="font-semibold" id="summaryTime" data-astro-cid-5qetu56d>--:--</span> </div> <div class="flex justify-between" data-astro-cid-5qetu56d> <span data-astro-cid-5qetu56d> ${lang === "es" ? "Participantes" : "Participants"} </span> <span class="font-semibold" id="summaryParticipants" data-astro-cid-5qetu56d>--</span> </div> <div class="flex justify-between" data-astro-cid-5qetu56d> <span data-astro-cid-5qetu56d>${lang === "es" ? "Idioma" : "Language"}</span> <span class="font-semibold uppercase" data-astro-cid-5qetu56d>${lang}</span> </div> </div> </div> <div class="space-y-4" data-astro-cid-5qetu56d> <label class="flex items-start gap-3 cursor-pointer" data-astro-cid-5qetu56d> <input type="checkbox" id="agreeToTerms" name="agreeToTerms" required class="mt-1 text-blue-600 focus:ring-blue-500 rounded" data-astro-cid-5qetu56d> <span class="text-sm text-gray-700" data-astro-cid-5qetu56d> ${privacyTextByLang[lang] || privacyTextByLang.es} *
</span> </label> <p class="text-xs text-gray-500" data-astro-cid-5qetu56d> ${lang === "es" && "Al confirmar, recibirás un email automático con todos los detalles y un mensaje preparado para compartir por WhatsApp."} ${lang === "en" && "After confirming, you will receive an automatic email with all details and a pre-filled message to share on WhatsApp."} </p> </div> <!-- CONFIRMAR RESERVA / SOLICITUD --> <button id="confirmBooking" type="button" class="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none" disabled data-astro-cid-5qetu56d> ${isPrivateTour && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5qetu56d": true }, { "default": async ($$result2) => renderTemplate`${lang === "es" && "📩 Enviar solicitud"}${lang === "en" && "📩 Send request"}${lang === "it" && "📩 Invia richiesta"}${lang === "fr" && "📩 Envoyer la demande"}${!["es", "en", "it", "fr"].includes(lang) && "📩 Send request"}` })}`} ${!isPrivateTour && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5qetu56d": true }, { "default": async ($$result2) => renderTemplate`${lang === "es" && "✅ Confirmar reserva"}${lang === "en" && "✅ Confirm booking"}${lang === "it" && "✅ Conferma prenotazione"}${lang === "fr" && "✅ Confirmer la réservation"}${!["es", "en", "it", "fr"].includes(lang) && "✅ Confirm booking"}` })}`} </button> </div> <!-- VISTA DE ÉXITO (fallback si no redirigimos) --> <div id="bookingSuccess" class="hidden space-y-4 text-center py-10" data-astro-cid-5qetu56d> <!-- TÍTULO --> <h3 class="text-2xl md:text-3xl font-bold text-green-600 mb-2" data-astro-cid-5qetu56d> ${isPrivateTour && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5qetu56d": true }, { "default": async ($$result2) => renderTemplate`${lang === "es" && "✅ Solicitud confirmada"}${lang === "en" && "✅ Request confirmed"}${lang === "it" && "✅ Richiesta confermata"}${lang === "fr" && "✅ Demande confirmée"}${!["es", "en", "it", "fr"].includes(lang) && "✅ Request confirmed"}` })}`} ${!isPrivateTour && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5qetu56d": true }, { "default": async ($$result2) => renderTemplate`${lang === "es" && "🎉 ¡Reserva confirmada!"}${lang === "en" && "🎉 Booking confirmed!"}${lang === "it" && "🎉 Prenotazione confermata!"}${lang === "fr" && "🎉 Réservation confirmée !"}${!["es", "en", "it", "fr"].includes(lang) && "🎉 Booking confirmed!"}` })}`} </h3> <!-- TEXTO --> <p class="text-gray-700 text-sm md:text-base max-w-xl mx-auto" data-astro-cid-5qetu56d> ${isPrivateTour && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5qetu56d": true }, { "default": async ($$result2) => renderTemplate`${lang === "es" && "Hemos recibido tu solicitud. Te contactaremos por email o WhatsApp para definir el itinerario, la fecha final y el precio del tour privado."}${lang === "en" && "We’ve received your request. We’ll contact you by email or WhatsApp to define the itinerary, final date and price of your private tour."}${lang === "it" && "Abbiamo ricevuto la tua richiesta. Ti contatteremo via email o WhatsApp per definire itinerario, data finale e prezzo del tour privato."}${lang === "fr" && "Nous avons reçu votre demande. Nous vous contacterons par email ou WhatsApp pour définir l’itinéraire, la date finale et le prix du tour privé."}${!["es", "en", "it", "fr"].includes(lang) && "We’ve received your request and will contact you shortly."}` })}`} ${!isPrivateTour && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5qetu56d": true }, { "default": async ($$result2) => renderTemplate`${lang === "es" && "Te hemos enviado un email con todos los detalles del tour. Si no lo ves en unos minutos, revisa tu carpeta de spam o promociones."}${lang === "en" && "We have sent you an email with all the tour details. If you don't see it in a few minutes, please check your spam or promotions folder."}${lang === "it" && "Ti abbiamo inviato un’email con tutti i dettagli del tour. Se non la vedi, controlla la cartella spam o promozioni."}${lang === "fr" && "Nous vous avons envoyé un email avec tous les détails du tour. Pensez à vérifier votre dossier spam ou promotions."}${!["es", "en", "it", "fr"].includes(lang) && "We have sent you an email with the tour details."}` })}`} </p> <!-- BOTÓN SECUNDARIO --> <button id="newBooking" type="button" class="mt-4 inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition" data-astro-cid-5qetu56d> ${isPrivateTour && lang === "es" && "Volver a BelgoTours"} ${isPrivateTour && lang === "en" && "Back to BelgoTours"} ${isPrivateTour && lang === "it" && "Torna a BelgoTours"} ${isPrivateTour && lang === "fr" && "Retour à BelgoTours"} ${!isPrivateTour && lang === "es" && "Hacer otra reserva"} ${!isPrivateTour && lang === "en" && "Make another booking"} ${!isPrivateTour && lang === "it" && "Fai un'altra prenotazione"} ${!isPrivateTour && lang === "fr" && "Faire une autre réservation"} </button> </div> <!-- NAVEGACIÓN --> <div id="bookingNav" class="flex justify-between mt-4 pt-4 border-t border-gray-200" data-astro-cid-5qetu56d> <button id="prevStep" type="button" class="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled data-astro-cid-5qetu56d> ${lang === "es" && "← Anterior"} ${lang === "en" && "← Previous"} ${lang === "it" && "← Precedente"} ${lang === "fr" && "← Précédent"} ${!["es", "en", "it", "fr"].includes(lang) && "← Previous"} </button> <!-- SIGUIENTE (FLUJO) --> <button id="nextStep" type="button" class="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition transform hover:scale-105 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none" disabled data-astro-cid-5qetu56d> ${lang === "es" && "Siguiente →"} ${lang === "en" && "Next →"} ${lang === "it" && "Successivo →"} ${lang === "fr" && "Suivant →"} ${!["es", "en", "it", "fr"].includes(lang) && "Next →"} </button> </div> </div> </div>  ${renderScript($$result, "/home/edu/belgotours-desarrollo/src/components/booking/BookingForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/edu/belgotours-desarrollo/src/components/booking/BookingForm.astro", void 0);

const $$Astro$1 = createAstro("https://belgotours.com");
const $$PrivateRequestForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PrivateRequestForm;
  const { tour, lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form class="space-y-4" method="POST" action="/api/private-request"> <input type="hidden" name="tour_slug"${addAttribute(tour.slug, "value")}> <input type="hidden" name="idioma"${addAttribute(lang, "value")}> <input type="hidden" name="tipo_experiencia" value="privado"> <div> <label class="block text-sm font-medium">Nombre</label> <input required name="nombre" class="w-full border rounded-lg p-3"> </div> <div> <label class="block text-sm font-medium">Email</label> <input required type="email" name="email" class="w-full border rounded-lg p-3"> </div> <div> <label class="block text-sm font-medium">WhatsApp</label> <input required name="telefono" class="w-full border rounded-lg p-3"> </div> <div> <label class="block text-sm font-medium">Personas</label> <input type="number" min="1" name="personas" class="w-full border rounded-lg p-3"> </div> <div> <label class="block text-sm font-medium">Mensaje (opcional)</label> <textarea name="mensaje" rows="3" class="w-full border rounded-lg p-3"></textarea> </div> <button class="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl">
Enviar solicitud
</button> <p class="text-sm text-gray-500 text-center">
Te contactaremos por WhatsApp para definir fecha y precio.  
    Cancelación gratuita.
</p> </form>`;
}, "/home/edu/belgotours-desarrollo/src/components/booking/PrivateRequestForm.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$tourSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tourSlug;
  const { tourSlug, lang } = Astro2.params;
  const tourData = await getTourBySlug(tourSlug, lang);
  if (!tourData) {
    return new Response(null, {
      status: 302,
      headers: { Location: `/${lang}/404/` }
    });
  }
  const attrs = tourData.attributes ?? tourData;
  const tourId = tourData.id ?? attrs?.id ?? null;
  function mediaUrl(media, preferredSize = "large") {
    if (!media) return "";
    const apiBase = "http://168.119.183.247:1337/api"?.replace("/api", "") || "http://168.119.183.247:1337";
    const url = media?.formats?.[preferredSize]?.url || media?.formats?.medium?.url || media?.formats?.small?.url || media?.url;
    return url ? `${apiBase}${url}` : "";
  }
  const heroConfig = attrs.hero_config || {};
  const heroMedia = attrs.hero_media || {};
  const elementosUnicosRaw = attrs.elementos_unicos ?? attrs.elementosUnicos ?? null;
  const elementosUnicos = Array.isArray(elementosUnicosRaw) ? elementosUnicosRaw[0] || {} : elementosUnicosRaw || {};
  const tipoTour = attrs.tipo_tour || "free";
  const isPrivate = tipoTour === "privado";
  const isSpecial = tipoTour === "especial";
  const isFree = tipoTour === "free" && attrs.pago_libre === true;
  const tour = {
    id: tourId,
    slug: attrs.slug,
    titulo: attrs.titulo || "Sin título",
    subtitulo: attrs.subtitulo || "",
    seoH1: attrs.seo_h1 || "",
    claimHero: attrs.claim_hero || "",
    descripcion: attrs.descripcion || "",
    ciudad: attrs.ciudad || "",
    // bruselas|brujas
    idioma: Array.isArray(attrs.idiomas) ? attrs.idiomas[0] : attrs.idioma || null,
    duracion: attrs.duracion ?? null,
    maxPersonas: attrs.maxPersonas || 25,
    // pricing
    pagoLibre: attrs.pago_libre === true,
    precioBase: Number(attrs.precio_base ?? attrs.precio ?? 0),
    moneda: attrs.moneda || "€",
    // meeting point + geo
    puntoEncuentro: attrs.punto_encuentro || "",
    lat: attrs.coordenadas_lat ?? null,
    lng: attrs.coordenadas_lng ?? null,
    // ratings
    rating: typeof attrs.rating === "number" ? attrs.rating : null,
    totalReviews: typeof attrs.totalReviews === "number" ? attrs.totalReviews : null,
    // hero
    heroMedia: {
      imagen: mediaUrl(heroMedia?.imagen, "large"),
      video: heroMedia?.video || ""
    },
    heroConfig,
    badges: String(heroConfig?.badges || "").split(",").map((b) => b.trim()).filter(Boolean),
    elementosUnicos,
    itinerario: (attrs.itinerarios || []).map((p) => ({
      titulo: p.titulo || "",
      duracion: p.duracion || "",
      descripcion: p.descripcion || "",
      icono: p.icono || "",
      imagen: mediaUrl(p.imagen, "medium")
    })),
    // 👇 preparado para guías (NO se usa aún)
    guias: Array.isArray(attrs.guias) ? attrs.guias : attrs.guias?.data || [],
    // SEO fields
    seoTitle: attrs.seo_title || "",
    seoDescription: attrs.seo_description || "",
    seoCanonical: attrs.seo_canonical || "",
    mostrarRatingHero: attrs.mostrar_rating_hero === true
  };
  const ui = {
    es: {
      reservar: isPrivate ? "Solicitar tour privado" : "Reservar ahora",
      verDisponibilidad: "Ver disponibilidad",
      overview: "Descripción",
      itinerario: "Itinerario",
      puntoEncuentro: "Punto de encuentro",
      reviews: "Reseñas",
      verEnMapa: "Ver en Google Maps",
      consultaWhatsApp: "Consulta por WhatsApp",
      aportacionLibre: "Aportación libre",
      tuDecides: "Tú decides al final",
      pagoAlGuia: "Pago al guía",
      presupuesto: "Presupuesto",
      microPrivate: "Te contactamos por WhatsApp para definir fecha y precio"
    },
    en: {
      reservar: isPrivate ? "Request private tour" : "Book now",
      verDisponibilidad: "Check availability",
      overview: "Overview",
      itinerario: "Itinerary",
      puntoEncuentro: "Meeting point",
      reviews: "Reviews",
      verEnMapa: "Open in Google Maps",
      consultaWhatsApp: "Ask on WhatsApp",
      aportacionLibre: "Pay what you want",
      tuDecides: "You decide at the end",
      pagoAlGuia: "Pay the guide",
      presupuesto: "Quote",
      microPrivate: "We’ll contact you via WhatsApp to define date & price"
    },
    it: {
      reservar: isPrivate ? "Richiedi tour privato" : "Prenota ora",
      verDisponibilidad: "Vedi disponibilità",
      overview: "Descrizione",
      itinerario: "Itinerario",
      puntoEncuentro: "Punto d’incontro",
      reviews: "Recensioni",
      verEnMapa: "Apri in Google Maps",
      consultaWhatsApp: "Chiedi su WhatsApp",
      aportacionLibre: "Offerta libera",
      tuDecides: "Decidi alla fine",
      pagoAlGuia: "Paghi la guida",
      presupuesto: "Preventivo",
      microPrivate: "Ti contatteremo su WhatsApp per data e prezzo"
    },
    fr: {
      reservar: "Demander un tour privé",
      verDisponibilidad: "Voir disponibilités",
      overview: "Description",
      itinerario: "Itinéraire",
      puntoEncuentro: "Point de rencontre",
      reviews: "Avis",
      verEnMapa: "Ouvrir Google Maps",
      consultaWhatsApp: "Demander sur WhatsApp",
      aportacionLibre: "Contribution libre",
      tuDecides: "Vous décidez à la fin",
      pagoAlGuia: "Paiement au guide",
      presupuesto: "Devis",
      microPrivate: "On vous contacte sur WhatsApp pour définir date et prix"
    }
  }[lang] || {
    reservar: "Reservar ahora",
    verDisponibilidad: "Ver disponibilidad",
    overview: "Descripción",
    itinerario: "Itinerario",
    puntoEncuentro: "Punto de encuentro",
    reviews: "Reseñas",
    verEnMapa: "Ver en Google Maps",
    consultaWhatsApp: "Consulta por WhatsApp",
    aportacionLibre: "Aportación libre",
    tuDecides: "Tú decides al final",
    pagoAlGuia: "Pago al guía",
    presupuesto: "Presupuesto",
    microPrivate: "Te contactamos por WhatsApp para definir fecha y precio"
  };
  function formatDuration(value) {
    if (value === null || value === void 0) return "";
    const n = Number(value);
    if (Number.isNaN(n)) return "";
    const h = Math.floor(n / 60);
    const m = n % 60;
    if (!h) return `${m} min`;
    if (!m) return `${h} h`;
    return `${h} h ${m} min`;
  }
  const durationLabel = formatDuration(tour.duracion);
  const langLabel = tour.idioma ? String(tour.idioma).toUpperCase() : "";
  const cityLabel = tour.ciudad ? String(tour.ciudad).toUpperCase() : "";
  const heroSubtitleFallback = {
    es: {
      free: "Historia, arquitectura y rincones ocultos con guías locales.",
      fixed: "Una experiencia cuidada con guías locales.",
      private: "Tour privado a tu ritmo con guía local.",
      special: "Una experiencia única y deliciosa en Bélgica."
    },
    en: {
      free: "History, architecture and hidden corners with local guides.",
      fixed: "A curated experience with local guides.",
      private: "Private tour at your pace with a local guide.",
      special: "A unique and delicious Belgian experience."
    },
    it: {
      free: "Storia, architettura e angoli nascosti con guide locali.",
      fixed: "Un’esperienza curata con guide locali.",
      private: "Tour privato al tuo ritmo con guida locale.",
      special: "Un’esperienza belga unica e gustosa."
    }
  };
  const subtitleKey = isPrivate ? "private" : isSpecial ? "special" : isFree ? "free" : "fixed";
  const heroSubtitle = tour.subtitulo && tour.subtitulo.trim() || heroSubtitleFallback[lang]?.[subtitleKey] || heroSubtitleFallback.es.free;
  const heroClaim = tour.claimHero && String(tour.claimHero).trim() || heroSubtitle;
  const heroPriceTitle = isPrivate ? ui.presupuesto : isFree ? ui.aportacionLibre : `${tour.precioBase}${tour.moneda}`;
  const heroPriceNote = isPrivate ? ui.consultaWhatsApp : isFree ? ui.tuDecides : ui.pagoAlGuia;
  const heroCtaMode = isPrivate ? "private-request" : "booking";
  const heroCtaText = ui.reservar;
  const heroCtaMicro = isPrivate ? ui.microPrivate : "";
  const mapsUrl = (() => {
    if (tour.lat && tour.lng) {
      return `https://www.google.com/maps?q=${tour.lat},${tour.lng}`;
    }
    if (tour.puntoEncuentro) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tour.puntoEncuentro)}`;
    }
    return "";
  })();
  const hasRealRating = tour.rating !== null && tour.totalReviews !== null && tour.totalReviews > 0 && tour.rating > 0;
  const hasReviewsForSchema = tour.mostrarRatingHero && hasRealRating;
  const metaTitle = tour.seoTitle && tour.seoTitle.trim() || `${tour.titulo} | BelgoTours`;
  const metaDescription = tour.seoDescription && tour.seoDescription.trim() || heroSubtitle;
  const canonicalUrl = tour.seoCanonical && tour.seoCanonical.trim() || `https://belgotours.com/${lang}/tours/${tour.slug}/`;
  const tourSchema = hasReviewsForSchema ? {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${canonicalUrl}#tour`,
    name: tour.titulo,
    description: metaDescription,
    url: canonicalUrl,
    image: tour.heroMedia?.imagen ? [tour.heroMedia.imagen] : [],
    inLanguage: lang,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(tour.rating).toFixed(1),
      reviewCount: tour.totalReviews,
      bestRating: "5",
      worstRating: "1"
    },
    provider: {
      "@type": "Organization",
      name: "BelgoTours",
      url: "https://belgotours.com",
      logo: {
        "@type": "ImageObject",
        url: "https://belgotours.com/Logo-belgotours.webp"
      }
    }
  } : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metaTitle, "description": metaDescription, "canonical": canonicalUrl, "data-astro-cid-cohcmlcb": true }, { "default": async ($$result2) => renderTemplate`${tourSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n{JSON.stringify(tourSchema)}\n</script>'])))}   ${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden" data-astro-cid-cohcmlcb> <div class="absolute inset-0 z-0" data-astro-cid-cohcmlcb> ${tour.heroMedia?.video ? renderTemplate`<video class="w-full h-full object-cover"${addAttribute(tour.heroMedia.video, "src")} autoplay muted loop playsinline data-astro-cid-cohcmlcb></video>` : tour.heroMedia?.imagen ? renderTemplate`<img${addAttribute(tour.heroMedia.imagen, "src")}${addAttribute(tour.titulo, "alt")} class="w-full h-full object-cover" loading="eager" decoding="async" data-astro-cid-cohcmlcb>` : renderTemplate`<div class="w-full h-full bg-gray-700" data-astro-cid-cohcmlcb></div>`} <div class="absolute inset-0 bg-black/45 md:bg-black/50" data-astro-cid-cohcmlcb></div> </div> <div class="container relative z-10 mx-auto px-4 py-20" data-astro-cid-cohcmlcb> <div class="max-w-4xl mx-auto text-center text-white" data-astro-cid-cohcmlcb> <!-- Badges --> <div class="flex flex-wrap justify-center gap-3 mb-6" data-astro-cid-cohcmlcb> ${tour.badges?.map((badge) => renderTemplate`<span class="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold" data-astro-cid-cohcmlcb> ${badge} </span>`)} ${tour.elementosUnicos?.gamificacion && renderTemplate`<span class="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold" data-astro-cid-cohcmlcb>
🎮 TOUR GAMIFICADO
</span>`} </div> <!-- H1 --> <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-astro-cid-cohcmlcb> ${tour.seoH1 || tour.titulo} </h1> <!-- Claim (NO heading) --> <p class="text-xl md:text-2xl mb-8 opacity-90" data-astro-cid-cohcmlcb> ${heroClaim} </p> <!-- Chips --> <div class="flex flex-wrap justify-center items-center gap-4 text-lg text-white/90 mb-10" data-astro-cid-cohcmlcb> ${heroConfig?.mostrar_duracion !== false && durationLabel && renderTemplate`<span data-astro-cid-cohcmlcb>⏱️ ${durationLabel}</span>`}  ${langLabel && renderTemplate`<span data-astro-cid-cohcmlcb>🌍 ${langLabel}</span>`} ${cityLabel && renderTemplate`<span data-astro-cid-cohcmlcb>🏙️ ${cityLabel}</span>`} </div> <!-- CTA Card --> <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto" data-astro-cid-cohcmlcb> <div class="flex flex-col md:flex-row items-center justify-between gap-6" data-astro-cid-cohcmlcb> <div class="text-center md:text-left" data-astro-cid-cohcmlcb> <div class="text-3xl font-bold text-yellow-400 mb-1" data-astro-cid-cohcmlcb> ${heroPriceTitle} </div> <div class="text-white/80 text-sm" data-astro-cid-cohcmlcb> ${heroPriceNote} </div> ${heroCtaMicro && renderTemplate`<p class="mt-3 text-sm text-white/80" data-astro-cid-cohcmlcb>${heroCtaMicro}</p>`} </div> <div class="flex flex-col gap-3 w-full md:w-auto" data-astro-cid-cohcmlcb> <button type="button"${addAttribute(`${heroCtaMode === "booking" ? "openBookingBtn" : "openPrivateRequestBtn"} bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl transition duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2 w-full md:w-auto`, "class")} aria-expanded="false" data-astro-cid-cohcmlcb> <span data-astro-cid-cohcmlcb>🗓️ ${heroCtaText}</span> </button> ${heroCtaMode === "private-request" && mapsUrl && renderTemplate`<a${addAttribute(mapsUrl, "href")} target="_blank" rel="noopener" class="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 inline-flex items-center justify-center gap-2" data-astro-cid-cohcmlcb> <span data-astro-cid-cohcmlcb>📍 ${ui.verEnMapa}</span> </a>`} </div> </div>  </div> </div> </div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60 text-2xl" data-astro-cid-cohcmlcb>
⬇️
</div> </section>  <section id="overview" class="py-16 md:py-20 bg-gray-50 md:bg-white" data-astro-cid-cohcmlcb> <div class="container mx-auto px-4" data-astro-cid-cohcmlcb> <!-- Título + subtítulo (editorial, centrado) --> <div class="max-w-3xl mx-auto text-center mb-10 md:mb-14" data-astro-cid-cohcmlcb> <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight" data-astro-cid-cohcmlcb> ${ui.overview} </h2> <p class="mt-4 text-base md:text-lg text-gray-600" data-astro-cid-cohcmlcb> ${heroSubtitle} </p> </div> <!-- Card de contenido (premium, lectura cómoda) --> <div class="max-w-3xl mx-auto" data-astro-cid-cohcmlcb> <div class="bg-white rounded-2xl p-6 md:p-10 shadow-soft" data-astro-cid-cohcmlcb> <div class="prose prose-lg md:prose-xl max-w-none text-gray-700
                 prose-p:leading-relaxed
                 prose-p:my-5
                 prose-strong:text-gray-900
                 prose-h3:text-xl
                 prose-h3:mt-8
                 prose-h3:mb-3" data-astro-cid-cohcmlcb> ${tour.descripcion ? renderTemplate`<div data-astro-cid-cohcmlcb>${unescapeHTML(tour.descripcion)}</div>` : renderTemplate`<p data-astro-cid-cohcmlcb>${heroSubtitle}</p>`} </div> </div> </div> </div> </section>  <div class="h-12 md:h-20 bg-white" data-astro-cid-cohcmlcb></div>  <section id="itinerario" class="py-16 md:py-20 bg-gray-50" data-astro-cid-cohcmlcb> <div class="container mx-auto px-4" data-astro-cid-cohcmlcb> <!-- Título de sección (mejor jerarquía + centrado) --> <div class="max-w-3xl mx-auto text-center mb-12" data-astro-cid-cohcmlcb> <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight" data-astro-cid-cohcmlcb> ${ui.itinerario} </h2> <p class="mt-3 text-base md:text-lg text-gray-600" data-astro-cid-cohcmlcb>
Descubre los lugares que visitaremos paso a paso durante el recorrido
</p> </div> <!-- Lista de paradas --> <div class="max-w-4xl mx-auto space-y-12" data-astro-cid-cohcmlcb> ${tour.itinerario?.map((punto, index) => renderTemplate`<article class="bg-white rounded-3xl shadow-card overflow-hidden" data-astro-cid-cohcmlcb> <div class="grid grid-cols-1 md:grid-cols-2" data-astro-cid-cohcmlcb> <!-- Imagen --> <div class="relative" data-astro-cid-cohcmlcb> ${punto.imagen ? renderTemplate`<img${addAttribute(punto.imagen, "src")}${addAttribute(punto.titulo, "alt")} class="w-full h-64 md:h-full object-cover" loading="lazy" decoding="async" data-astro-cid-cohcmlcb>` : renderTemplate`<div class="w-full h-64 md:h-full bg-gray-200" data-astro-cid-cohcmlcb></div>`} <!-- Número de parada (SIN #, estilo premium) --> <div class="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center text-sm font-semibold" data-astro-cid-cohcmlcb> ${index + 1} </div> </div> <!-- Contenido --> <div class="p-6 md:p-10 flex flex-col justify-center" data-astro-cid-cohcmlcb> <h3 class="text-2xl font-bold text-gray-900 mb-2" data-astro-cid-cohcmlcb> ${punto.titulo} </h3> ${punto.duracion && renderTemplate`<div class="text-sm text-gray-500 mb-4 flex items-center gap-1" data-astro-cid-cohcmlcb>
⏱️ <span data-astro-cid-cohcmlcb>${punto.duracion}</span> </div>`} <p class="text-gray-700 leading-relaxed text-base md:text-lg" data-astro-cid-cohcmlcb> ${punto.descripcion} </p> </div> </div> </article>`)} </div> </div> </section>  <section id="mapa" class="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white" data-astro-cid-cohcmlcb> <div class="container mx-auto px-4" data-astro-cid-cohcmlcb> <div class="max-w-4xl mx-auto" data-astro-cid-cohcmlcb> <!-- Título --> <h2 class="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight" data-astro-cid-cohcmlcb> ${ui.puntoEncuentro} </h2> <!-- Card --> <div class="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 shadow-soft" data-astro-cid-cohcmlcb> <!-- Dirección --> <p class="text-lg font-medium mb-5 text-white" data-astro-cid-cohcmlcb> ${tour.puntoEncuentro || "—"} </p> <!-- CTA Maps --> ${mapsUrl && renderTemplate`<a${addAttribute(mapsUrl, "href")} target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-brand-yellow text-brand-black font-bold px-6 py-3 rounded-xl hover:bg-brand-yellow-dark transition" data-astro-cid-cohcmlcb>
📍 ${ui.verEnMapa} </a>`} <!-- Tip --> <div class="mt-6 text-sm text-white/70" data-astro-cid-cohcmlcb>
Tip: llega al menos 10 minutos antes para empezar sin prisas.
</div> </div> </div> </div> </section>  <section id="reviews" class="py-16 md:py-20 bg-white" data-astro-cid-cohcmlcb> <div class="container mx-auto px-4" data-astro-cid-cohcmlcb> <div class="max-w-6xl mx-auto" data-astro-cid-cohcmlcb> <!-- Título + subtítulo (jerarquía clara) --> <div class="mb-10" data-astro-cid-cohcmlcb> <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight" data-astro-cid-cohcmlcb> ${ui.reviews} </h2> <p class="mt-2 text-base md:text-lg text-gray-600" data-astro-cid-cohcmlcb>
Opiniones reales y verificadas de viajeros.
</p> </div> <!-- Reviews --> ${renderComponent($$result2, "ReviewsPro", $$ReviewsPro, { "lang": lang, "tourSlug": tour.slug, "data-astro-cid-cohcmlcb": true })} </div> </div> </section>  ${renderComponent($$result2, "GuidesSectionTour", $$GuidesSectionTour, { "lang": lang, "guias": tour.guias, "data-astro-cid-cohcmlcb": true })}  <div id="bookingWidget" class="fixed bottom-4 left-4 right-4
         md:left-auto md:right-10 md:bottom-8
         z-40 transition-all duration-300" data-astro-cid-cohcmlcb> <div class="bg-white shadow-2xl rounded-2xl
           flex items-center justify-center md:justify-end
           px-4 py-4" data-astro-cid-cohcmlcb> <button type="button"${addAttribute(`${heroCtaMode === "booking" ? "openBookingBtn" : "openPrivateRequestBtn"}
        bg-yellow-400 hover:bg-yellow-300
        text-gray-900 font-extrabold
        text-base
        px-8 py-4
        rounded-2xl
        w-full md:w-auto md:min-w-[320px]
        inline-flex items-center justify-center gap-2
        transition`, "class")} aria-expanded="false" data-astro-cid-cohcmlcb>
🗓️ ${ui.verDisponibilidad} </button> </div> </div>  <div id="bookingOverlay" class="booking-overlay fixed inset-0 z-[70] hidden" data-astro-cid-cohcmlcb></div>  <aside id="bookingPanel" class="booking-panel fixed left-0 right-0 bottom-0 z-[80]
         rounded-t-2xl shadow-2xl bg-white translate-y-full" data-astro-cid-cohcmlcb> <div class="panel-grabber w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-2" data-astro-cid-cohcmlcb></div> <div class="flex items-center justify-end px-4 py-3 border-b border-gray-200" data-astro-cid-cohcmlcb> <button type="button" class="closeBookingBtn p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Cerrar" data-astro-cid-cohcmlcb>
✕
</button> </div> <div class="panel-content overflow-y-auto max-h-[calc(100vh-8rem)] p-4" data-astro-cid-cohcmlcb> ${heroCtaMode === "booking" ? renderTemplate`${renderComponent($$result2, "BookingForm", $$BookingForm, { "tour": tour, "lang": lang, "data-astro-cid-cohcmlcb": true })}` : renderTemplate`${renderComponent($$result2, "PrivateRequestForm", $$PrivateRequestForm, { "tour": tour, "lang": lang, "data-astro-cid-cohcmlcb": true })}`} </div> </aside>  ${renderScript($$result2, "/home/edu/belgotours-desarrollo/src/pages/[lang]/tours/[tourSlug].astro?astro&type=script&index=0&lang.ts")}  ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang, "data-astro-cid-cohcmlcb": true })}  ${tour.elementosUnicos?.aiAssistant && renderTemplate`${renderComponent($$result2, "AIAssistant", $$AIAssistant, { "tourId": tour.slug, "tourName": tour.titulo, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/edu/belgotours-desarrollo/src/components/tours/AIAssistant.astro", "client:component-export": "default", "data-astro-cid-cohcmlcb": true })}`}${tour.elementosUnicos?.gamificacion && renderTemplate`${renderComponent($$result2, "GamificationSystem", $$GamificationSystem, { "tourId": tour.slug, "tourName": tour.titulo, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/edu/belgotours-desarrollo/src/components/tours/GamificationSystem.astro", "client:component-export": "default", "data-astro-cid-cohcmlcb": true })}`} ${renderScript($$result2, "/home/edu/belgotours-desarrollo/src/pages/[lang]/tours/[tourSlug].astro?astro&type=script&index=1&lang.ts")} `, "header": async ($$result2) => renderTemplate`<div data-astro-cid-cohcmlcb> ${renderComponent($$result2, "TourHeader", $$TourHeader, { "lang": lang, "data-astro-cid-cohcmlcb": true })} </div>` })}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/tours/[tourSlug].astro", void 0);
const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/tours/[tourSlug].astro";
const $$url = "/[lang]/tours/[tourSlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tourSlug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
