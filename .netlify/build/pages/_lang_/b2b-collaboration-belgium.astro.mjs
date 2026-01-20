/* empty css                                                        */
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Du494iuS.mjs';
import { $ as $$TourHeader } from '../../chunks/TourHeader_0yEfAs_k.mjs';
import { $ as $$Footer } from '../../chunks/Footer_DIYA9f-P.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$B2BCollaborationBelgium = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$B2BCollaborationBelgium;
  const { lang } = Astro2.params;
  const t = {
    en: {
      title: "B2B Tour Operator in Belgium | BelgoTours",
      description: "Local tour operator in Belgium offering guided experiences for travel agencies, tour operators and companies.",
      h1a: "B2B Tour Operator in Belgium",
      h1b: "Local Guided Experiences",
      h2hero: "Guided tours for travel agencies, tour operators and companies",
      bullets: [
        "Local operator based in Belgium",
        "Own professional guides",
        "Flexible B2B collaboration"
      ],
      who: "Who we work with",
      whoList: [
        "Travel agencies",
        "Tour operators & DMCs",
        "Platforms",
        "Companies & institutions"
      ],
      form: "Request B2B information",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        type: "Type of collaboration"
      },
      types: {
        travel_agency: "Travel agency",
        tour_operator_dmc: "Tour operator / DMC",
        platform: "Platform",
        corporate_mice: "Corporate / MICE",
        other: "Other"
      },
      send: "Send request",
      success: "Thank you. We\u2019ll get back to you shortly.",
      micro: "No prices \xB7 No obligation \xB7 B2B contact only"
    },
    es: {
      title: "Operador tur\xEDstico B2B en B\xE9lgica | BelgoTours",
      description: "Operador tur\xEDstico local en B\xE9lgica con experiencias guiadas para agencias de viajes, operadores tur\xEDsticos y empresas.",
      h1a: "Operador tur\xEDstico B2B en B\xE9lgica",
      h1b: "Experiencias guiadas locales",
      h2hero: "Tours guiados para agencias, operadores y empresas",
      bullets: [
        "Operador local en B\xE9lgica",
        "Gu\xEDas profesionales propios",
        "Colaboraci\xF3n B2B flexible"
      ],
      who: "Con qui\xE9n trabajamos",
      whoList: [
        "Agencias de viajes",
        "Operadores tur\xEDsticos y DMC",
        "Plataformas",
        "Empresas e instituciones"
      ],
      form: "Solicitar informaci\xF3n B2B",
      fields: {
        name: "Nombre",
        company: "Empresa",
        email: "Email",
        type: "Tipo de colaboraci\xF3n"
      },
      types: {
        travel_agency: "Agencia de viajes",
        tour_operator_dmc: "Operador tur\xEDstico / DMC",
        platform: "Plataforma",
        corporate_mice: "Corporativo / MICE",
        other: "Otro"
      },
      send: "Enviar solicitud",
      success: "Gracias. Te contactaremos en breve.",
      micro: "Sin precios \xB7 Sin compromiso \xB7 Solo contacto B2B"
    },
    fr: {
      title: "Op\xE9rateur touristique B2B en Belgique | BelgoTours",
      description: "Op\xE9rateur local en Belgique proposant des visites guid\xE9es pour agences de voyages, tour-op\xE9rateurs et entreprises.",
      h1a: "Op\xE9rateur touristique B2B en Belgique",
      h1b: "Exp\xE9riences guid\xE9es locales",
      h2hero: "Visites guid\xE9es pour agences, op\xE9rateurs et entreprises",
      bullets: [
        "Op\xE9rateur local bas\xE9 en Belgique",
        "Guides professionnels internes",
        "Collaboration B2B flexible"
      ],
      who: "Avec qui nous travaillons",
      whoList: [
        "Agences de voyages",
        "Tour-op\xE9rateurs & DMC",
        "Plateformes",
        "Entreprises et institutions"
      ],
      form: "Demande d\u2019information B2B",
      fields: {
        name: "Nom",
        company: "Entreprise",
        email: "Email",
        type: "Type de collaboration"
      },
      types: {
        travel_agency: "Agence de voyages",
        tour_operator_dmc: "Tour-op\xE9rateur / DMC",
        platform: "Plateforme",
        corporate_mice: "Entreprise / MICE",
        other: "Autre"
      },
      send: "Envoyer la demande",
      success: "Merci. Nous vous contacterons rapidement.",
      micro: "Sans prix \xB7 Sans engagement \xB7 Contact B2B uniquement"
    },
    it: {
      title: "Operatore turistico B2B in Belgio | BelgoTours",
      description: "Operatore locale in Belgio con tour guidati per agenzie di viaggio, tour operator e aziende.",
      h1a: "Operatore turistico B2B in Belgio",
      h1b: "Esperienze guidate locali",
      h2hero: "Tour guidati per agenzie, operatori e aziende",
      bullets: [
        "Operatore locale in Belgio",
        "Guide professionali interne",
        "Collaborazione B2B flessibile"
      ],
      who: "Con chi lavoriamo",
      whoList: [
        "Agenzie di viaggio",
        "Tour operator e DMC",
        "Piattaforme",
        "Aziende e istituzioni"
      ],
      form: "Richiedi informazioni B2B",
      fields: {
        name: "Nome",
        company: "Azienda",
        email: "Email",
        type: "Tipo di collaborazione"
      },
      types: {
        travel_agency: "Agenzia di viaggi",
        tour_operator_dmc: "Tour operator / DMC",
        platform: "Piattaforma",
        corporate_mice: "Aziendale / MICE",
        other: "Altro"
      },
      send: "Invia richiesta",
      success: "Grazie. Ti contatteremo a breve.",
      micro: "Nessun prezzo \xB7 Nessun impegno \xB7 Solo contatto B2B"
    }
  };
  const copy = t[lang] || t.en;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": copy.title, "description": copy.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourHeader", $$TourHeader, { "simple": true })} ${maybeRenderHead()}<main class="bg-white"> <section class="max-w-3xl mx-auto px-6 py-20 space-y-16"> <!-- HERO --> <header class="space-y-6"> <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"> ${copy.h1a}<br> <span class="text-gray-700">${copy.h1b}</span> </h1> <h2 class="text-lg md:text-xl text-gray-600"> ${copy.h2hero} </h2> <ul class="space-y-2 text-gray-700 text-sm md:text-base"> ${copy.bullets.map((b) => renderTemplate`<li>• ${b}</li>`)} </ul> </header> <!-- WHO --> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900"> ${copy.who} </h2> <ul class="grid grid-cols-2 gap-2 text-gray-700 text-sm md:text-base"> ${copy.whoList.map((w) => renderTemplate`<li>• ${w}</li>`)} </ul> </section> <!-- FORM --> <section class="space-y-6"> <h2 class="text-2xl font-bold text-gray-900"> ${copy.form} </h2> <form id="b2bForm" class="space-y-4 max-w-lg"> <input type="text" name="name"${addAttribute(copy.fields.name, "placeholder")} required class="w-full border border-gray-300 rounded-xl px-4 py-3"> <input type="text" name="company"${addAttribute(copy.fields.company, "placeholder")} required class="w-full border border-gray-300 rounded-xl px-4 py-3"> <input type="email" name="email"${addAttribute(copy.fields.email, "placeholder")} required class="w-full border border-gray-300 rounded-xl px-4 py-3"> <select name="collaboration_type" required class="w-full border border-gray-300 rounded-xl px-4 py-3"> <option value="">${copy.fields.type}</option> ${Object.entries(copy.types).map(([k, v]) => renderTemplate`<option${addAttribute(k, "value")}>${v}</option>`)} </select> <button id="submitBtn" type="submit" class="bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition"> ${copy.send} </button> <p class="text-xs text-gray-500">${copy.micro}</p> <p id="successMsg" class="hidden text-green-700 font-semibold text-sm mt-4 animate-fade-in">
✅ ${copy.success} </p> </form> </section> </section> </main>  ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/b2b-collaboration-belgium.astro", void 0);

const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/b2b-collaboration-belgium.astro";
const $$url = "/[lang]/b2b-collaboration-belgium";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$B2BCollaborationBelgium,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
