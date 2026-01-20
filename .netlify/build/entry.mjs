import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CQId-87O.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/submit-review.astro.mjs');
const _page3 = () => import('./pages/_lang_/b2b-collaboration-belgium.astro.mjs');
const _page4 = () => import('./pages/_lang_/booking-edit.astro.mjs');
const _page5 = () => import('./pages/_lang_/booking-success.astro.mjs');
const _page6 = () => import('./pages/_lang_/booking-view.astro.mjs');
const _page7 = () => import('./pages/_lang_/cookies.astro.mjs');
const _page8 = () => import('./pages/_lang_/legal-notice.astro.mjs');
const _page9 = () => import('./pages/_lang_/privacy.astro.mjs');
const _page10 = () => import('./pages/_lang_/resenas/formulario.astro.mjs');
const _page11 = () => import('./pages/_lang_/resenas/gracias.astro.mjs');
const _page12 = () => import('./pages/_lang_/resenas/_token_.astro.mjs');
const _page13 = () => import('./pages/_lang_/terms.astro.mjs');
const _page14 = () => import('./pages/_lang_/tours/_tourslug_.astro.mjs');
const _page15 = () => import('./pages/_lang_.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/submit-review.js", _page2],
    ["src/pages/[lang]/b2b-collaboration-belgium.astro", _page3],
    ["src/pages/[lang]/booking-edit.astro", _page4],
    ["src/pages/[lang]/booking-success.astro", _page5],
    ["src/pages/[lang]/booking-view.astro", _page6],
    ["src/pages/[lang]/cookies.astro", _page7],
    ["src/pages/[lang]/legal-notice.astro", _page8],
    ["src/pages/[lang]/privacy.astro", _page9],
    ["src/pages/[lang]/resenas/formulario.astro", _page10],
    ["src/pages/[lang]/resenas/gracias.astro", _page11],
    ["src/pages/[lang]/resenas/[token].astro", _page12],
    ["src/pages/[lang]/terms.astro", _page13],
    ["src/pages/[lang]/tours/[tourSlug].astro", _page14],
    ["src/pages/[lang]/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b2aecb87-a8a4-4e98-8ddf-ca70eb8d1130"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
