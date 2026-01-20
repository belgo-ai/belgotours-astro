import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, l as renderHead, o as renderSlot, i as renderComponent } from './astro/server_C3p6TkWJ.mjs';
import 'piccolore';
/* empty css                                             */
import 'clsx';

const $$Astro$1 = createAstro("https://belgotours.com");
const $$WhatsAppFloat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhatsAppFloat;
  const { lang = "es" } = Astro2.props;
  const PHONE = "32489829468";
  const messages = {
    es: "Hola%20BelgoTours%20\u{1F44B}%20Tengo%20una%20consulta%20sobre%20los%20tours.",
    en: "Hello%20BelgoTours%20\u{1F44B}%20I%20have%20a%20question%20about%20your%20tours.",
    it: "Ciao%20BelgoTours%20\u{1F44B}%20Ho%20una%20domanda%20sui%20tour.",
    fr: "Bonjour%20BelgoTours%20\u{1F44B}%20J\u2019ai%20une%20question%20sur%20vos%20tours.",
    pt: "Ol\xE1%20BelgoTours%20\u{1F44B}%20Tenho%20uma%20pergunta%20sobre%20os%20tours."
  };
  const text = messages[lang] || messages.es;
  const href = `https://wa.me/${PHONE}?text=${text}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp BelgoTours" data-astro-cid-y4hhiakm> <!-- Icono WhatsApp (SVG inline, ultra ligero) --> <svg viewBox="0 0 32 32" aria-hidden="true" data-astro-cid-y4hhiakm> <path fill="currentColor" d="M19.11 17.38c-.27-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.92 4.63 4.1.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z" data-astro-cid-y4hhiakm></path> <path fill="currentColor" d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.65.87 5.09 2.35 7.05L5 29l7.15-1.87A11.93 11.93 0 0 0 16.02 27c6.62 0 12.02-5.4 12.02-11.98C28.04 8.4 22.64 3 16.02 3zm0 21.82c-2.23 0-4.28-.65-6.02-1.77l-.43-.27-4.24 1.11 1.13-4.13-.28-.44a9.82 9.82 0 0 1-1.56-5.3c0-5.44 4.43-9.87 9.88-9.87s9.88 4.43 9.88 9.87-4.43 9.87-9.88 9.87z" data-astro-cid-y4hhiakm></path> </svg> </a> `;
}, "/home/edu/belgotours-desarrollo/src/components/WhatsAppFloat.astro", void 0);

const $$Astro = createAstro("https://belgotours.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, canonical } = Astro2.props;
  const currentUrl = Astro2.url.pathname;
  const currentLang = currentUrl.split("/")[1] || "es";
  const isTourPage = currentUrl.includes("/tours/");
  const languages = ["es", "en", "it", "fr", "pt"];
  return renderTemplate`<html${addAttribute(currentLang, "lang")} data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- FAVICONS --><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><title>${title}</title>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}${languages.map((lang) => renderTemplate`<link rel="alternate"${addAttribute(lang, "hreflang")}${addAttribute(`https://belgotours.com/${lang}${currentUrl.replace(/^\/[a-z]{2}/, "")}`, "href")}>`)}<link rel="alternate" hreflang="x-default" href="https://belgotours.com/en/"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`https://belgotours.com${currentUrl}`, "content")}><meta property="og:image" content="https://belgotours.com/og-image.jpg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Tipografía global (Inter) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <!-- HEADER --> ${renderSlot($$result, $$slots["header"])} <!-- MAIN CONTENT --> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <!-- WHATSAPP FLOTANTE GLOBAL
         ❌ NO aparece en /tours/*
         ✅ Sí aparece en home, blog, info, etc. --> ${!isTourPage && renderTemplate`${renderComponent($$result, "WhatsAppFloat", $$WhatsAppFloat, { "lang": currentLang, "data-astro-cid-sckkx6r4": true })}`} </body></html>`;
}, "/home/edu/belgotours-desarrollo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
