/* empty css                                                        */
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, k as Fragment } from '../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Du494iuS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$BookingSuccess = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookingSuccess;
  const { lang } = Astro2.params;
  const reservaId = Astro2.url.searchParams.get("id");
  const STRAPI_URL = "http://168.119.183.247:1337/api";
  let reserva = null;
  let error = null;
  const T = {
    title: {
      es: "🎉 Reserva confirmada",
      en: "🎉 Booking confirmed",
      it: "🎉 Prenotazione confermata",
      fr: "🎉 Réservation confirmée"
    },
    subtitle: {
      es: "Te hemos enviado un email con todos los detalles.",
      en: "We've sent you an email with all the details.",
      it: "Ti abbiamo inviato un'email con tutti i dettagli.",
      fr: "Nous vous avons envoyé un email avec tous les détails."
    },
    reservationCode: {
      es: "Código de reserva",
      en: "Reservation Code",
      it: "Codice di prenotazione",
      fr: "Code de réservation"
    },
    viewDetails: {
      es: "Ver detalle completo",
      en: "View full details",
      it: "Vedi dettagli completi",
      fr: "Voir les détails complets"
    },
    edit: {
      es: "Modificar reserva",
      en: "Edit booking",
      it: "Modifica prenotazione",
      fr: "Modifier la réservation"
    },
    whatsapp: {
      es: "Compartir por WhatsApp",
      en: "Share via WhatsApp",
      it: "Condividi via WhatsApp",
      fr: "Partager via WhatsApp"
    },
    backToHome: {
      es: "Volver a BelgoTours",
      en: "Back to BelgoTours",
      it: "Torna a BelgoTours",
      fr: "Retour à BelgoTours"
    },
    error: {
      es: "No se pudo cargar tu reserva.",
      en: "We could not load your booking.",
      it: "Impossibile caricare la prenotazione.",
      fr: "Impossible de charger votre réservation."
    }
  };
  if (!reservaId) {
    error = T.error[lang];
  } else {
    try {
      const url = `${STRAPI_URL}/reservas/public/${encodeURIComponent(reservaId)}?populate[tour]=*`;
      const res = await fetch(url);
      if (!res.ok) {
        error = T.error[lang];
      } else {
        const json = await res.json();
        reserva = json?.data || null;
        if (!reserva) error = T.error[lang];
      }
    } catch (e) {
      console.error(e);
      error = T.error[lang];
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 py-10 px-4"> <div class="max-w-3xl mx-auto"> <div class="bg-white shadow-xl rounded-3xl p-8 border border-gray-100"> <!-- SI HAY ERROR --> ${error ? renderTemplate`<div class="text-center py-16"> <h1 class="text-3xl font-bold text-red-600 mb-6">${error}</h1> <a${addAttribute(`/${lang}/`, "href")} class="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"> ${T.backToHome[lang]} </a> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`  <div class="flex items-start justify-between mb-8"> <div> <h1 class="text-3xl font-bold text-gray-900">${T.title[lang]}</h1> <p class="text-gray-600">${T.subtitle[lang]}</p> </div> <div class="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-center shadow-sm"> <p class="text-xs uppercase tracking-wide text-gray-500"> ${T.reservationCode[lang]} </p> <p class="text-lg font-bold text-gray-900">${reserva.id}</p> </div> </div>  <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-inner mb-8"> <h2 class="text-xl font-semibold mb-4 text-gray-800">
Detalles de tu reserva
</h2> <div class="grid grid-cols-2 gap-y-2 text-gray-700 text-sm"> <p class="font-medium">Tour</p> <p>${reserva.tour?.titulo}</p> <p class="font-medium">Fecha</p> <p>${new Date(reserva.fecha_hora_tour).toLocaleDateString(lang)}</p> <p class="font-medium">Horario</p> <p>${new Date(reserva.fecha_hora_tour).toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" })}</p> <p class="font-medium">Participantes</p> <p>${reserva.adultos} adultos, ${reserva.ninos} niños</p> <p class="font-medium">Idioma</p> <p>${reserva.idioma_tour?.toUpperCase()}</p> </div> </div>  <div class="space-y-4"> <a${addAttribute(`/${lang}/booking-view?id=${reserva.id}`, "href")} class="w-full block text-center px-6 py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-900"> ${T.viewDetails[lang]} </a> <a${addAttribute(`/${lang}/booking-edit?id=${reserva.id}`, "href")} class="w-full block text-center px-6 py-4 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600"> ${T.edit[lang]} </a> <a${addAttribute(reserva.whatsapp_url || "#", "href")} target="_blank" class="w-full block text-center px-6 py-4 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700"> ${T.whatsapp[lang]} </a> <a${addAttribute(`/${lang}/`, "href")} class="block text-center px-6 py-4 rounded-xl bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"> ${T.backToHome[lang]} </a> </div> ` })}`} </div> </div> </main> ` })}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/booking-success.astro", void 0);
const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/booking-success.astro";
const $$url = "/[lang]/booking-success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookingSuccess,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
