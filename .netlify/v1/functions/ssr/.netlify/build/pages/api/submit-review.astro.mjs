export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  const formData = await request.formData();
  const apiUrl = "http://168.119.183.247:1337/api/reviews/submit";
  await fetch(apiUrl, {
    method: "POST",
    body: formData
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/es/resenas/gracias?ok=1"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
