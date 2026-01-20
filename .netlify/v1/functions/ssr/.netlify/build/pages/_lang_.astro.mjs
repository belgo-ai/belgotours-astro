/* empty css                                                     */
import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, j as renderScript, r as renderTemplate, n as defineScriptVars, i as renderComponent, u as unescapeHTML } from '../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Du494iuS.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Footer } from '../chunks/Footer_DIYA9f-P.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro("https://belgotours.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    lang = "es",
    showLanguageSelector = true
  } = Astro2.props;
  const TEXTS = {
    es: {
      tours: "Tours",
      guides: "Gu\xEDas",
      blog: "Blog",
      contact: "Contacto"
    },
    en: {
      tours: "Tours",
      guides: "Guides",
      blog: "Blog",
      contact: "Contact"
    },
    it: {
      tours: "Tour",
      guides: "Guide",
      blog: "Blog",
      contact: "Contatto"
    },
    fr: {
      tours: "Tours",
      guides: "Guides",
      blog: "Blog",
      contact: "Contact"
    },
    pt: {
      tours: "Tours",
      guides: "Guias",
      blog: "Blog",
      contact: "Contato"
    }
  };
  const t = TEXTS[lang] ?? TEXTS.es;
  const languages = [
    { code: "es", name: "Espa\xF1ol", flag: "\u{1F1EA}\u{1F1F8}" },
    { code: "en", name: "English", flag: "\u{1F1EC}\u{1F1E7}" },
    { code: "it", name: "Italiano", flag: "\u{1F1EE}\u{1F1F9}" },
    { code: "fr", name: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
    { code: "pt", name: "Portugu\xEAs", flag: "\u{1F1F5}\u{1F1F9}" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="w-full bg-brand-black text-white border-b border-white/10 backdrop-blur-lg"> <div class="container flex items-center justify-between py-4"> <!-- LOGO --> <a${addAttribute(`/${lang}`, "href")} class="flex items-center gap-3"> <img src="/Logo-belgotours.webp" alt="BelgoTours" class="h-10 w-auto" loading="lazy"> <span class="text-lg font-semibold tracking-wide">BelgoTours</span> </a> <!-- NAV Desktop --> <nav class="hidden md:flex items-center gap-6 text-sm"> <a${addAttribute(`/${lang}#tours`, "href")} class="hover:text-brand-yellow transition"> ${t.tours} </a> <a${addAttribute(`/${lang}#guides`, "href")} class="hover:text-brand-yellow transition"> ${t.guides} </a> <a${addAttribute(`/${lang}/blog`, "href")} class="hover:text-brand-yellow transition"> ${t.blog} </a> <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener" class="hover:text-brand-yellow transition"> ${t.contact} </a> </nav> <!-- ACCIONES DERECHA --> <div class="flex items-center gap-4"> <!-- 🌐 SELECTOR DE IDIOMA --> ${showLanguageSelector && renderTemplate`<div class="relative hidden md:block"> <button id="langGlobalBtn" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"> <span>🌐</span> <span class="font-medium uppercase">${lang}</span> </button> <div id="langGlobalMenu" class="absolute right-0 mt-2 w-40 bg-brand-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl opacity-0 invisible translate-y-2 transition-all duration-200 z-50"> ${languages.map((l) => renderTemplate`<a${addAttribute(`/${l.code}`, "href")}${addAttribute(`flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/10 transition
                ${l.code === lang ? "text-brand-yellow font-semibold" : "text-white"}`, "class")}> <span class="text-lg">${l.flag}</span> <span>${l.name}</span> </a>`)} </div> </div>`} <!-- MENU MOBILE --> <button id="mobileMenuBtn" class="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
☰
</button> </div> </div> <!-- MOBILE MENU --> <div id="mobileMenu" class="md:hidden max-h-0 overflow-hidden transition-all duration-300 bg-brand-black/95 border-t border-white/10"> <nav class="flex flex-col p-4 space-y-4 text-lg"> <a${addAttribute(`/${lang}#tours`, "href")} class="hover:text-brand-yellow transition"> ${t.tours} </a> <a${addAttribute(`/${lang}#guides`, "href")} class="hover:text-brand-yellow transition"> ${t.guides} </a> <a${addAttribute(`/${lang}/blog`, "href")} class="hover:text-brand-yellow transition"> ${t.blog} </a> <a${addAttribute(`/${lang}/contacto`, "href")} class="hover:text-brand-yellow transition"> ${t.contact} </a> <hr class="border-white/10"> ${showLanguageSelector && renderTemplate`<div class="flex flex-col space-y-2"> ${languages.map((l) => renderTemplate`<a${addAttribute(`/${l.code}`, "href")}${addAttribute(`flex items-center gap-3 px-2 py-2 rounded-lg transition
              ${l.code === lang ? "text-brand-yellow font-semibold" : "text-white/80 hover:text-white"}`, "class")}> <span class="text-xl">${l.flag}</span> <span>${l.name}</span> </a>`)} </div>`} </nav> </div> </header> ${renderScript($$result, "/home/edu/belgotours-desarrollo/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/edu/belgotours-desarrollo/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro("https://belgotours.com");
const $$HeroLeft = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroLeft;
  const {
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroHighlighted
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-6"> <!-- H1 PRINCIPAL (SEO / GEO) --> <h1 class="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"> ${heroTitle} </h1> <!-- H2 SUBTÍTULO ESTRATÉGICO --> <h2 class="text-xl font-semibold text-yellow-400 md:text-2xl"> ${heroSubtitle} </h2> <!-- DESCRIPCIÓN CLARA --> <p class="max-w-2xl text-base text-white/80 md:text-lg"> ${heroDescription} ${heroHighlighted && renderTemplate`<span class="font-semibold text-yellow-400"> ${heroHighlighted}</span>`} </p> </div>`;
}, "/home/edu/belgotours-desarrollo/src/components/home/HeroLeft.astro", void 0);

