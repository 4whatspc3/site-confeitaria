export const prerender = false;

export async function GET({ request }) {
  const url = new URL(request.url);
  const rawMessage = url.searchParams.get("message");
  
  const message = rawMessage ?? "Olá, tudo bem?";

  const wpNumber = env.WP_NUMBER; 
  if (!wpNumber) {
    return new Response("Erro: Número do WhatsApp não configurado.", { status: 500 });
  }
  
  const whatsappUrl = `https://wa.me/${wpNumber}?text=${encodeURIComponent(message)}`;
  return Response.redirect(whatsappUrl, 302);
}
