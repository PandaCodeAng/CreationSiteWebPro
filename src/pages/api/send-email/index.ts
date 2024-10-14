import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  console.log('API route appelée');
  return new Response(JSON.stringify({ message: "Route API fonctionnelle" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};