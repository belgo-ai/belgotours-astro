/* empty css                                                        */
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, k as Fragment, u as unescapeHTML } from '../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Du494iuS.mjs';
import { $ as $$TourHeader } from '../../chunks/TourHeader_0yEfAs_k.mjs';
import { $ as $$Footer } from '../../chunks/Footer_DIYA9f-P.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const { lang } = Astro2.params;
  const t = {
    es: {
      title: "Pol\xEDtica de Privacidad | BelgoTours",
      h1: "Pol\xEDtica de Privacidad",
      sections: [
        {
          h2: "1. Responsable del tratamiento",
          content: `
          BelgoTours, con sede en Bruselas, es responsable del tratamiento de los
          datos personales facilitados por los usuarios a trav\xE9s del sitio web
          belgotours.com.
        `
        },
        {
          h2: "2. Finalidad del tratamiento",
          list: [
            "Gesti\xF3n de reservas de free tours y visitas privadas.",
            "Env\xEDo de confirmaciones y comunicaciones operativas.",
            "Mejora de la experiencia del usuario."
          ]
        },
        {
          h2: "3. Base legal",
          content: `
          La base legal del tratamiento es el consentimiento del usuario conforme
          al Reglamento General de Protecci\xF3n de Datos (RGPD, art. 6.1).
        `
        },
        {
          h2: "4. Derechos del usuario",
          content: `
          El usuario puede ejercer sus derechos de acceso, rectificaci\xF3n,
          cancelaci\xF3n u oposici\xF3n escribiendo a
          <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>.
        `
        }
      ]
    },
    en: {
      title: "Privacy Policy | BelgoTours",
      h1: "Privacy Policy",
      sections: [
        {
          h2: "1. Data Controller",
          content: `
          BelgoTours, based in Brussels, is responsible for processing personal
          data provided by users through the belgotours.com website.
        `
        },
        {
          h2: "2. Purpose of processing",
          list: [
            "Management of free tour and private tour bookings.",
            "Sending confirmations and operational communications.",
            "Improving the user experience."
          ]
        },
        {
          h2: "3. Legal basis",
          content: `
          The legal basis for processing is the user\u2019s consent in accordance with
          the GDPR (art. 6.1).
        `
        },
        {
          h2: "4. User rights",
          content: `
          Users may exercise their rights by contacting
          <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>.
        `
        }
      ]
    },
    it: {
      title: "Informativa sulla Privacy | BelgoTours",
      h1: "Informativa sulla Privacy",
      sections: [
        {
          h2: "1. Titolare del trattamento",
          content: `
          BelgoTours, con sede a Bruxelles, \xE8 responsabile del trattamento dei
          dati personali forniti dagli utenti tramite il sito belgotours.com.
        `
        },
        {
          h2: "2. Finalit\xE0 del trattamento",
          list: [
            "Gestione delle prenotazioni di free tour e tour privati.",
            "Invio di conferme e comunicazioni operative.",
            "Miglioramento dell\u2019esperienza utente."
          ]
        },
        {
          h2: "3. Base giuridica",
          content: `
          La base giuridica del trattamento \xE8 il consenso dell\u2019utente ai sensi
          del GDPR (art. 6.1).
        `
        },
        {
          h2: "4. Diritti dell\u2019utente",
          content: `
          L\u2019utente pu\xF2 esercitare i propri diritti scrivendo a
          <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>.
        `
        }
      ]
    },
    fr: {
      title: "Politique de Confidentialit\xE9 | BelgoTours",
      h1: "Politique de Confidentialit\xE9",
      sections: [
        {
          h2: "1. Responsable du traitement",
          content: `
          BelgoTours, bas\xE9 \xE0 Bruxelles, est responsable du traitement des donn\xE9es
          personnelles fournies par les utilisateurs via le site belgotours.com.
        `
        },
        {
          h2: "2. Finalit\xE9 du traitement",
          list: [
            "Gestion des r\xE9servations de free tours et de visites priv\xE9es.",
            "Envoi de confirmations et de communications op\xE9rationnelles.",
            "Am\xE9lioration de l\u2019exp\xE9rience utilisateur."
          ]
        },
        {
          h2: "3. Base l\xE9gale",
          content: `
          La base l\xE9gale du traitement est le consentement de l\u2019utilisateur
          conform\xE9ment au RGPD (art. 6.1).
        `
        },
        {
          h2: "4. Droits de l\u2019utilisateur",
          content: `
          L\u2019utilisateur peut exercer ses droits en \xE9crivant \xE0
          <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>.
        `
        }
      ]
    },
    pt: {
      title: "Pol\xEDtica de Privacidade | BelgoTours",
      h1: "Pol\xEDtica de Privacidade",
      sections: [
        {
          h2: "1. Respons\xE1vel pelo tratamento",
          content: `
          A BelgoTours, com sede em Bruxelas, \xE9 respons\xE1vel pelo tratamento dos
          dados pessoais fornecidos pelos utilizadores atrav\xE9s do site
          belgotours.com.
        `
        },
        {
          h2: "2. Finalidade do tratamento",
          list: [
            "Gest\xE3o de reservas de free tours e tours privados.",
            "Envio de confirma\xE7\xF5es e comunica\xE7\xF5es operacionais.",
            "Melhoria da experi\xEAncia do utilizador."
          ]
        },
        {
          h2: "3. Base legal",
          content: `
          A base legal para o tratamento \xE9 o consentimento do utilizador de acordo
          com o RGPD (art. 6.1).
        `
        },
        {
          h2: "4. Direitos do utilizador",
          content: `
          O utilizador pode exercer os seus direitos escrevendo para
          <a href="mailto:contact@belgotours.com">contact@belgotours.com</a>.
        `
        }
      ]
    }
  };
  const copy = t[lang] || t.en;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": copy.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourHeader", $$TourHeader, { "simple": true })} ${maybeRenderHead()}<main class="bg-white"> <section class="max-w-3xl mx-auto px-6 py-16 prose prose-gray"> <h1>${copy.h1}</h1> ${copy.sections.map((section) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2>${section.h2}</h2> ${section.content && renderTemplate`<p>${unescapeHTML(section.content)}</p>`}${section.list && renderTemplate`<ul> ${section.list.map((item) => renderTemplate`<li>${item}</li>`)} </ul>`}` })}`)} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/privacy.astro", void 0);

const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/privacy.astro";
const $$url = "/[lang]/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
