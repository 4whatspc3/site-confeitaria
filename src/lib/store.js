export const cart = [];

export function calcularTotal() {
  const total = cart.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.quantidade;
  }, 0);

  // Arredonda para duas casas decimais
  return Math.round(total * 100) / 100;
}

export function salvarCarrinho() {
  // Convertemos o array (ou objeto) em string JSON
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function carregarCarrinho() {
  const cartSalvo = localStorage.getItem('cart');
  if (cartSalvo) {
    // Se o cart já existir, convertemos de volta para o array/objeto
    // É importante manter a mesma referência se você estiver trabalhando com reatividade
    cart.length = 0; // Limpa o array existente sem perder a referência
    cart.push(...JSON.parse(cartSalvo)); 
  }
}

export function notifyCartChange() {
  document.dispatchEvent(new CustomEvent("cartChange"));
}