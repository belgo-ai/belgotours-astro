/* empty css                                                           */
import { c as createAstro, d as createComponent } from '../../../chunks/astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://belgotours.com");
const prerender = false;
const $$token = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$token;
  const token = Astro2.params.token;
  const lang = Astro2.params.lang;
  if (!token) {
    throw new Error("Missing token");
  }
  const API = "http://168.119.183.247:1337/api";
  const res = await fetch(`${API}/review-tokens/validate?token=${token}`);
  let data;
  try {
    data = await res.json();
  } catch (e) {
    data = { valid: false };
  }
  if (!data?.valid) {
    return Astro2.redirect(`/${lang}/resenas/error?reason=invalid`);
  }
  return Astro2.redirect(`/${lang}/resenas/formulario?token=${token}`);
}, "/home/edu/belgotours-desarrollo/src/pages/[lang]/resenas/[token].astro", void 0);
const $$file = "/home/edu/belgotours-desarrollo/src/pages/[lang]/resenas/[token].astro";
const $$url = "/[lang]/resenas/[token]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$token,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
