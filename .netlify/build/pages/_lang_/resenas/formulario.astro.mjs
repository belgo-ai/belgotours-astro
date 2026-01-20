/* empty css                                                           */
import { c as createAstro, d as createComponent, l as renderHead, i as renderComponent, r as renderTemplate, f as addAttribute } from '../../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_Du494iuS.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$Formulario = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Formulario;
  const token = Astro2.url.searchParams.get("token");
  if (!token) {
    throw new Error("Token is required");
  }
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>Deja tu reseña | BelgoTours</title>${renderHead()}</head> <body class="bg-gray-100 text-gray-800"> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-10 mt-10 mb-24"> <!-- TITULAR --> <h1 class="text-3xl font-bold text-center mb-2">
Tu opinión nos ayuda a mejorar
</h1> <p class="text-center text-gray-600 mb-8 text-sm sm:text-base">
Gracias por confiar en BelgoTours. Tu reseña ayudará a otros viajeros a elegir el tour ideal
          y nos permitirá seguir ofreciendo experiencias únicas en Bruselas y Brujas.
</p> <!-- FORMULARIO --> <form method="POST" action="/api/submit-review" class="space-y-8"> <input type="hidden" name="token"${addAttribute(token, "value")}> <!-- ⭐ VALORACIÓN GENERAL --> <section> <div class="flex items-center justify-between mb-2"> <h2 class="font-semibold text-lg">
Valoración general del tour
</h2> <span class="text-xs text-blue-600 font-medium">
Obligatorio
</span> </div> <p class="text-xs text-gray-500 mb-3">
Toca las estrellas para valorar tu experiencia de 1 a 5.
</p> <div class="flex items-center gap-2"> <!-- 5 → 1 para que visualmente se vea de izquierda a derecha --> <div class="flex flex-row-reverse justify-end gap-1"> <input id="rating_general_5" type="radio" name="rating_general" value="5" class="peer sr-only" required> <label for="rating_general_5" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="rating_general_4" type="radio" name="rating_general" value="4" class="peer sr-only"> <label for="rating_general_4" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="rating_general_3" type="radio" name="rating_general" value="3" class="peer sr-only"> <label for="rating_general_3" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="rating_general_2" type="radio" name="rating_general" value="2" class="peer sr-only"> <label for="rating_general_2" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="rating_general_1" type="radio" name="rating_general" value="1" class="peer sr-only"> <label for="rating_general_1" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> </div> <span class="ml-3 text-sm text-gray-600">
1 = Muy malo &nbsp;·&nbsp; 5 = Excelente
</span> </div> </section> <!-- ⭐ SUBVALORACIONES --> <section> <h2 class="font-semibold text-lg mb-3">
Detalles de la experiencia
</h2> <div class="grid gap-4 sm:grid-cols-2"> <!-- Profesionalidad --> <div> <div class="flex items-center justify-between mb-1"> <span class="font-semibold text-sm sm:text-base">
Profesionalidad del guía
</span> <span class="text-[11px] text-gray-400">Opcional</span> </div> <div class="flex flex-row-reverse justify-end gap-1"> <input id="profesionalidad_5" type="radio" name="profesionalidad" value="5" class="peer sr-only"> <label for="profesionalidad_5" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="profesionalidad_4" type="radio" name="profesionalidad" value="4" class="peer sr-only"> <label for="profesionalidad_4" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="profesionalidad_3" type="radio" name="profesionalidad" value="3" class="peer sr-only"> <label for="profesionalidad_3" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="profesionalidad_2" type="radio" name="profesionalidad" value="2" class="peer sr-only"> <label for="profesionalidad_2" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="profesionalidad_1" type="radio" name="profesionalidad" value="1" class="peer sr-only"> <label for="profesionalidad_1" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> </div> </div> <!-- Diversión --> <div> <div class="flex items-center justify-between mb-1"> <span class="font-semibold text-sm sm:text-base">
Diversión
</span> <span class="text-[11px] text-gray-400">Opcional</span> </div> <div class="flex flex-row-reverse justify-end gap-1"> <input id="diversion_5" type="radio" name="diversion" value="5" class="peer sr-only"> <label for="diversion_5" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="diversion_4" type="radio" name="diversion" value="4" class="peer sr-only"> <label for="diversion_4" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="diversion_3" type="radio" name="diversion" value="3" class="peer sr-only"> <label for="diversion_3" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="diversion_2" type="radio" name="diversion" value="2" class="peer sr-only"> <label for="diversion_2" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="diversion_1" type="radio" name="diversion" value="1" class="peer sr-only"> <label for="diversion_1" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> </div> </div> <!-- Comunicación --> <div> <div class="flex items-center justify-between mb-1"> <span class="font-semibold text-sm sm:text-base">
Comunicación del guía
</span> <span class="text-[11px] text-gray-400">Opcional</span> </div> <div class="flex flex-row-reverse justify-end gap-1"> <input id="comunicacion_5" type="radio" name="comunicacion" value="5" class="peer sr-only"> <label for="comunicacion_5" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="comunicacion_4" type="radio" name="comunicacion" value="4" class="peer sr-only"> <label for="comunicacion_4" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="comunicacion_3" type="radio" name="comunicacion" value="3" class="peer sr-only"> <label for="comunicacion_3" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="comunicacion_2" type="radio" name="comunicacion" value="2" class="peer sr-only"> <label for="comunicacion_2" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="comunicacion_1" type="radio" name="comunicacion" value="1" class="peer sr-only"> <label for="comunicacion_1" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> </div> </div> <!-- Calidad de la información --> <div> <div class="flex items-center justify-between mb-1"> <span class="font-semibold text-sm sm:text-base">
Calidad de la información
</span> <span class="text-[11px] text-gray-400">Opcional</span> </div> <div class="flex flex-row-reverse justify-end gap-1"> <input id="calidad_5" type="radio" name="calidad" value="5" class="peer sr-only"> <label for="calidad_5" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="calidad_4" type="radio" name="calidad" value="4" class="peer sr-only"> <label for="calidad_4" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="calidad_3" type="radio" name="calidad" value="3" class="peer sr-only"> <label for="calidad_3" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="calidad_2" type="radio" name="calidad" value="2" class="peer sr-only"> <label for="calidad_2" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="calidad_1" type="radio" name="calidad" value="1" class="peer sr-only"> <label for="calidad_1" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> </div> </div> <!-- Ruta / Itinerario --> <div class="sm:col-span-2"> <div class="flex items-center justify-between mb-1"> <span class="font-semibold text-sm sm:text-base">
Ruta / Itinerario del tour
</span> <span class="text-[11px] text-gray-400">Opcional</span> </div> <p class="text-[11px] text-gray-500 mb-1">
Piensa en los lugares visitados, el ritmo del recorrido y el equilibrio entre historia y entretenimiento.
</p> <div class="flex flex-row-reverse justify-end gap-1"> <input id="ruta_5" type="radio" name="ruta" value="5" class="peer sr-only"> <label for="ruta_5" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="ruta_4" type="radio" name="ruta" value="4" class="peer sr-only"> <label for="ruta_4" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="ruta_3" type="radio" name="ruta" value="3" class="peer sr-only"> <label for="ruta_3" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="ruta_2" type="radio" name="ruta" value="2" class="peer sr-only"> <label for="ruta_2" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> <input id="ruta_1" type="radio" name="ruta" value="1" class="peer sr-only"> <label for="ruta_1" class="cursor-pointer text-3xl sm:text-4xl text-[#FACC15] hover:scale-110 transition-transform">
★
</label> </div> </div> </div> </section> <!-- 💬 COMENTARIO PÚBLICO --> <section> <label class="font-semibold block mb-1">
Comentario para otros viajeros
</label> <p class="text-sm text-gray-500 mb-2">
Cuéntales qué te gustó del tour, del guía o de la ciudad. Tu experiencia ayudará a otros a decidirse.
</p> <textarea name="comentario_publico" rows="4" class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Por ejemplo: “Nos encantó la energía del guía y las historias de la Grand Place…”"></textarea> </section> <!-- 🔒 COMENTARIO PRIVADO --> <!-- BOTÓN ENVIAR --> <button type="submit" class="w-full bg-[#FACC15] hover:bg-[#FBBF24]
           text-gray-900 font-extrabold
           py-4 rounded-2xl text-lg
           shadow-lg transition-all">
⭐ Enviar reseña
</button> <p class="text-center text-xs text-gray-500 mt-3">
Tu reseña puede aparecer públicamente y ayudar a otros viajeros.
</p> </form> </div> ` })} </body></html>`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/resenas/formulario.astro", void 0);

const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/resenas/formulario.astro";
const $$url = "/[lang]/resenas/formulario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Formulario,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
