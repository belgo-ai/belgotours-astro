/* empty css                                                        */
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Du494iuS.mjs';
import { $ as $$TourHeader } from '../../chunks/TourHeader_0yEfAs_k.mjs';
import { $ as $$Footer } from '../../chunks/Footer_DIYA9f-P.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$Cookies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cookies;
  const { lang } = Astro2.params;
  const t = {
    es: {
      title: "Pol\xEDtica de Cookies | BelgoTours",
      h1: "Pol\xEDtica de Cookies",
      intro: "Este sitio web utiliza cookies y tecnolog\xEDas similares para garantizar su correcto funcionamiento, mejorar la experiencia del usuario y analizar el tr\xE1fico.",
      what: "\xBFQu\xE9 son las cookies?",
      whatText: "Las cookies son peque\xF1os archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten reconocer tu navegador y recordar determinadas preferencias.",
      types: "Tipos de cookies utilizadas",
      list: [
        "Cookies t\xE9cnicas: necesarias para el funcionamiento del sitio.",
        "Cookies de an\xE1lisis: estad\xEDsticas de uso an\xF3nimas.",
        "Cookies de preferencias: idioma o configuraci\xF3n regional."
      ],
      manage: "Gesti\xF3n de cookies",
      manageText: "Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que desactivar cookies puede afectar al funcionamiento del sitio.",
      updates: "Actualizaciones",
      updatesText: "Esta pol\xEDtica puede actualizarse para reflejar cambios legales o t\xE9cnicos."
    },
    en: {
      title: "Cookies Policy | BelgoTours",
      h1: "Cookies Policy",
      intro: "This website uses cookies and similar technologies to ensure proper functioning, improve user experience, and analyze traffic.",
      what: "What are cookies?",
      whatText: "Cookies are small text files stored on your device when you visit a website. They help recognize your browser and remember certain preferences.",
      types: "Types of cookies used",
      list: [
        "Technical cookies: necessary for site operation.",
        "Analytics cookies: anonymous usage statistics.",
        "Preference cookies: language or region settings."
      ],
      manage: "Managing cookies",
      manageText: "You can configure your browser to block or delete cookies. Please note that disabling cookies may affect site functionality.",
      updates: "Updates",
      updatesText: "This policy may be updated to reflect legal or technical changes."
    },
    it: {
      title: "Politica sui Cookie | BelgoTours",
      h1: "Politica sui Cookie",
      intro: "Questo sito utilizza cookie e tecnologie simili per garantirne il corretto funzionamento, migliorare l\u2019esperienza dell\u2019utente e analizzare il traffico.",
      what: "Cosa sono i cookie?",
      whatText: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Aiutano a riconoscere il browser e a ricordare alcune preferenze.",
      types: "Tipologie di cookie utilizzate",
      list: [
        "Cookie tecnici: necessari per il funzionamento del sito.",
        "Cookie analitici: statistiche di utilizzo anonime.",
        "Cookie di preferenza: lingua o impostazioni regionali."
      ],
      manage: "Gestione dei cookie",
      manageText: "Puoi configurare il tuo browser per bloccare o eliminare i cookie. La disattivazione dei cookie potrebbe influire sul funzionamento del sito.",
      updates: "Aggiornamenti",
      updatesText: "Questa informativa pu\xF2 essere aggiornata per riflettere modifiche legali o tecniche."
    },
    fr: {
      title: "Politique des Cookies | BelgoTours",
      h1: "Politique des Cookies",
      intro: "Ce site utilise des cookies et des technologies similaires pour assurer son bon fonctionnement, am\xE9liorer l\u2019exp\xE9rience utilisateur et analyser le trafic.",
      what: "Qu\u2019est-ce qu\u2019un cookie ?",
      whatText: "Les cookies sont de petits fichiers texte stock\xE9s sur votre appareil lorsque vous visitez un site web. Ils permettent de reconna\xEEtre votre navigateur et de m\xE9moriser certaines pr\xE9f\xE9rences.",
      types: "Types de cookies utilis\xE9s",
      list: [
        "Cookies techniques : n\xE9cessaires au fonctionnement du site.",
        "Cookies analytiques : statistiques d\u2019utilisation anonymes.",
        "Cookies de pr\xE9f\xE9rence : langue ou param\xE8tres r\xE9gionaux."
      ],
      manage: "Gestion des cookies",
      manageText: "Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. La d\xE9sactivation des cookies peut affecter le fonctionnement du site.",
      updates: "Mises \xE0 jour",
      updatesText: "Cette politique peut \xEAtre mise \xE0 jour pour refl\xE9ter des changements l\xE9gaux ou techniques."
    }
  };
  const copy = t[lang] || t.en;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": copy.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourHeader", $$TourHeader, { "simple": true })} ${maybeRenderHead()}<main class="bg-white"> <section class="max-w-3xl mx-auto px-6 py-16 prose prose-gray"> <h1>${copy.h1}</h1> <p>${copy.intro}</p> <h2>${copy.what}</h2> <p>${copy.whatText}</p> <h2>${copy.types}</h2> <ul> ${copy.list.map((item) => renderTemplate`<li>${item}</li>`)} </ul> <h2>${copy.manage}</h2> <p>${copy.manageText}</p> <h2>${copy.updates}</h2> <p>${copy.updatesText}</p> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/cookies.astro", void 0);

const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/cookies.astro";
const $$url = "/[lang]/cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cookies,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
