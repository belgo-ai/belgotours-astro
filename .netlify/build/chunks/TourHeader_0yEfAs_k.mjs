import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './astro/server_C3p6TkWJ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://belgotours.com");
const $$TourHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TourHeader;
  const { lang = "es" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="w-full bg-black/85 text-white backdrop-blur-md"> <div class="container flex items-center py-4"> <!-- Logo --> <a${addAttribute(`/${lang}`, "href")} class="flex items-center gap-2 sm:gap-3" aria-label="BelgoTours"> <img src="/Logo-belgotours.webp" alt="BelgoTours" width="40" height="40" class="h-9 sm:h-10 w-auto object-contain" loading="eager" decoding="async"> <!-- Brand name --> <span class="
          text-base sm:text-lg md:text-xl
          font-semibold tracking-wide
          leading-none
        ">
BelgoTours
</span> </a> </div> </header>`;
}, "/home/edu/belgotours-desarrollo/src/components/TourHeader.astro", void 0);

export { $$TourHeader as $ };