const $$Astro$6 = createAstro("https://belgotours.com");
const $$HeroRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeroRight;
  const { imageUrl, lang } = Astro2.props;
  const TEXTS = {
    es: {
      title: "Free Tour por el centro hist\xF3rico",
      subtitle: "Bruselas \xB7 Gu\xEDa local \xB7 Grupos reducidos",
      duration: "\u23F1 2 h 15 min",
      languages: "\u{1F30D} Varios idiomas",
      price: "Aportaci\xF3n libre",
      description: "Reserva sin pago previo. Al finalizar el tour, decides libremente cu\xE1nto aportar seg\xFAn tu experiencia.",
      alt: "Free tour por el centro hist\xF3rico de Bruselas con gu\xEDa local"
    },
    en: {
      title: "Free Walking Tour of the Historic Center",
      subtitle: "Brussels \xB7 Local guide \xB7 Small groups",
      duration: "\u23F1 2 h 15 min",
      languages: "\u{1F30D} Multiple languages",
      price: "Pay what you want",
      description: "Book with no upfront payment. At the end of the tour, you decide how much to contribute based on your experience.",
      alt: "Free walking tour of Brussels historic center with a local guide"
    },
    it: {
      title: "Free Tour del centro storico",
      subtitle: "Bruxelles \xB7 Guida locale \xB7 Piccoli gruppi",
      duration: "\u23F1 2 h 15 min",
      languages: "\u{1F30D} Pi\xF9 lingue",
      price: "Offerta libera",
      description: "Prenota senza pagamento anticipato. Alla fine del tour, decidi liberamente quanto offrire in base alla tua esperienza.",
      alt: "Free tour del centro storico di Bruxelles con guida locale"
    },
    fr: {
      title: "Free Tour du centre historique",
      subtitle: "Bruxelles \xB7 Guide local \xB7 Petits groupes",
      duration: "\u23F1 2 h 15 min",
      languages: "\u{1F30D} Plusieurs langues",
      price: "Contribution libre",
      description: "R\xE9servez sans paiement pr\xE9alable. \xC0 la fin du tour, vous d\xE9cidez librement du montant \xE0 offrir selon votre exp\xE9rience.",
      alt: "Free tour du centre historique de Bruxelles avec guide local"
    },
    pt: {
      title: "Free Tour pelo centro hist\xF3rico",
      subtitle: "Bruxelas \xB7 Guia local \xB7 Grupos pequenos",
      duration: "\u23F1 2 h 15 min",
      languages: "\u{1F30D} V\xE1rios idiomas",
      price: "Contribui\xE7\xE3o livre",
      description: "Reserve sem pagamento antecipado. Ao final do tour, voc\xEA decide livremente quanto contribuir de acordo com sua experi\xEAncia.",
      alt: "Free tour pelo centro hist\xF3rico de Bruxelas com guia local"
    }
  };
  const t = TEXTS[lang] ?? TEXTS.es;
  return renderTemplate`<!--
  HERO RIGHT
  - Visual de apoyo
  - Desktop only
-->${maybeRenderHead()}<div class="relative hidden lg:block max-w-md mx-auto"> <article class="bg-white rounded-3xl border border-neutral-200 shadow-soft overflow-hidden"> <!-- IMAGEN --> <div class="relative h-60 overflow-hidden"> <img${addAttribute(imageUrl, "src")}${addAttribute(t.alt, "alt")} loading="lazy" decoding="async" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div> </div> <!-- CONTENIDO --> <div class="p-5 space-y-4"> <!-- TÍTULO --> <div> <h3 class="text-base md:text-lg font-semibold text-neutral-900"> ${t.title} </h3> <p class="text-sm text-neutral-500 mt-1"> ${t.subtitle} </p> </div> <!-- META INFO --> <div class="flex flex-wrap gap-2 text-xs text-neutral-600"> <span class="px-2 py-1 rounded-full bg-neutral-100"> ${t.duration} </span> <span class="px-2 py-1 rounded-full bg-neutral-100"> ${t.languages} </span> <span class="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700"> ${t.price} </span> </div> <!-- TEXTO --> <p class="text-sm text-neutral-600"> ${t.description} </p> </div> </article> </div>`;
}, "/home/edu/belgotours-desarrollo/src/components/home/HeroRight.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://belgotours.com");
const $$SearchBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SearchBox;
  const { lang, title, subtitle, tours = [], ctaLabel } = Astro2.props;
  const TEXTS = {
    es: {
      languageLabel: "Idioma del tour",
      languagePlaceholder: "Selecciona un idioma\u2026",
      tourLabel: "Tour disponible",
      tourPlaceholder: "Selecciona un tour\u2026",
      trust: [
        "\u2713 Free tours con aportaci\xF3n libre",
        "\u2713 Tours privados bajo consulta",
        "\u2713 Cancelaci\xF3n gratuita"
      ]
    },
    en: {
      languageLabel: "Tour language",
      languagePlaceholder: "Select a language\u2026",
      tourLabel: "Available tour",
      tourPlaceholder: "Select a tour\u2026",
      trust: [
        "\u2713 Tip-based free tours",
        "\u2713 Private tours on request",
        "\u2713 Free cancellation"
      ]
    },
    it: {
      languageLabel: "Lingua del tour",
      languagePlaceholder: "Seleziona una lingua\u2026",
      tourLabel: "Tour disponibile",
      tourPlaceholder: "Seleziona un tour\u2026",
      trust: [
        "\u2713 Tour gratuiti a offerta libera",
        "\u2713 Tour privati su richiesta",
        "\u2713 Cancellazione gratuita"
      ]
    },
    fr: {
      languageLabel: "Langue du tour",
      languagePlaceholder: "S\xE9lectionnez une langue\u2026",
      tourLabel: "Tour disponible",
      tourPlaceholder: "S\xE9lectionnez un tour\u2026",
      trust: [
        "\u2713 Free tours \xE0 contribution libre",
        "\u2713 Tours priv\xE9s sur demande",
        "\u2713 Annulation gratuite"
      ]
    },
    pt: {
      languageLabel: "Idioma do tour",
      languagePlaceholder: "Selecione um idioma\u2026",
      tourLabel: "Tour dispon\xEDvel",
      tourPlaceholder: "Selecione um tour\u2026",
      trust: [
        "\u2713 Free tours com contribui\xE7\xE3o livre",
        "\u2713 Tours privados sob consulta",
        "\u2713 Cancelamento gratuito"
      ]
    }
  };
  const t = TEXTS[lang] ?? TEXTS.es;
  const LANG_META = {
    es: { label: "Espa\xF1ol", flag: "\u{1F1EA}\u{1F1F8}" },
    en: { label: "English", flag: "\u{1F1EC}\u{1F1E7}" },
    it: { label: "Italiano", flag: "\u{1F1EE}\u{1F1F9}" },
    fr: { label: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" }
  };
  const ALL_LANGS = ["es", "en", "it", "fr"];
  const uid = `sb-${Math.random().toString(36).slice(2)}`;
  return renderTemplate(_a || (_a = __template(["", '<section class="relative z-10"', '> <div class="max-w-5xl mx-auto bg-white rounded-3xl border border-neutral-200 shadow-soft p-6 md:p-8"> <!-- T\xCDTULO --> <header class="text-center mb-8"> <h3 class="text-2xl md:text-3xl font-bold text-neutral-900">', '</h3> <p class="text-neutral-600 mt-1">', '</p> </header> <!-- FORM --> <div class="grid md:grid-cols-3 gap-4 items-end"> <!-- IDIOMA --> <div class="relative"> <label class="block text-sm font-medium text-neutral-700 mb-2"> ', ' </label> <button type="button" data-lang-trigger class="w-full h-[52px] px-4 flex items-center justify-between rounded-xl border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 transition"> <span data-lang-label class="text-neutral-500"> ', ' </span> <svg class="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24"> <path d="M19 9l-7 7-7-7" stroke="currentColor" stroke-width="2"></path> </svg> </button> <div data-lang-dropdown class="absolute left-0 right-0 mt-2 p-3 bg-white border border-neutral-200 rounded-xl shadow-xl flex gap-3 justify-center opacity-0 pointer-events-none transition z-20"> ', ' </div> </div> <!-- TOUR --> <div> <label class="block text-sm font-medium text-neutral-700 mb-2"> ', ' </label> <select data-tour-select disabled class="w-full h-[52px] rounded-xl border border-neutral-300 px-4 text-neutral-800 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900"> <option value="">', '</option> </select> </div> <!-- CTA --> <div> <button data-search-button disabled class="w-full h-[52px] rounded-xl bg-neutral-900 text-white font-semibold hover:bg-black transition disabled:opacity-40"> ', ' </button> </div> </div> <!-- MICRO CONFIANZA --> <div class="flex flex-wrap justify-center gap-6 text-xs text-neutral-500 mt-6"> ', " </div> </div> </section> <script>(function(){", '\n  const root = document.querySelector(`[data-searchbox="${uid}"]`);\n  if (!root) return;\n\n  const trigger = root.querySelector("[data-lang-trigger]");\n  const dropdown = root.querySelector("[data-lang-dropdown]");\n  const label = root.querySelector("[data-lang-label]");\n  const pills = root.querySelectorAll(".lang-pill");\n  const tourSelect = root.querySelector("[data-tour-select]");\n  const button = root.querySelector("[data-search-button]");\n\n  let selectedLang = null;\n\n  const closeDropdown = () => {\n    dropdown.classList.add("opacity-0", "pointer-events-none");\n  };\n\n  trigger.addEventListener("click", () => {\n    dropdown.classList.toggle("opacity-0");\n    dropdown.classList.toggle("pointer-events-none");\n  });\n\n  pills.forEach(pill => {\n    pill.addEventListener("click", () => {\n      selectedLang = pill.dataset.lang;\n      label.textContent = LANG_META[selectedLang].label;\n      closeDropdown();\n\n      tourSelect.innerHTML = `<option value="">${t.tourPlaceholder}</option>`;\n      const filtered = tours.filter(t => t.tourLang === selectedLang);\n\n      filtered.forEach(tour => {\n        const opt = document.createElement("option");\n        opt.value = tour.url;\n        opt.textContent = `${tour.name} \u2022 ${tour.duration} \u2022 ${tour.price}`;\n        tourSelect.appendChild(opt);\n      });\n\n      tourSelect.disabled = false;\n      tourSelect.classList.remove("bg-neutral-100");\n      tourSelect.classList.add("bg-white");\n      button.disabled = true;\n    });\n  });\n\n  tourSelect.addEventListener("change", () => {\n    button.disabled = !tourSelect.value;\n  });\n\n  button.addEventListener("click", () => {\n    if (tourSelect.value) window.location.href = tourSelect.value;\n  });\n\n  document.addEventListener("click", e => {\n    if (!root.contains(e.target)) closeDropdown();\n  });\n})();<\/script>'], ["", '<section class="relative z-10"', '> <div class="max-w-5xl mx-auto bg-white rounded-3xl border border-neutral-200 shadow-soft p-6 md:p-8"> <!-- T\xCDTULO --> <header class="text-center mb-8"> <h3 class="text-2xl md:text-3xl font-bold text-neutral-900">', '</h3> <p class="text-neutral-600 mt-1">', '</p> </header> <!-- FORM --> <div class="grid md:grid-cols-3 gap-4 items-end"> <!-- IDIOMA --> <div class="relative"> <label class="block text-sm font-medium text-neutral-700 mb-2"> ', ' </label> <button type="button" data-lang-trigger class="w-full h-[52px] px-4 flex items-center justify-between rounded-xl border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 transition"> <span data-lang-label class="text-neutral-500"> ', ' </span> <svg class="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24"> <path d="M19 9l-7 7-7-7" stroke="currentColor" stroke-width="2"></path> </svg> </button> <div data-lang-dropdown class="absolute left-0 right-0 mt-2 p-3 bg-white border border-neutral-200 rounded-xl shadow-xl flex gap-3 justify-center opacity-0 pointer-events-none transition z-20"> ', ' </div> </div> <!-- TOUR --> <div> <label class="block text-sm font-medium text-neutral-700 mb-2"> ', ' </label> <select data-tour-select disabled class="w-full h-[52px] rounded-xl border border-neutral-300 px-4 text-neutral-800 bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900"> <option value="">', '</option> </select> </div> <!-- CTA --> <div> <button data-search-button disabled class="w-full h-[52px] rounded-xl bg-neutral-900 text-white font-semibold hover:bg-black transition disabled:opacity-40"> ', ' </button> </div> </div> <!-- MICRO CONFIANZA --> <div class="flex flex-wrap justify-center gap-6 text-xs text-neutral-500 mt-6"> ', " </div> </div> </section> <script>(function(){", '\n  const root = document.querySelector(\\`[data-searchbox="\\${uid}"]\\`);\n  if (!root) return;\n\n  const trigger = root.querySelector("[data-lang-trigger]");\n  const dropdown = root.querySelector("[data-lang-dropdown]");\n  const label = root.querySelector("[data-lang-label]");\n  const pills = root.querySelectorAll(".lang-pill");\n  const tourSelect = root.querySelector("[data-tour-select]");\n  const button = root.querySelector("[data-search-button]");\n\n  let selectedLang = null;\n\n  const closeDropdown = () => {\n    dropdown.classList.add("opacity-0", "pointer-events-none");\n  };\n\n  trigger.addEventListener("click", () => {\n    dropdown.classList.toggle("opacity-0");\n    dropdown.classList.toggle("pointer-events-none");\n  });\n\n  pills.forEach(pill => {\n    pill.addEventListener("click", () => {\n      selectedLang = pill.dataset.lang;\n      label.textContent = LANG_META[selectedLang].label;\n      closeDropdown();\n\n      tourSelect.innerHTML = \\`<option value="">\\${t.tourPlaceholder}</option>\\`;\n      const filtered = tours.filter(t => t.tourLang === selectedLang);\n\n      filtered.forEach(tour => {\n        const opt = document.createElement("option");\n        opt.value = tour.url;\n        opt.textContent = \\`\\${tour.name} \u2022 \\${tour.duration} \u2022 \\${tour.price}\\`;\n        tourSelect.appendChild(opt);\n      });\n\n      tourSelect.disabled = false;\n      tourSelect.classList.remove("bg-neutral-100");\n      tourSelect.classList.add("bg-white");\n      button.disabled = true;\n    });\n  });\n\n  tourSelect.addEventListener("change", () => {\n    button.disabled = !tourSelect.value;\n  });\n\n  button.addEventListener("click", () => {\n    if (tourSelect.value) window.location.href = tourSelect.value;\n  });\n\n  document.addEventListener("click", e => {\n    if (!root.contains(e.target)) closeDropdown();\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(uid, "data-searchbox"), title, subtitle, t.languageLabel, t.languagePlaceholder, ALL_LANGS.map((code) => renderTemplate`<button type="button" class="lang-pill w-11 h-11 rounded-full border border-neutral-200 bg-white hover:shadow-md transition flex items-center justify-center text-xl"${addAttribute(code, "data-lang")}${addAttribute(LANG_META[code].label, "aria-label")}${addAttribute(LANG_META[code].label, "title")}> ${LANG_META[code].flag} </button>`), t.tourLabel, t.tourPlaceholder, ctaLabel, t.trust.map((item) => renderTemplate`<span>${item}</span>`), defineScriptVars({ tours, LANG_META, uid, t }));
}, "/home/edu/belgotours-desarrollo/src/components/home/SearchBox.astro", void 0);

const $$Astro$4 = createAstro("https://belgotours.com");
const $$HeroWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeroWrapper;
  const {
    lang,
    heroImageUrl,
    heroBadge,
    tours = [],
    trustRating,
    trustReviews
  } = Astro2.props;
  const textsByLang = {
    es: {
      heroTitle: "Descubre B\xE9lgica con gu\xEDas locales",
      heroSubtitle: "Free Tours y Tours Privados en Bruselas y Brujas",
      heroDescription: "Experiencias aut\xE9nticas, grupos peque\xF1os y cancelaci\xF3n gratuita.",
      heroHighlighted: "Espa\xF1ol, Ingl\xE9s, Franc\xE9s e Italiano",
      searchTitle: "Encuentra tu tour ideal",
      searchSubtitle: "Reserva en 2 minutos \xB7 Cancelaci\xF3n gratuita",
      searchCta: "Ver tour"
    },
    en: {
      heroTitle: "Discover Belgium with local guides",
      heroSubtitle: "Free Tours and Private Tours in Brussels and Bruges",
      heroDescription: "Authentic experiences, small groups and free cancellation.",
      heroHighlighted: "Spanish, English, French and Italian",
      searchTitle: "Find your perfect tour",
      searchSubtitle: "Book in 2 minutes \xB7 Free cancellation",
      searchCta: "View tour"
    },
    it: {
      heroTitle: "Scopri il Belgio con guide locali",
      heroSubtitle: "Free Tours e Tour Privati a Bruxelles e Bruges",
      heroDescription: "Esperienze autentiche, piccoli gruppi e cancellazione gratuita.",
      heroHighlighted: "Spagnolo, Inglese, Francese e Italiano",
      searchTitle: "Trova il tour ideale",
      searchSubtitle: "Prenota in 2 minuti \xB7 Cancellazione gratuita",
      searchCta: "Vedi tour"
    },
    fr: {
      heroTitle: "D\xE9couvrez la Belgique avec des guides locaux",
      heroSubtitle: "Free Tours et Tours Priv\xE9s \xE0 Bruxelles et Bruges",
      heroDescription: "Exp\xE9riences authentiques, petits groupes et annulation gratuite.",
      heroHighlighted: "Espagnol, Anglais, Fran\xE7ais et Italien",
      searchTitle: "Trouvez votre tour id\xE9al",
      searchSubtitle: "R\xE9servation en 2 minutes \xB7 Annulation gratuite",
      searchCta: "Voir le tour"
    },
    pt: {
      heroTitle: "Descubra a B\xE9lgica com guias locais",
      heroSubtitle: "Free Tours e Tours Privados em Bruxelas e Bruges",
      heroDescription: "Experi\xEAncias aut\xEAnticas, pequenos grupos e cancelamento gratuito.",
      heroHighlighted: "Espanhol, Ingl\xEAs, Franc\xEAs e Italiano",
      searchTitle: "Encontre seu tour ideal",
      searchSubtitle: "Reserve em 2 minutos \xB7 Cancelamento gratuito",
      searchCta: "Ver tour"
    }
  };
  const t = textsByLang[lang] || textsByLang.es;
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden bg-neutral-950 text-white pt-14 pb-16 lg:pt-20 lg:pb-20"> <!-- DECORACIÓN --> <div class="pointer-events-none absolute inset-0 opacity-30"> <div class="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div> </div> <div class="container relative mx-auto px-4 max-w-7xl"> <!-- HERO --> <div class="grid lg:grid-cols-12 gap-10 items-start"> <div class="order-1 lg:col-span-7"> ${renderComponent($$result, "HeroLeft", $$HeroLeft, { "heroTitle": t.heroTitle, "heroSubtitle": t.heroSubtitle, "heroDescription": t.heroDescription, "heroHighlighted": t.heroHighlighted, "heroBadge": heroBadge, "trustRating": trustRating, "trustReviews": trustReviews })} </div> <div class="order-2 hidden lg:block lg:col-span-5"> ${renderComponent($$result, "HeroRight", $$HeroRight, { "imageUrl": heroImageUrl, "lang": lang })} </div> </div> <!-- SEARCHBOX --> <div class="order-2 mt-8 lg:mt-12"> ${renderComponent($$result, "SearchBox", $$SearchBox, { "lang": lang, "title": t.searchTitle, "subtitle": t.searchSubtitle, "ctaLabel": t.searchCta, "tours": tours })} </div> <!-- TRUST BAR (desactivado por ahora) -->  </div> </section>`;
}, "/home/edu/belgotours-desarrollo/src/components/home/HeroWrapper.astro", void 0);

const $$Astro$3 = createAstro("https://belgotours.com");
const $$ToursDestacados = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ToursDestacados;
  const { lang } = Astro2.props;
  const toursData = {
    "es": [
      // FREETOURS
      {
        id: 1,
        titulo: "Free Tour Bruselas en Espa\xF1ol",
        descripcion: "Descubre los secretos de Bruselas con gu\xEDas locales expertos. Grand Place, Manneken Pis y mucho m\xE1s.",
        precio: 0,
        moneda: "\u20AC",
        tipoPrecio: "Precio libre",
        duracion: " 2 h 15 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 4.9,
        reviews: 1247,
        imagen: "/images/ToursDestacados/free-tour-espanol-bruselas-belgotours.webp",
        badge: "M\xC1S POPULAR",
        categoria: "free-tour",
        slug: "free-tour-bruselas"
      },
      {
        id: 2,
        titulo: "Free Tour Brujas en Espa\xF1ol",
        descripcion: "Explora la Venecia del Norte con sus canales medievales y arquitectura impresionante.",
        precio: 0,
        moneda: "\u20AC",
        tipoPrecio: "Precio libre",
        duracion: " 2 h 15 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 4.8,
        reviews: 892,
        imagen: "/images/ToursDestacados/free-tour-brujas-en-espanol-belgotours.webp",
        badge: "RECOMENDADO",
        categoria: "free-tour",
        slug: "free-tour-brujas"
      },
      // TOUR DEL CHOCOLATE
      {
        id: 3,
        titulo: "Tour del Chocolate y cerveza en Espa\xF1ol",
        descripcion: "Ruta gastron\xF3mica por las mejores chocolater\xEDas de Bruselas. Degustaciones incluidas.",
        precio: 45,
        moneda: "\u20AC",
        tipoPrecio: "por persona",
        duracion: "2 h 30 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 4.7,
        reviews: 543,
        imagen: "/images/ToursDestacados/tour-chocolate-y-cerveza-en-espanol-bruselas.webp",
        badge: "GASTRONOM\xCDA",
        categoria: "tour-especial",
        slug: "tour-chocolate-cerveza-bruselas"
      },
      // TOURS PRIVADOS
      {
        id: 4,
        titulo: "Tour Privado Bruselas en Espa\xF1ol",
        descripcion: "Experiencia personalizada con gu\xEDa privado. Itinerario flexible seg\xFAn tus intereses.",
        precio: 120,
        moneda: "\u20AC",
        tipoPrecio: "por grupo",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 5,
        reviews: 356,
        imagen: "/images/ToursDestacados/tour-privado-bruselas-espanol-belgotours.webp",
        badge: "EXCLUSIVO",
        categoria: "tour-privado",
        slug: "tour-privado-bruselas"
      },
      {
        id: 5,
        titulo: "Tour Privado Brujas en Espa\xF1ol",
        descripcion: "Descubre Brujas de forma exclusiva con un gu\xEDa privado especializado.",
        precio: 140,
        moneda: "\u20AC",
        tipoPrecio: "por grupo",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 4.9,
        reviews: 278,
        imagen: "/images/ToursDestacados/tour-privado-brujas-espanol-belgotours.webp",
        badge: "PRIVADO",
        categoria: "tour-privado",
        slug: "tour-privado-brujas"
      }
    ],
    "en": [
      // FREETOURS
      {
        id: 1,
        titulo: "Free Tour Brussels in English",
        descripcion: "Discover Brussels secrets with expert local guides. Grand Place, Manneken Pis and much more.",
        precio: 0,
        moneda: "\u20AC",
        tipoPrecio: "Pay what you want",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EC}\u{1F1E7} English"],
        rating: 4.9,
        reviews: 987,
        imagen: "/images/ToursDestacados/free-tour-english-brussels-belgotours.webp",
        badge: "MOST POPULAR",
        categoria: "free-tour",
        slug: "free-tour-brussels"
      },
      // TOURS PRIVADOS
      {
        id: 2,
        titulo: "Private Tour Brussels in English",
        descripcion: "Personalized experience with private guide. Flexible itinerary according to your interests.",
        precio: 120,
        moneda: "\u20AC",
        tipoPrecio: "per group",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EC}\u{1F1E7} English"],
        rating: 5,
        reviews: 289,
        imagen: "/images/ToursDestacados/private-tour-brussels-english-belgotours.webp",
        badge: "EXCLUSIVE",
        categoria: "tour-privado",
        slug: "private-tour-brussels"
      }
    ],
    "it": [
      // FREETOURS
      {
        id: 1,
        titulo: "Free Tour Bruxelles in Italiano",
        descripcion: "Scopri i segreti di Bruxelles con guide locali esperte. Grand Place, Manneken Pis e molto altro.",
        precio: 0,
        moneda: "\u20AC",
        tipoPrecio: "Prezzo libero",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EE}\u{1F1F9} Italiano"],
        rating: 4.8,
        reviews: 432,
        imagen: "/images/ToursDestacados/free-tour-italiano-bruxelles-belgotours.webp",
        badge: "POPOLARE",
        categoria: "free-tour",
        slug: "free-tour-bruxelles"
      },
      // TOURS PRIVADOS
      {
        id: 2,
        titulo: "Tour Privato Bruxelles in Italiano",
        descripcion: "Esperienza personalizzata con guida privata. Itinerario flessibile secondo i tuoi interessi.",
        precio: 120,
        moneda: "\u20AC",
        tipoPrecio: "per gruppo",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EE}\u{1F1F9} Italiano"],
        rating: 5,
        reviews: 187,
        imagen: "/images/ToursDestacados/tour-privato-bruxelles-italiano-belgotours.webp",
        badge: "ESCLUSIVO",
        categoria: "tour-privado",
        slug: "tour-privato-bruxelles"
      }
    ],
    "fr": [
      // TOURS DISPONIBLES para francés - SOLO LOS QUE EXISTEN
      {
        id: 1,
        titulo: "Tour Priv\xE9 Bruxelles Personnalis\xE9",
        descripcion: "Exp\xE9rience exclusive avec guide priv\xE9 francophone. Itin\xE9raire flexible selon vos int\xE9r\xEAts. D\xE9couvrez Bruxelles \xE0 votre rythme.",
        precio: 120,
        moneda: "\u20AC",
        tipoPrecio: "par groupe",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EB}\u{1F1F7} Fran\xE7ais"],
        rating: 5,
        reviews: 234,
        imagen: "/images/ToursDestacados/tour-prive-bruxelles-francais-belgotours.webp",
        badge: "EXCLUSIF",
        categoria: "tour-privado",
        slug: "tour-prive-bruxelles"
      }
    ],
    "pt": [
      // FREE TOUR BRUSELAS EN INGLÉS
      {
        id: 1,
        titulo: "Free Tour Essencial de Bruxelas",
        descripcion: "Descubra os segredos de Bruxelas com guias locais especialistas. Grand Place, Manneken Pis e muito mais.",
        precio: 0,
        moneda: "\u20AC",
        tipoPrecio: "Pague quanto quiser",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EC}\u{1F1E7} English"],
        rating: 4.9,
        reviews: 987,
        imagen: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop",
        badge: "POPULAR",
        categoria: "free-tour",
        slug: "free-tour-brussels"
      },
      // FREE TOUR BRUSELAS EN ESPAÑOL
      {
        id: 2,
        titulo: "Free Tour Bruselas em Espanhol",
        descripcion: "Descubra os segredos de Bruxelas com guias locais especialistas. Grand Place, Manneken Pis e muito mais.",
        precio: 0,
        moneda: "\u20AC",
        tipoPrecio: "Pre\xE7o livre",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 4.9,
        reviews: 1247,
        imagen: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop",
        badge: "POPULAR",
        categoria: "free-tour",
        slug: "free-tour-bruselas"
      },
      // TOUR CHOCOLATE EN ESPAÑOL
      {
        id: 3,
        titulo: "Tour do Chocolate em Espanhol",
        descripcion: "Rota gastron\xF3mica pelas melhores chocolatarias de Bruxelas. Degusta\xE7\xF5es inclu\xEDdas.",
        precio: 45,
        moneda: "\u20AC",
        tipoPrecio: "por pessoa",
        duracion: "2 h 30 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 4.7,
        reviews: 543,
        imagen: "https://images.unsplash.com/photo-1565806269258-2d4c202834b8?w=400&h=300&fit=crop",
        badge: "GASTRONOM\xCDA",
        categoria: "tour-especial",
        slug: "tour-chocolate-cerveza-bruselas"
      },
      // FREE TOUR BRUJAS EN ESPAÑOL
      {
        id: 4,
        titulo: "Free Tour M\xE1gico de Bruges",
        descripcion: "Explore a Veneza do Norte com seus canais medievais e arquitetura impressionante.",
        precio: 0,
        moneda: "\u20AC",
        tipoPrecio: "Pre\xE7o livre",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 4.8,
        reviews: 892,
        imagen: "https://images.unsplash.com/photo-1599661044176-35d063b4d8bf?w=400&h=300&fit=crop",
        badge: "RECOMENDADO",
        categoria: "free-tour",
        slug: "free-tour-brujas"
      },
      // TOUR PRIVADO BRUSELAS EN INGLÉS
      {
        id: 5,
        titulo: "Tour Privado de Bruxelas em Ingl\xEAs",
        descripcion: "Experi\xEAncia personalizada com guia privado. Itiner\xE1rio flex\xEDvel de acordo com seus interesses.",
        precio: 120,
        moneda: "\u20AC",
        tipoPrecio: "por grupo",
        duracion: "2 h 15 min",
        idiomas: ["\u{1F1EC}\u{1F1E7} English"],
        rating: 5,
        reviews: 289,
        imagen: "https://images.unsplash.com/photo-1628746220626-43ff86c7b23d?w=400&h=300&fit=crop",
        badge: "EXCLUSIVO",
        categoria: "tour-privado",
        slug: "private-tour-brussels"
      },
      // TOUR PRIVADO BRUSELAS EN ESPAÑOL
      {
        id: 6,
        titulo: "Tour Privado de Bruxelas em Espanhol",
        descripcion: "Experi\xEAncia personalizada com guia privado. Itiner\xE1rio flex\xEDvel de acordo com seus interesses.",
        precio: 120,
        moneda: "\u20AC",
        tipoPrecio: "por grupo",
        duracion: " 2 h 15 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 5,
        reviews: 356,
        imagen: "https://images.unsplash.com/photo-1628746220626-43ff86c7b23d?w=400&h=300&fit=crop",
        badge: "EXCLUSIVO",
        categoria: "tour-privado",
        slug: "tour-privado-bruselas"
      },
      // TOUR PRIVADO BRUJAS EN ESPAÑOL
      {
        id: 7,
        titulo: "Tour Privado de Bruges em Espanhol",
        descripcion: "Descubra Bruges de forma exclusiva com um guia privado especializado.",
        precio: 140,
        moneda: "\u20AC",
        tipoPrecio: "por grupo",
        duracion: "2 h 10 min",
        idiomas: ["\u{1F1EA}\u{1F1F8} Espa\xF1ol"],
        rating: 4.9,
        reviews: 278,
        imagen: "https://images.unsplash.com/photo-1583324113626-70df0d74f833?w=400&h=300&fit=crop",
        badge: "PRIVADO",
        categoria: "tour-privado",
        slug: "tour-privado-brujas"
      }
    ]
  };
  const sectionTexts = {
    es: {
      title: "Nuestros <span class='text-blue-600'>Tours M\xE1s Populares</span>",
      subtitle: "Descubre las experiencias mejor valoradas por miles de viajeros. <span class='font-semibold text-blue-600'>Reserva ahora, paga despu\xE9s.</span>",
      filters: {
        all: "Todos los Tours",
        free: "\u{1F49B} Pago libre",
        private: "\u{1F451} Tours Privados",
        special: "\u{1F36B} Tours Especiales"
      },
      tourDetails: {
        reviews: "rese\xF1as",
        free: "Pago libre",
        book: "Reservar",
        perGroup: "por grupo",
        perPerson: "por persona"
      },
      cta: {
        button: "Ver Todos los Tours Disponibles",
        features: "\u26A1 Confirmaci\xF3n instant\xE1nea \u2022 Cancelaci\xF3n gratuita \u2022 \u{1F465} Grupos reducidos"
      }
    },
    en: {
      title: "Our <span class='text-blue-600'>Most Popular Tours</span>",
      subtitle: "Discover the best-rated experiences by thousands of travelers. <span class='font-semibold text-blue-600'>Book now, pay later.</span>",
      filters: {
        all: "All Tours",
        free: "\u{1F49B} Tip-based",
        private: "\u{1F451} Private Tours",
        special: "\u{1F36B} Special Tours"
      },
      tourDetails: {
        reviews: "reviews",
        free: "Tip-based",
        book: "Book Now",
        perGroup: "per group",
        perPerson: "per person"
      },
      cta: {
        button: "View All Available Tours",
        features: "\u26A1 Instant confirmation \u2022 Free cancellation \u2022 \u{1F465} Small groups"
      }
    },
    it: {
      title: "I Nostri <span class='text-blue-600'>Tour Pi\xF9 Popolari</span>",
      subtitle: "Scopri le esperienze meglio valutate da migliaia di viaggiatori. <span class='font-semibold text-blue-600'>Prenota ora, paga dopo.</span>",
      filters: {
        all: "Tutti i Tour",
        free: "\u{1F49B} Offerta libera",
        private: "\u{1F451} Tour Privati",
        special: "\u{1F36B} Tour Speciali"
      },
      tourDetails: {
        reviews: "recensioni",
        free: "Offerta libera",
        book: "Prenota",
        perGroup: "per gruppo",
        perPerson: "a persona"
      },
      cta: {
        button: "Vedi Tutti i Tour Disponibili",
        features: "\u26A1 Conferma immediata \u2022 Cancellazione gratuita \u2022 \u{1F465} Gruppi piccoli"
      }
    },
    fr: {
      title: "Nos <span class='text-blue-600'>Tours Les Plus Populaires</span>",
      subtitle: "D\xE9couvrez les exp\xE9riences les mieux not\xE9es par des milliers de voyageurs. <span class='font-semibold text-blue-600'>R\xE9servez maintenant, payez plus tard.</span>",
      filters: {
        all: "Tous les Tours",
        free: "\u{1F49B} Participation libre",
        private: "\u{1F451} Tours Priv\xE9s",
        special: "\u{1F36B} Tours Sp\xE9ciaux"
      },
      tourDetails: {
        reviews: "avis",
        free: "Participation libre",
        book: "R\xE9server",
        perGroup: "par groupe",
        perPerson: "par personne"
      },
      cta: {
        button: "Voir Tous les Tours Disponibles",
        features: "\u26A1 Confirmation instantan\xE9e \u2022 Annulation gratuite \u2022 \u{1F465} Petits groupes"
      }
    },
    pt: {
      title: "Nossos <span class='text-blue-600'>Tours Mais Populares</span>",
      subtitle: "Descubra as experi\xEAncias mais bem avaliadas por milhares de viajantes. <span class='font-semibold text-blue-600'>Reserve agora, pague depois.</span>",
      filters: {
        all: "Todos os Tours",
        free: "\u{1F49B} Contribui\xE7\xE3o livre",
        private: "\u{1F451} Tours Privados",
        special: "\u{1F36B} Tours Especiais"
      },
      tourDetails: {
        reviews: "avalia\xE7\xF5es",
        free: "Contribui\xE7\xE3o livre",
        book: "Reservar",
        perGroup: "por grupo",
        perPerson: "por pessoa"
      },
      cta: {
        button: "Ver Todos os Tours Dispon\xEDveis",
        features: "\u26A1 Confirma\xE7\xE3o instant\xE2nea \u2022 Cancelamento gratuito \u2022 \u{1F465} Grupos pequenos"
      }
    }
  };
  const safeLang = ["es", "en", "it", "fr", "pt"].includes(lang) ? lang : "es";
  const toursDestacados = toursData[safeLang];
  const texts = sectionTexts[safeLang];
  const getPriceType = (tour) => {
    if (tour.precio === 0) return texts.tourDetails.free;
    if (tour.tipoPrecio.includes("grupo") || tour.tipoPrecio.includes("group")) {
      return texts.tourDetails.perGroup;
    }
    return texts.tourDetails.perPerson;
  };
  const getTourUrl = (tourSlug, lang2, tourIdiomas) => {
    if (lang2 === "pt") {
      if (tourIdiomas.includes("\u{1F1EA}\u{1F1F8} Espa\xF1ol")) return `/es/tours/${tourSlug}`;
      if (tourIdiomas.includes("\u{1F1EC}\u{1F1E7} English")) return `/en/tours/${tourSlug}`;
    }
    return `/${lang2}/tours/${tourSlug}`;
  };
  return renderTemplate`<!-- SECCIÓN TOURS DESTACADOS -->${maybeRenderHead()}<section id="tours" class="py-20 bg-neutral-50" data-astro-cid-7cylu44t> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-7cylu44t> <!-- Header de la sección --> <header class="text-center mb-14" data-astro-cid-7cylu44t> <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-4" data-astro-cid-7cylu44t>${unescapeHTML(texts.title.replace("text-blue-600", "text-yellow-400"))}</h2> <p class="text-neutral-600 max-w-2xl mx-auto text-lg" data-astro-cid-7cylu44t>${unescapeHTML(texts.subtitle.replace("text-blue-600", "text-yellow-400"))}</p> </header> <!-- Filtros de categorías --> <div class="flex flex-wrap justify-center gap-3 mb-12" data-filters data-astro-cid-7cylu44t> <button data-filter="all" class="filter-btn px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-semibold" data-astro-cid-7cylu44t> ${texts.filters.all} </button> <button data-filter="free-tour" class="filter-btn px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-700 text-sm" data-astro-cid-7cylu44t> ${texts.filters.free} </button> <button data-filter="tour-privado" class="filter-btn px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-700 text-sm" data-astro-cid-7cylu44t> ${texts.filters.private} </button> <button data-filter="tour-especial" class="filter-btn px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-700 text-sm" data-astro-cid-7cylu44t> ${texts.filters.special} </button> </div> <!-- Grid de Tours --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-astro-cid-7cylu44t> ${toursDestacados.map((tour) => renderTemplate`<article${addAttribute(tour.categoria, "data-category")} class="relative bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group tour-card flex flex-col overflow-hidden" data-astro-cid-7cylu44t> <!-- Badge --> ${tour.badge && renderTemplate`<div class="absolute top-4 left-4 z-10" data-astro-cid-7cylu44t> <span class="px-3 py-1 text-xs font-bold rounded-full bg-yellow-400 text-black" data-astro-cid-7cylu44t> ${tour.badge} </span> </div>`} <!-- Imagen --> <div class="relative h-52 overflow-hidden" data-astro-cid-7cylu44t> <img${addAttribute(tour.imagen, "src")}${addAttribute(tour.titulo, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-astro-cid-7cylu44t> <div class="absolute inset-0 bg-black/10" data-astro-cid-7cylu44t></div> </div> <!-- Contenido --> <div class="p-6 flex flex-col flex-1" data-astro-cid-7cylu44t> <!-- Rating (comentado correctamente) -->  <!-- Título y Descripción --> <h3 class="text-xl font-bold text-neutral-900 mb-2 line-clamp-2" data-astro-cid-7cylu44t> ${tour.titulo} </h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2" data-astro-cid-7cylu44t> ${tour.descripcion} </p> <!-- Detalles --> <div class="flex flex-wrap gap-4 mb-4 text-sm text-gray-500" data-astro-cid-7cylu44t> <div class="flex items-center gap-1" data-astro-cid-7cylu44t> <span data-astro-cid-7cylu44t>⏱️</span> <span data-astro-cid-7cylu44t>${tour.duracion}</span> </div> <div class="flex items-center gap-1" data-astro-cid-7cylu44t> <span data-astro-cid-7cylu44t>🌍</span> <span data-astro-cid-7cylu44t>${tour.idiomas[0]}</span> ${tour.idiomas.length > 1 && renderTemplate`<span class="text-xs text-gray-400" data-astro-cid-7cylu44t>
+${tour.idiomas.length - 1} </span>`} </div> </div> <!-- Precio y CTA --> <div class="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto" data-astro-cid-7cylu44t> <!-- CTA (acción principal a la izquierda) --> <a${addAttribute(getTourUrl(tour.slug, lang, tour.idiomas), "href")} class="bg-neutral-900 hover:bg-black text-white font-semibold py-3 px-6 rounded-xl transition duration-300 transform hover:scale-105" data-astro-cid-7cylu44t> ${texts.tourDetails.book} </a> <!-- Precio / tipo (información secundaria a la derecha) --> <div class="flex flex-col text-right" data-astro-cid-7cylu44t> <span class="text-2xl font-bold text-gray-800" data-astro-cid-7cylu44t> ${tour.precio === 0 ? texts.tourDetails.free : `${tour.precio}${tour.moneda}`} </span> <span class="text-xs text-gray-500" data-astro-cid-7cylu44t> ${getPriceType(tour)} </span> </div> </div> </div> </article>`)} </div> <!-- CTA Final --> <div class="text-center mt-12" data-astro-cid-7cylu44t> <a${addAttribute(`/${lang}#tours`, "href")} class="bg-neutral-900 hover:bg-black text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg inline-block" data-astro-cid-7cylu44t> ${texts.cta.button} </a> <p class="text-gray-500 text-sm mt-4" data-astro-cid-7cylu44t> ${texts.cta.features} </p> </div> </div> </section>  ${renderScript($$result, "/home/edu/belgotours-desarrollo/src/components/ToursDestacados.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/edu/belgotours-desarrollo/src/components/ToursDestacados.astro", void 0);

const $$Astro$2 = createAstro("https://belgotours.com");
const $$ReviewsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReviewsSection;
  const { lang } = Astro2.props;
  const STRAPI_API = "http://168.119.183.247:1337/api";
  const textsByLang = {
    es: {
      title: "Lo que dicen nuestros viajeros",
      subtitle: "Opiniones reales y verificadas de personas que han vivido nuestros tours.",
      moreReviews: "Mostrar más reseñas",
      noReviews: "Aún no hay reseñas disponibles en este idioma."
    },
    en: {
      title: "What our travelers say",
      subtitle: "Real, verified reviews from people who experienced our tours.",
      moreReviews: "Show more reviews",
      noReviews: "No reviews available in this language yet."
    },
    it: {
      title: "Cosa dicono i nostri viaggiatori",
      subtitle: "Recensioni reali e verificate di chi ha vissuto i nostri tour.",
      moreReviews: "Mostra altre recensioni",
      noReviews: "Nessuna recensione disponibile in questa lingua."
    },
    fr: {
      title: "Ce que disent nos voyageurs",
      subtitle: "Avis réels et vérifiés de voyageurs ayant participé à nos tours.",
      moreReviews: "Voir plus d’avis",
      noReviews: "Aucun avis disponible dans cette langue."
    },
    pt: {
      title: "O que dizem nossos viajantes",
      subtitle: "Avaliações reais e verificadas de quem viveu nossos tours.",
      moreReviews: "Ver mais avaliações",
      noReviews: "Ainda não há avaliações neste idioma."
    }
  };
  const t = textsByLang[lang] || textsByLang.es;
  const params = new URLSearchParams();
  params.set("idioma", lang);
  const url = `${STRAPI_API}/public/reviews?${params.toString()}`;
  let reviews = [];
  try {
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      reviews = json?.data ?? [];
    } else {
      console.error("❌ Error HTTP reviews home:", res.status);
    }
  } catch (e) {
    console.error("❌ Error loading home reviews", e);
  }
  const reviewsByTour = {};
  for (const r of reviews) {
    const slug = r.tour_slug;
    if (!slug) continue;
    if (!reviewsByTour[slug]) {
      reviewsByTour[slug] = [];
    }
    if (reviewsByTour[slug].length < 2) {
      reviewsByTour[slug].push(r);
    }
  }
  const tourEntries = Object.entries(reviewsByTour).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section id="reviews" class="bg-[#0A0A0A] py-20" data-astro-cid-lgm6qr3x> <div class="max-w-7xl mx-auto px-4" data-astro-cid-lgm6qr3x> <!-- Header --> <div class="text-center max-w-3xl mx-auto mb-14" data-astro-cid-lgm6qr3x> <h2 class="text-3xl md:text-4xl font-semibold text-white mb-4" data-astro-cid-lgm6qr3x> ${t.title} </h2> <p class="text-[#6B7280] text-lg" data-astro-cid-lgm6qr3x> ${t.subtitle} </p> </div> <!-- Reviews por tour --> ${tourEntries.length > 0 ? renderTemplate`<div class="space-y-14" data-astro-cid-lgm6qr3x> ${tourEntries.map(([slug, items]) => renderTemplate`<div data-astro-cid-lgm6qr3x> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-lgm6qr3x> ${items.map((r) => renderTemplate`<article class="bg-[#111111] rounded-2xl p-6 shadow-md" data-astro-cid-lgm6qr3x> <div class="flex items-center justify-between mb-3" data-astro-cid-lgm6qr3x> <span class="text-white font-medium" data-astro-cid-lgm6qr3x> ${r.cliente_nombre} </span> <span class="text-[#FACC15] text-sm" data-astro-cid-lgm6qr3x> ${"★".repeat(r.rating_general)} </span> </div> <p class="text-[#6B7280] text-sm leading-relaxed line-clamp-4" data-astro-cid-lgm6qr3x> ${r.comentario_publico || "El viajero dejó una valoración sin comentario."} </p> <div class="mt-4 text-xs text-[#6B7280] flex justify-between" data-astro-cid-lgm6qr3x> <span data-astro-cid-lgm6qr3x>${r.cliente_pais || ""}</span> <span data-astro-cid-lgm6qr3x>${new Date(r.fecha_tour).toLocaleDateString()}</span> </div> </article>`)} </div> </div>`)} </div>` : renderTemplate`<p class="text-center text-[#6B7280]" data-astro-cid-lgm6qr3x> ${t.noReviews} </p>`} <!-- CTA --> <div class="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-lgm6qr3x> <button id="loadMoreReviews" type="button" class="bg-[#FACC15] text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition"${addAttribute(t.moreReviews, "aria-label")} data-astro-cid-lgm6qr3x> ${t.moreReviews} </button> </div> </div> </section> `;
}, "/home/edu/belgotours-desarrollo/src/components/ReviewsSection.astro", void 0);

const $$Astro$1 = createAstro("https://belgotours.com");
const $$GuidesSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuidesSection;
  const { lang } = Astro2.props;
  const STRAPI_API = "http://168.119.183.247:1337/api";
  const texts = {
    es: {
      title: "Nuestros guías locales",
      subtitle: "Personas reales, guías certificados y apasionados por Bruselas.",
      role: "Guía local de BelgoTours"
    },
    en: {
      title: "Our local guides",
      subtitle: "Real people, certified guides passionate about Brussels.",
      role: "Local guide at BelgoTours"
    },
    it: {
      title: "Le nostre guide locali",
      subtitle: "Persone vere, guide certificate appassionate di Bruxelles.",
      role: "Guida locale di BelgoTours"
    },
    fr: {
      title: "Nos guides locaux",
      subtitle: "De vraies personnes, guides certifiés passionnés par Bruxelles.",
      role: "Guide local BelgoTours"
    },
    pt: {
      title: "Nossos guias locais",
      subtitle: "Pessoas reais, guias certificados apaixonados por Bruxelas.",
      role: "Guia local da BelgoTours"
    }
  };
  const t = texts[lang] || texts.es;
  let guias = [];
  try {
    const res = await fetch(
      `${STRAPI_API}/guias?filters[activo][$eq]=true&populate=foto`
    );
    if (res.ok) {
      const json = await res.json();
      guias = json?.data ?? [];
    }
  } catch (e) {
    console.error("Error loading guides", e);
  }
  return renderTemplate`${maybeRenderHead()}<section id="guides" class="bg-black py-20"> <div class="max-w-7xl mx-auto px-4"> <!-- Header --> <div class="text-center max-w-3xl mx-auto mb-14"> <h2 class="text-3xl md:text-4xl font-semibold text-white mb-4"> ${t.title} </h2> <p class="text-[#6B7280] text-lg"> ${t.subtitle} </p> </div> <!-- Grid guías --> ${guias.length > 0 ? renderTemplate`<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"> ${guias.map((g) => {
    const a = g.attributes || {};
    const foto = a.foto?.data?.attributes?.url;
    return renderTemplate`<article class="flex flex-col items-center text-center"> ${foto && renderTemplate`<img${addAttribute(foto, "src")}${addAttribute(a.nombre, "alt")} class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-[#FACC15]">`} <h3 class="text-white font-semibold text-lg"> ${a.nombre} </h3> <p class="text-sm text-[#FACC15] mt-1"> ${t.role} </p> ${Array.isArray(a.idiomas) && renderTemplate`<div class="flex flex-wrap justify-center gap-2 mt-3 text-xs text-[#6B7280]"> ${a.idiomas.map((i) => renderTemplate`<span class="border border-[#1F2937] px-2 py-1 rounded"> ${i.toUpperCase()} </span>`)} </div>`} </article>`;
  })} </div>` : renderTemplate`<p class="text-center text-[#6B7280]">
