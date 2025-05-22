// src/pages/api/whatsapp.js
export const prerender = false;

export async function GET({ request, env }) {
  // env.WP_NUMBER vem das Environment Variables do Cloudflare Pages
  const wpNumber = env.WP_NUMBER;
  if (!wpNumber) {
    console.error("[whatsapp] WP_NUMBER não encontrado em env:", Object.keys(env));
    return new Response("Erro: Número do WhatsApp não configurado.", { status: 500 });
  }

  const url = new URL(request.url);
  const message = url.searchParams.get("message") ?? "Olá, tudo bem?";
  const whatsappUrl = `https://wa.me/${wpNumber}?text=${encodeURIComponent(message)}`;
  return Response.redirect(whatsappUrl, 302);
}
