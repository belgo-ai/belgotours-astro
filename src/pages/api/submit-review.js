export const prerender = false;

export async function POST({ request }) {
  const formData = await request.formData();

  const apiUrl = import.meta.env.PUBLIC_STRAPI_URL + "/reviews/submit";

  await fetch(apiUrl, {
    method: "POST",
    body: formData,
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/es/resenas/gracias?ok=1",
    },
  });
}
