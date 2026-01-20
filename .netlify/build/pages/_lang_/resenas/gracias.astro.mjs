/* empty css                                                           */
import { d as createComponent, l as renderHead, i as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_Du494iuS.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const $$Gracias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>Gracias por tu reseña | BelgoTours</title>${renderHead()}</head> <body class="bg-gray-100"> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-xl mx-auto mt-20 bg-white rounded-2xl shadow-md p-10 text-center"> <div class="text-5xl mb-4">⭐</div> <h1 class="text-3xl font-bold mb-3">
¡Gracias por tu reseña!
</h1> <p class="text-gray-600 mb-6 leading-relaxed">
Tu opinión ayuda a otros viajeros a elegir con confianza
          y nos motiva a seguir creando experiencias auténticas en Bélgica.
</p> <p class="text-sm text-gray-500 mb-8">
Nos alegra haberte acompañado en tu experiencia con BelgoTours 💛
</p> <a class="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-10 py-3 rounded-xl shadow transition" href="/">
Volver a BelgoTours
</a> </div> ` })} </body></html>`;
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/resenas/gracias.astro", void 0);

const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/resenas/gracias.astro";
const $$url = "/[lang]/resenas/gracias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gracias,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
