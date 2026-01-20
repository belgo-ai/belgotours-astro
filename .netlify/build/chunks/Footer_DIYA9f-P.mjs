import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://belgotours.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "en" } = Astro2.props;
  const texts = {
    es: {
      brandLine: "Creamos experiencias locales en B\xE9lgica para viajeros que buscan algo aut\xE9ntico.",
      sections: {
        brand: "BelgoTours",
        help: "Ayuda",
        follow: "S\xEDguenos"
      },
      links: {
        brand: [
          { name: "Sobre BelgoTours", href: "/es/sobre-belgotours" },
          { name: "Blog", href: "/es/blog" }
        ],
        help: [
          { name: "Contacto (WhatsApp)", href: "https://wa.me/32400000000" },
          { name: "Preguntas frecuentes", href: "/es/faq" },
          { name: "Cancelaci\xF3n", href: "/es/cancelacion" }
        ]
      },
      legal: {
        privacy: "Privacidad",
        cookies: "Cookies",
        terms: "T\xE9rminos",
        legal: "Aviso legal"
      },
      rights: "Todos los derechos reservados."
    },
    en: {
      brandLine: "We design local experiences in Belgium for travelers seeking something authentic.",
      sections: {
        brand: "BelgoTours",
        help: "Help",
        follow: "Follow us"
      },
      links: {
        brand: [
          { name: "About BelgoTours", href: "/en/about-belgotours" },
          { name: "Blog", href: "/en/blog" }
        ],
        help: [
          { name: "Contact (WhatsApp)", href: "https://wa.me/32400000000" },
          { name: "FAQs", href: "/en/faq" },
          { name: "Cancellation", href: "/en/cancellation" }
        ]
      },
      legal: {
        privacy: "Privacy",
        cookies: "Cookies",
        terms: "Terms",
        legal: "Legal notice"
      },
      rights: "All rights reserved."
    },
    fr: {
      brandLine: "Nous cr\xE9ons des exp\xE9riences locales en Belgique pour les voyageurs en qu\xEAte d\u2019authenticit\xE9.",
      sections: {
        brand: "BelgoTours",
        help: "Aide",
        follow: "Suivez-nous"
      },
      links: {
        brand: [
          { name: "\xC0 propos de BelgoTours", href: "/fr/a-propos-belgotours" },
          { name: "Blog", href: "/fr/blog" }
        ],
        help: [
          { name: "Contact (WhatsApp)", href: "https://wa.me/32400000000" },
          { name: "FAQ", href: "/fr/faq" },
          { name: "Annulation", href: "/fr/annulation" }
        ]
      },
      legal: {
        privacy: "Confidentialit\xE9",
        cookies: "Cookies",
        terms: "Conditions",
        legal: "Mentions l\xE9gales"
      },
      rights: "Tous droits r\xE9serv\xE9s."
    },
    it: {
      brandLine: "Creiamo esperienze locali in Belgio per viaggiatori in cerca di autenticit\xE0.",
      sections: {
        brand: "BelgoTours",
        help: "Assistenza",
        follow: "Seguici"
      },
      links: {
        brand: [
          { name: "Chi siamo", href: "/it/chi-siamo-belgotours" },
          { name: "Blog", href: "/it/blog" }
        ],
        help: [
          { name: "Contatto (WhatsApp)", href: "https://wa.me/32400000000" },
          { name: "FAQ", href: "/it/faq" },
          { name: "Cancellazione", href: "/it/cancellazione" }
        ]
      },
      legal: {
        privacy: "Privacy",
        cookies: "Cookie",
        terms: "Termini",
        legal: "Note legali"
      },
      rights: "Tutti i diritti riservati."
    },
    pt: {
      brandLine: "Criamos experi\xEAncias locais na B\xE9lgica para viajantes que buscam algo aut\xEAntico.",
      sections: {
        brand: "BelgoTours",
        help: "Ajuda",
        follow: "Siga-nos"
      },
      links: {
        brand: [
          { name: "Sobre a BelgoTours", href: "/pt/sobre-belgotours" },
          { name: "Blog", href: "/pt/blog" }
        ],
        help: [
          { name: "Contato (WhatsApp)", href: "https://wa.me/32400000000" },
          { name: "Perguntas frequentes", href: "/pt/faq" },
          { name: "Cancelamento", href: "/pt/cancelamento" }
        ]
      },
      legal: {
        privacy: "Privacidade",
        cookies: "Cookies",
        terms: "Termos",
        legal: "Aviso legal"
      },
      rights: "Todos os direitos reservados."
    }
  };
  const t = texts[lang] || texts.en;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const social = [
    { name: "YouTube", href: "https://www.youtube.com/@belgotours312" },
    { name: "Instagram", href: "https://www.instagram.com/belgotours/" },
    { name: "Facebook", href: "https://www.facebook.com/belgotours" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#0A0A0A] text-white"> <div class="max-w-6xl mx-auto px-4 py-14 border-t border-white/10"> <div class="grid gap-10 md:grid-cols-3"> <!-- Brand --> <div class="space-y-4"> <div class="flex items-center gap-3"> <img src="/Logo-belgotours.webp" alt="BelgoTours" class="h-10 w-auto object-contain rounded-none" loading="lazy"> <span class="text-lg font-semibold">BelgoTours</span> </div> <p class="text-sm text-white/60 max-w-sm"> ${t.brandLine} </p> <div> <div class="text-sm font-semibold mb-2">${t.sections.follow}</div> <div class="flex gap-3"> <a${addAttribute(social[0].href, "href")} target="_blank" rel="noopener" aria-label="YouTube" class="social-icon"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.64.49A2.75 2.75 0 0 0 2.42 7.2 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .42 4.8 2.75 2.75 0 0 0 1.94 1.95c1.74.5 7.64.5 7.64.5s5.9 0 7.64-.5a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z"></path></svg> </a> <a${addAttribute(social[1].href, "href")} target="_blank" rel="noopener" aria-label="Instagram" class="social-icon"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM18.2 6.6a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z"></path></svg> </a> <a${addAttribute(social[2].href, "href")} target="_blank" rel="noopener" aria-label="Facebook" class="social-icon"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.5V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v8h3.5Z"></path></svg> </a> </div> </div> </div> <div> <div class="text-sm font-semibold mb-3">${t.sections.brand}</div> <ul class="space-y-2"> ${t.links.brand.map((l) => renderTemplate`<li><a${addAttribute(l.href, "href")} class="text-sm text-white/60 hover:text-white transition">${l.name}</a></li>`)} </ul> </div> <div> <div class="text-sm font-semibold mb-3">${t.sections.help}</div> <ul class="space-y-2"> ${t.links.help.map((l) => renderTemplate`<li><a${addAttribute(l.href, "href")} class="text-sm text-white/60 hover:text-white transition">${l.name}</a></li>`)} </ul> </div> </div> <div class="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 md:justify-between text-sm text-white/50"> <div>© ${year} BelgoTours. ${t.rights}</div> <div class="flex gap-4 flex-wrap"> <a${addAttribute(`/${lang}/privacy`, "href")} class="hover:text-white">${t.legal.privacy}</a> <a${addAttribute(`/${lang}/cookies`, "href")} class="hover:text-white">${t.legal.cookies}</a> <a${addAttribute(`/${lang}/terms`, "href")} class="hover:text-white">${t.legal.terms}</a> <a${addAttribute(`/${lang}/legal-notice`, "href")} class="hover:text-white">${t.legal.legal}</a> </div> </div> </div> </footer>`;
}, "/home/edu/belgotours-desarrollo/src/components/Footer.astro", void 0);

export { $$Footer as $ };
