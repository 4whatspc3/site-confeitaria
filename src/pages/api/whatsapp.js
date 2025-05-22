// src/pages/api/whatsapp.js
export const prerender = false;

export async function GET(context) {
  const { request } = context;
  // pega todos os bindings/env configurados no Pages
  const { env } = context.locals.runtime;

  console.log("[whatsapp] Bindings disponíveis:", Object.keys(env));
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
