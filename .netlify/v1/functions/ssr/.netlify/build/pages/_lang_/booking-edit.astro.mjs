/* empty css                                                        */
import { c as createAstro, d as createComponent, i as renderComponent, j as renderScript, r as renderTemplate, m as maybeRenderHead, f as addAttribute, k as Fragment } from '../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Du494iuS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$BookingEdit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookingEdit;
  const { lang } = Astro2.params;
  const uiLang = ["es", "en", "it", "fr"].includes(lang) ? lang : "es";
  const reservaId = Astro2.url.searchParams.get("id");
  const STRAPI_URL = "http://168.119.183.247:1337/api";
  let reserva = null;
  let error = null;
  if (!reservaId) {
    error = uiLang === "es" ? "No se encontró el identificador de la reserva." : uiLang === "en" ? "Reservation ID not found." : uiLang === "it" ? "ID della prenotazione non trovato." : "Identifiant de réservation introuvable.";
  } else {
    try {
      const res = await fetch(
        `${STRAPI_URL}/reservas/public/${encodeURIComponent(
          reservaId
        )}?populate[tour]=*`
      );
      if (!res.ok) {
        error = uiLang === "es" ? "No se pudo cargar tu reserva." : uiLang === "en" ? "We could not load your booking." : uiLang === "it" ? "Non è stato possibile caricare la tua prenotazione." : "Impossible de charger votre réservation.";
      } else {
        const json = await res.json();
        reserva = json?.data || null;
      }
    } catch (e) {
      console.error("Error loading reservation:", e);
      error = uiLang === "es" ? "Ocurrió un error al cargar tu reserva." : uiLang === "en" ? "An error occurred while loading your booking." : uiLang === "it" ? "Si è verificato un errore durante il caricamento della prenotazione." : "Une erreur s'est produite lors du chargement de votre réservation.";
    }
  }
  const adultos = reserva?.adultos ?? 1;
  const ninos = reserva?.ninos ?? 0;
  const nombre = reserva?.nombre ?? "";
  const apellidos = reserva?.apellidos ?? "";
  const email = reserva?.email ?? "";
  const telefono = reserva?.telefono ?? "";
  const ciudad = reserva?.ciudad ?? "";
  const pais = reserva?.pais ?? "";
  const comentarios = reserva?.comentarios_cliente ?? "";
  const estado = reserva?.estado ?? "confirmada";
  let dateLabel = "--/--/----";
  let timeLabel = "--:--";
  if (reserva?.fecha_hora_tour) {
    const d = new Date(reserva.fecha_hora_tour);
    const localeMap = {
      es: "es-ES",
      en: "en-GB",
      it: "it-IT",
      fr: "fr-FR"
    };
    const locale = localeMap[uiLang] || "es-ES";
    dateLabel = d.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    timeLabel = d.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  const tTitle = {
    es: "Editar tu reserva",
    en: "Edit your booking",
    it: "Modifica la tua prenotazione",
    fr: "Modifier votre réservation"
  };
  const tSubtitle = {
    es: "Actualiza tus datos. Si necesitas cambiar fecha u horario, cancela y crea una nueva reserva.",
    en: "Update your details. If you need to change date or time, cancel and create a new booking.",
    it: "Aggiorna i tuoi dati. Se devi cambiare data o orario, annulla e crea una nuova prenotazione.",
    fr: "Mettez à jour vos informations. Si vous devez changer la date ou l'horaire, annulez et créez une nouvelle réservation."
  };
  const tSectionBooking = {
    es: "Resumen del tour",
    en: "Tour summary",
    it: "Riepilogo del tour",
    fr: "Résumé de la visite"
  };
  const tSectionEdit = {
    es: "Datos que puedes modificar",
    en: "Details you can edit",
    it: "Dati che puoi modificare",
    fr: "Données que vous pouvez modifier"
  };
  const tWarningDate = {
    es: "Para cambiar fecha u horario, cancela esta reserva y realiza una nueva. Así evitamos errores de capacidad y asignación de guía.",
    en: "To change date or time, please cancel this booking and create a new one. This avoids capacity and guide assignment issues.",
    it: "Per cambiare data o orario, annulla questa prenotazione e creane una nuova. Così evitiamo problemi di capacità e assegnazione della guida.",
    fr: "Pour changer la date ou l'horaire, annulez cette réservation et créez-en une nouvelle. Cela évite les problèmes de capacité et d'affectation du guide."
  };
  const tLabels = {
    name: { es: "Nombre", en: "First name", it: "Nome", fr: "Prénom" },
    lastName: {
      es: "Apellidos",
      en: "Last name",
      it: "Cognome",
      fr: "Nom de famille"
    },
    email: {
      es: "Correo electrónico",
      en: "Email address",
      it: "Indirizzo email",
      fr: "Adresse email"
    },
    phone: {
      es: "Teléfono (WhatsApp recomendado)",
      en: "Phone (WhatsApp recommended)",
      it: "Telefono (WhatsApp consigliato)",
      fr: "Téléphone (WhatsApp recommandé)"
    },
    city: {
      es: "Ciudad de residencia",
      en: "City of residence",
      it: "Città di residenza",
      fr: "Ville de résidence"
    },
    country: {
      es: "País",
      en: "Country",
      it: "Paese",
      fr: "Pays"
    },
    adults: {
      es: "Adultos",
      en: "Adults",
      it: "Adulti",
      fr: "Adultes"
    },
    children: {
      es: "Niños",
      en: "Children",
      it: "Bambini",
      fr: "Enfants"
    },
    comments: {
      es: "Comentarios para el guía (opcional)",
      en: "Comments for the guide (optional)",
      it: "Commenti per la guida (opzionale)",
      fr: "Commentaires pour le guide (optionnel)"
    }
  };
  const tButtons = {
    save: {
      es: "💾 Guardar cambios",
      en: "💾 Save changes",
      it: "💾 Salva modifiche",
      fr: "💾 Enregistrer les changements"
    },
    cancel: {
      es: "Cancelar reserva",
      en: "Cancel booking",
      it: "Annulla prenotazione",
      fr: "Annuler la réservation"
    },
    back: {
      es: "← Volver al resumen",
      en: "← Back to summary",
      it: "← Torna al riepilogo",
      fr: "← Retour au récapitulatif"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": uiLang }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50/80 py-10 px-4"> <div id="bookingEditRoot" class="max-w-5xl mx-auto"${addAttribute(uiLang, "data-lang")}${addAttribute(reservaId || "", "data-reserva-id")}${addAttribute(STRAPI_URL, "data-api-base")}> ${error ? renderTemplate`<div class="bg-white rounded-3xl shadow-2xl p-8 border border-red-100 text-center"> <h1 class="text-2xl md:text-3xl font-bold text-red-600 mb-3"> ${error} </h1> <a${addAttribute(`/${uiLang}/`, "href")} class="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"> ${tButtons.back[uiLang]} </a> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`<header class="mb-6"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 mb-3"> <span>🔐</span> <span> ${uiLang === "es" && "Solo tú puedes ver y modificar estos datos"} ${uiLang === "en" && "Only you can view and edit these details"} ${uiLang === "it" && "Solo tu puoi visualizzare e modificare questi dati"} ${uiLang === "fr" && "Vous seul(e) pouvez voir et modifier ces données"} </span> </div> <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2"> ${tTitle[uiLang]} </h1> <p class="text-sm md:text-base text-gray-600 max-w-2xl"> ${tSubtitle[uiLang]} </p> </header> <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">  <aside class="lg:col-span-2 space-y-4"> <section class="bg-white rounded-2xl shadow-xl border border-gray-100 p-5"> <h2 class="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2"> <span class="inline-flex w-8 h-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-lg">
📌
</span> <span>${tSectionBooking[uiLang]}</span> </h2> <div class="space-y-2 text-sm text-gray-700"> <div class="flex justify-between gap-4"> <span class="font-medium"> ${uiLang === "es" && "Tour"} ${uiLang === "en" && "Tour"} ${uiLang === "it" && "Tour"} ${uiLang === "fr" && "Visite"} </span> <span class="text-right font-semibold max-w-[60%]"> ${reserva?.tour?.titulo || reserva?.tour?.nombre || "Free Tour Bruselas"} </span> </div> <div class="flex justify-between gap-4"> <span class="font-medium"> ${uiLang === "es" && "Fecha"} ${uiLang === "en" && "Date"} ${uiLang === "it" && "Data"} ${uiLang === "fr" && "Date"} </span> <span>${dateLabel}</span> </div> <div class="flex justify-between gap-4"> <span class="font-medium"> ${uiLang === "es" && "Horario"} ${uiLang === "en" && "Time"} ${uiLang === "it" && "Orario"} ${uiLang === "fr" && "Horaire"} </span> <span>${timeLabel}</span> </div> <div class="flex justify-between gap-4"> <span class="font-medium"> ${uiLang === "es" && "Idioma"} ${uiLang === "en" && "Language"} ${uiLang === "it" && "Lingua"} ${uiLang === "fr" && "Langue"} </span> <span> ${(reserva?.idioma_tour || uiLang).toUpperCase()} </span> </div> <div class="flex justify-between gap-4"> <span class="font-medium"> ${uiLang === "es" && "Estado"} ${uiLang === "en" && "Status"} ${uiLang === "it" && "Stato"} ${uiLang === "fr" && "Statut"} </span> <span class="capitalize"> ${estado === "cancelada" ? uiLang === "es" ? "Cancelada" : uiLang === "en" ? "Cancelled" : uiLang === "it" ? "Annullata" : "Annulée" : uiLang === "es" ? "Confirmada" : uiLang === "en" ? "Confirmed" : uiLang === "it" ? "Confermata" : "Confirmée"} </span> </div> </div> <p class="mt-4 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-xl p-3 flex gap-2"> <span>⚠️</span> <span>${tWarningDate[uiLang]}</span> </p> </section>  <section class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"> <div class="p-4 pb-0 flex items-center justify-between"> <div> <p class="text-xs uppercase tracking-wide text-gray-400"> ${uiLang === "es" && "Punto de encuentro"} ${uiLang === "en" && "Meeting point"} ${uiLang === "it" && "Punto d'incontro"} ${uiLang === "fr" && "Point de rendez-vous"} </p> <p class="text-sm font-semibold text-gray-900">
Grand Place 8, 1000 Bruxelles
</p> </div> <a${addAttribute(
    process.env.MAPA_PUNTO_ENCUENTRO_URL || "https://www.google.com/maps/search/?api=1&query=Grand+Place+8+1000+Bruxelles",
    "href"
  )} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"> <span>Ver en Maps</span> <span>↗</span> </a> </div> <div class="mt-3"> <iframe${addAttribute(
    process.env.MAPA_EMBEBIDO_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.060253832005!2d4.3504613!3d50.8467334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3800f970fd5%3A0x9d0f9e3d3f8e9b1b!2sGrand%20Place%208%2C%201000%20Bruxelles!5e0!3m2!1ses!2sbe!4v1700000000000",
    "src"
  )} loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-56 border-t border-gray-100"></iframe> </div> </section> </aside>  <section class="lg:col-span-3"> <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 relative overflow-hidden"> <div class="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_top,_#2563eb,_transparent_60%),_radial-gradient(circle_at_bottom,_#22c55e,_transparent_55%)]"></div> <div class="relative z-10"> <h2 class="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-2"> <span class="inline-flex w-8 h-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-lg">
✏️
</span> <span>${tSectionEdit[uiLang]}</span> </h2> <p class="text-xs text-gray-600 mb-5"> ${uiLang === "es" && "Estos cambios actualizan tu reserva en tiempo real en BelgoTours (como en Airbnb / Google Reserve)."} ${uiLang === "en" && "These changes update your booking in real time in BelgoTours (like Airbnb / Google Reserve)."} ${uiLang === "it" && "Queste modifiche aggiornano la tua prenotazione in tempo reale su BelgoTours (come Airbnb / Google Reserve)."} ${uiLang === "fr" && "Ces modifications mettent à jour votre réservation en temps réel sur BelgoTours (comme Airbnb / Google Reserve)."} </p> <form id="editForm" class="space-y-5">  <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="nombre" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.name[uiLang]} *
</label> <input id="nombre" name="nombre" type="text"${addAttribute(nombre, "value")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none" required> </div> <div> <label for="apellidos" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.lastName[uiLang]} *
</label> <input id="apellidos" name="apellidos" type="text"${addAttribute(apellidos, "value")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none" required> </div> <div> <label for="email" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.email[uiLang]} *
</label> <input id="email" name="email" type="email"${addAttribute(email, "value")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none" required> </div> <div> <label for="telefono" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.phone[uiLang]} *
</label> <input id="telefono" name="telefono" type="tel"${addAttribute(telefono, "value")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none" required> <p class="mt-1 text-[11px] text-gray-500"> ${uiLang === "es" && "Si cambias de número, asegúrate de que sea un móvil con WhatsApp para avisos importantes."} ${uiLang === "en" && "If you change your number, make sure it's a mobile with WhatsApp for important updates."} ${uiLang === "it" && "Se cambi numero, assicurati che sia un cellulare con WhatsApp per gli avvisi importanti."} ${uiLang === "fr" && "Si vous changez de numéro, assurez-vous qu'il s'agit d'un mobile avec WhatsApp pour les informations importantes."} </p> </div> </div>  <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="ciudad" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.city[uiLang]} *
</label> <input id="ciudad" name="ciudad" type="text"${addAttribute(ciudad, "value")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none" required> </div> <div> <label for="pais" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.country[uiLang]} *
</label> <input id="pais" name="pais" type="text"${addAttribute(pais, "value")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none" required> </div> </div>  <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div> <label for="adultos" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.adults[uiLang]} *
</label> <input id="adultos" name="adultos" type="number" min="1" max="50"${addAttribute(adultos, "value")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none" required> </div> <div> <label for="ninos" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.children[uiLang]} </label> <input id="ninos" name="ninos" type="number" min="0" max="20"${addAttribute(ninos, "value")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none"> </div> </div>  <div> <label for="comentarios" class="block text-xs font-semibold text-gray-700 mb-1"> ${tLabels.comments[uiLang]} </label> <textarea id="comentarios" name="comentarios"${addAttribute(3, "rows")} class="w-full rounded-xl border border-gray-200 bg-white/80 px-3 py-2.5 text-sm shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-amber-200 outline-none">                        ${comentarios}
                      </textarea> </div>  <div id="editStatus" class="text-xs text-gray-600 min-h-[1.25rem]"></div>  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-3 border-t border-gray-100"> <div class="flex flex-col sm:flex-row gap-3"> <button id="saveChangesBtn" type="submit" class="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md shadow-emerald-500/30 transition transform hover:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed"> ${tButtons.save[uiLang]} </button> <button id="cancelBookingBtn" type="button" class="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-sm font-semibold shadow-sm transition"> ${tButtons.cancel[uiLang]} </button> </div> <a${addAttribute(`/${uiLang}/booking-success?id=${reservaId}`, "href")} class="inline-flex items-center justify-center text-xs font-medium text-gray-500 hover:text-gray-700"> ${tButtons.back[uiLang]} </a> </div> </form> </div> </div> </section> </div> ` })}`} </div> </main> ` })} ${renderScript($$result, "/home/edu/belgotours-desarrollo/src/pages/[lang]/booking-edit.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/booking-edit.astro", void 0);
const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/booking-edit.astro";
const $$url = "/[lang]/booking-edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookingEdit,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
