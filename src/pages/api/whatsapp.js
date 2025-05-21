export const prerender = false;

export async function GET({ request }) {
  console.log("Request URL completa:", request.url);
  const url = new URL(request.url);
  console.log("Query string:", url.search);
  const rawMessage = url.searchParams.get("message");
  console.log("Raw message received:", rawMessage);
  
  const message = rawMessage ?? "Olá, tudo bem?";
  console.log("Message used:", message);

  const wpNumber = process.env.WP_NUMBER; 
  if (!wpNumber) {
    return new Response("Erro: Número do WhatsApp não configurado.", { status: 500 });
  }
  
  const whatsappUrl = `https://wa.me/${wpNumber}?text=${encodeURIComponent(message)}`;
  return Response.redirect(whatsappUrl, 302);
}