No hay guías disponibles en este momento.
</p>`} </div> </section>`;
}, "/home/edu/belgotours-desarrollo/src/components/GuidesSection.astro", void 0);

const TOURS = [
  // ✅ FREE TOUR BRUSELAS
  {
    name: "Free Tour Bruselas en Español",
    duration: "2 h 15 min",
    price: "Pago libre",
    tourLang: "es",
    url: "/es/tours/free-tour-bruselas"
  },
  {
    name: "Free Tour Brussels in English",
    duration: "2 h 15 min",
    price: "Tip-based",
    tourLang: "en",
    url: "/en/tours/free-tour-brussels"
  },
  {
    name: "Free Tour Bruxelles in Italiano",
    duration: "2 h 15 min",
    price: "Prezzo libero",
    tourLang: "it",
    url: "/it/tours/free-tour-bruxelles"
  },
  // ✅ FREE TOUR BRUJAS (solo ES)
  {
    name: "Free Tour Brujas en Español",
    duration: "2 h 15 min",
    price: "Pago libre",
    tourLang: "es",
    url: "/es/tours/free-tour-brujas"
  },
  // ✅ TOUR ESPECIAL CHOCOLATE (solo ES)
  {
    name: "Tour de Chocolate y Cerveza en Bruselas",
    duration: "2 h 30 min",
    price: "39€ por persona",
    tourLang: "es",
    url: "/es/tours/tour-chocolate-cerveza-bruselas"
  },
  // ✅ PRIVADO BRUSELAS (ES / EN / IT / FR)
  {
    name: "Tour Privado Bruselas en Español",
    duration: "2 h 15 min",
    price: "120€ por grupo",
    tourLang: "es",
    url: "/es/tours/tour-privado-bruselas"
  },
  {
    name: "Private Tour Brussels in English",
    duration: "2 h 15 min",
    price: "120€ per group",
    tourLang: "en",
    url: "/en/tours/private-tour-brussels"
  },
  {
    name: "Tour Privato Bruxelles in Italiano",
    duration: "2 h 15 min",
    price: "120€ per gruppo",
    tourLang: "it",
    url: "/it/tours/tour-privato-bruxelles"
  },
  {
    name: "Tour Privé Bruxelles (Français)",
    duration: "2 h 15 min",
    price: "120€ par groupe",
    tourLang: "fr",
    url: "fr/tours/tour-prive-bruxelles"
  },
  // ✅ PRIVADO BRUJAS (solo ES)
  {
    name: "Tour Privado Brujas en Español",
    duration: "2 h 15 min",
    price: "120€ por grupo",
    tourLang: "es",
    url: "/es/tours/tour-privado-brujas"
  }
];
const SEARCHBOX_TOURS = TOURS;

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const seoTitle = "Belgotours | Free Tours y Tours Privados en B\xE9lgica";
  const seoDescription = "Reserva free tours y tours privados en Bruselas y B\xE9lgica con gu\xEDas locales expertos.";
  const canonical = `https://belgotours.com/${lang}/`;
  const heroTitle = "Descubre B\xE9lgica con gu\xEDas locales";
  const heroSubtitle = "Free Tours y Tours Privados en Bruselas y Brujas";
  const heroDescription = "Experiencias aut\xE9nticas, grupos peque\xF1os y cancelaci\xF3n gratuita.";
  const heroHighlighted = "Espa\xF1ol, Ingl\xE9s, Franc\xE9s e Italiano";
  const heroBadge = "\u2B50 4.9 / 5";
  const searchTitle = "Encuentra tu tour ideal";
  const searchSubtitle = "Reserva en 2 minutos \xB7 Cancelaci\xF3n gratuita";
  const searchCta = "Ver tour";
  const tours = SEARCHBOX_TOURS;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "canonical": canonical }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang })} ${renderComponent($$result2, "HeroWrapper", $$HeroWrapper, { "lang": lang, "heroTitle": heroTitle, "heroSubtitle": heroSubtitle, "heroDescription": heroDescription, "heroHighlighted": heroHighlighted, "heroImageUrl": "/images/HeroRight/free-walking-tour-brussels-historic-center.webp", "heroBadge": heroBadge, "searchTitle": searchTitle, "searchSubtitle": searchSubtitle, "searchCta": searchCta, "tours": tours })}  ${renderComponent($$result2, "ToursDestacados", $$ToursDestacados, { "lang": lang })} ${renderComponent($$result2, "ReviewsSection", $$ReviewsSection, { "lang": lang })} ${renderComponent($$result2, "GuidesSection", $$GuidesSection, { "lang": lang })} ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/index.astro", void 0);

const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
