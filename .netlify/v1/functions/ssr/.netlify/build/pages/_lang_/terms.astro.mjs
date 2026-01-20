/* empty css                                                        */
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Du494iuS.mjs';
import { $ as $$TourHeader } from '../../chunks/TourHeader_0yEfAs_k.mjs';
import { $ as $$Footer } from '../../chunks/Footer_DIYA9f-P.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Terms;
  const { lang } = Astro2.params;
  const t = {
    es: {
      title: "T\xE9rminos y Condiciones | BelgoTours",
      h1: "T\xE9rminos y Condiciones",
      sections: {
        general: "1. Informaci\xF3n general",
        services: "2. Servicios",
        reservations: "3. Reservas",
        cancellations: "4. Cancelaciones",
        ip: "5. Propiedad intelectual",
        law: "6. Legislaci\xF3n aplicable"
      },
      content: {
        general: "BelgoTours es un operador tur\xEDstico local con sede en Bruselas que ofrece visitas guiadas a pie y experiencias privadas en B\xE9lgica.",
        services: [
          "Free Tours: visitas guiadas basadas en aportaci\xF3n libre con reserva previa.",
          "Tours privados: recorridos personalizados para grupos cerrados con precio acordado."
        ],
        reservations: "El usuario debe proporcionar informaci\xF3n veraz al realizar una reserva. Las reservas fraudulentas o duplicadas podr\xE1n ser canceladas.",
        cancellations: "Los free tours pueden cancelarse gratuitamente. Los tours privados se rigen por las condiciones de cancelaci\xF3n indicadas en la confirmaci\xF3n.",
        ip: "Todos los contenidos, recorridos y materiales son propiedad de BelgoTours y no pueden reproducirse sin autorizaci\xF3n.",
        law: "Estos t\xE9rminos se rigen por la legislaci\xF3n belga. Cualquier conflicto ser\xE1 sometido a los tribunales de Bruselas."
      }
    },
    en: {
      title: "Terms & Conditions | BelgoTours",
      h1: "Terms & Conditions",
      sections: {
        general: "1. General information",
        services: "2. Services",
        reservations: "3. Reservations",
        cancellations: "4. Cancellations",
        ip: "5. Intellectual property",
        law: "6. Applicable law"
      },
      content: {
        general: "BelgoTours is a local tour operator based in Brussels offering guided walking tours and private experiences in Belgium.",
        services: [
          "Free Tours: tip-based walking tours with prior reservation.",
          "Private Tours: customized tours for closed groups with agreed pricing."
        ],
        reservations: "Users must provide accurate information when booking. Fraudulent or duplicate reservations may be cancelled.",
        cancellations: "Free tours can be cancelled free of charge. Private tours follow the cancellation conditions specified at confirmation.",
        ip: "All content, routes and materials are property of BelgoTours and may not be reproduced without permission.",
        law: "These terms are governed by Belgian law. Any dispute shall be submitted to the courts of Brussels."
      }
    },
    it: {
      title: "Termini e Condizioni | BelgoTours",
      h1: "Termini e Condizioni",
      sections: {
        general: "1. Informazioni generali",
        services: "2. Servizi",
        reservations: "3. Prenotazioni",
        cancellations: "4. Cancellazioni",
        ip: "5. Propriet\xE0 intellettuale",
        law: "6. Legge applicabile"
      },
      content: {
        general: "BelgoTours \xE8 un operatore turistico locale con sede a Bruxelles che offre tour guidati e esperienze private in Belgio.",
        services: [
          "Free Tours: visite guidate con offerta libera previa prenotazione.",
          "Tour privati: esperienze personalizzate per gruppi chiusi con prezzo concordato."
        ],
        reservations: "L\u2019utente deve fornire informazioni corrette al momento della prenotazione. Le prenotazioni fraudolente o duplicate possono essere annullate.",
        cancellations: "I free tour possono essere cancellati gratuitamente. I tour privati seguono le condizioni di cancellazione indicate nella conferma.",
        ip: "Tutti i contenuti, gli itinerari e i materiali sono propriet\xE0 di BelgoTours e non possono essere riprodotti senza autorizzazione.",
        law: "I presenti termini sono regolati dalla legge belga. Qualsiasi controversia sar\xE0 sottoposta ai tribunali di Bruxelles."
      }
    },
    fr: {
      title: "Conditions G\xE9n\xE9rales | BelgoTours",
      h1: "Conditions G\xE9n\xE9rales",
      sections: {
        general: "1. Informations g\xE9n\xE9rales",
        services: "2. Services",
        reservations: "3. R\xE9servations",
        cancellations: "4. Annulations",
        ip: "5. Propri\xE9t\xE9 intellectuelle",
        law: "6. Droit applicable"
      },
      content: {
        general: "BelgoTours est un op\xE9rateur touristique local bas\xE9 \xE0 Bruxelles proposant des visites guid\xE9es et des exp\xE9riences priv\xE9es en Belgique.",
        services: [
          "Free Tours : visites guid\xE9es sur la base d\u2019une contribution libre avec r\xE9servation pr\xE9alable.",
          "Tours priv\xE9s : exp\xE9riences personnalis\xE9es pour des groupes priv\xE9s \xE0 prix convenu."
        ],
        reservations: "L\u2019utilisateur doit fournir des informations exactes lors de la r\xE9servation. Les r\xE9servations frauduleuses ou en double peuvent \xEAtre annul\xE9es.",
        cancellations: "Les free tours peuvent \xEAtre annul\xE9s gratuitement. Les tours priv\xE9s suivent les conditions d\u2019annulation indiqu\xE9es lors de la confirmation.",
        ip: "Tous les contenus, itin\xE9raires et supports sont la propri\xE9t\xE9 de BelgoTours et ne peuvent \xEAtre reproduits sans autorisation.",
        law: "Les pr\xE9sentes conditions sont r\xE9gies par le droit belge. Tout litige sera soumis aux tribunaux de Bruxelles."
      }
    }
  };
  const copy = t[lang] || t.en;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": copy.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourHeader", $$TourHeader, { "simple": true })} ${maybeRenderHead()}<main class="bg-white"> <section class="max-w-3xl mx-auto px-6 py-16 prose prose-gray"> <h1>${copy.h1}</h1> <h2>${copy.sections.general}</h2> <p>${copy.content.general}</p> <h2>${copy.sections.services}</h2> <ul> ${copy.content.services.map((item) => renderTemplate`<li>${item}</li>`)} </ul> <h2>${copy.sections.reservations}</h2> <p>${copy.content.reservations}</p> <h2>${copy.sections.cancellations}</h2> <p>${copy.content.cancellations}</p> <h2>${copy.sections.ip}</h2> <p>${copy.content.ip}</p> <h2>${copy.sections.law}</h2> <p>${copy.content.law}</p> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/terms.astro", void 0);

const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/terms.astro";
const $$url = "/[lang]/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
