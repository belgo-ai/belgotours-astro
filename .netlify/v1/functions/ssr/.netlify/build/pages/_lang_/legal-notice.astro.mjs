/* empty css                                                        */
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Du494iuS.mjs';
import { $ as $$TourHeader } from '../../chunks/TourHeader_0yEfAs_k.mjs';
import { $ as $$Footer } from '../../chunks/Footer_DIYA9f-P.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$LegalNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LegalNotice;
  const { lang } = Astro2.params;
  const t = {
    es: {
      title: "Aviso Legal | BelgoTours",
      h1: "Aviso Legal",
      sections: {
        company: "Informaci\xF3n de la empresa",
        usage: "Uso del sitio web",
        liability: "Responsabilidad",
        law: "Jurisdicci\xF3n"
      },
      content: {
        company: `
        BelgoTours<br />
        Bruselas, B\xE9lgica<br />
        Email: <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>
      `,
        usage: "El acceso a este sitio web implica la aceptaci\xF3n de los t\xE9rminos legales aqu\xED descritos. Queda prohibido cualquier uso no autorizado del contenido.",
        liability: "BelgoTours no se hace responsable de los enlaces externos ni de los contenidos de terceros accesibles a trav\xE9s de este sitio web.",
        law: "El presente aviso legal se rige por la legislaci\xF3n belga. Cualquier controversia ser\xE1 competencia exclusiva de los tribunales de Bruselas."
      }
    },
    en: {
      title: "Legal Notice | BelgoTours",
      h1: "Legal Notice",
      sections: {
        company: "Company information",
        usage: "Website usage",
        liability: "Liability",
        law: "Jurisdiction"
      },
      content: {
        company: `
        BelgoTours<br />
        Brussels, Belgium<br />
        Email: <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>
      `,
        usage: "Access to this website implies acceptance of its legal terms and conditions. Unauthorized use of the content is prohibited.",
        liability: "BelgoTours is not responsible for external links or third-party content accessible through this website.",
        law: "This legal notice is governed by Belgian law. Courts of Brussels shall have exclusive jurisdiction."
      }
    },
    it: {
      title: "Note Legali | BelgoTours",
      h1: "Note Legali",
      sections: {
        company: "Informazioni sull\u2019azienda",
        usage: "Uso del sito web",
        liability: "Responsabilit\xE0",
        law: "Giurisdizione"
      },
      content: {
        company: `
        BelgoTours<br />
        Bruxelles, Belgio<br />
        Email: <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>
      `,
        usage: "L\u2019accesso a questo sito web implica l\u2019accettazione delle presenti note legali. \xC8 vietato qualsiasi uso non autorizzato dei contenuti.",
        liability: "BelgoTours non \xE8 responsabile per i link esterni o per i contenuti di terzi accessibili tramite questo sito.",
        law: "Le presenti note legali sono regolate dalla legge belga. Qualsiasi controversia sar\xE0 di competenza esclusiva dei tribunali di Bruxelles."
      }
    },
    fr: {
      title: "Mentions L\xE9gales | BelgoTours",
      h1: "Mentions L\xE9gales",
      sections: {
        company: "Informations sur l\u2019entreprise",
        usage: "Utilisation du site web",
        liability: "Responsabilit\xE9",
        law: "Juridiction"
      },
      content: {
        company: `
        BelgoTours<br />
        Bruxelles, Belgique<br />
        Email : <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>
      `,
        usage: "L\u2019acc\xE8s \xE0 ce site web implique l\u2019acceptation des pr\xE9sentes mentions l\xE9gales. Toute utilisation non autoris\xE9e du contenu est interdite.",
        liability: "BelgoTours ne saurait \xEAtre tenu responsable des liens externes ou des contenus de tiers accessibles via ce site.",
        law: "Les pr\xE9sentes mentions l\xE9gales sont r\xE9gies par le droit belge. Les tribunaux de Bruxelles sont seuls comp\xE9tents."
      }
    }
  };
  const copy = t[lang] || t.en;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": copy.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourHeader", $$TourHeader, { "simple": true })} ${maybeRenderHead()}<main class="bg-white"> <section class="max-w-3xl mx-auto px-6 py-16 prose prose-gray"> <h1>${copy.h1}</h1> <h2>${copy.sections.company}</h2> <p>${unescapeHTML(copy.content.company)}</p> <h2>${copy.sections.usage}</h2> <p>${copy.content.usage}</p> <h2>${copy.sections.liability}</h2> <p>${copy.content.liability}</p> <h2>${copy.sections.law}</h2> <p>${copy.content.law}</p> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/legal-notice.astro", void 0);

const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/legal-notice.astro";
const $$url = "/[lang]/legal-notice";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LegalNotice,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
