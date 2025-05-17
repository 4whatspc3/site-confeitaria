export const cart = [];

export function calcularTotal() {
  const total = cart.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.quantidade;
  }, 0);

  return Math.round(total * 100) / 100;
}

export function salvarCarrinho() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function carregarCarrinho() {
  const cartSalvo = localStorage.getItem('cart');
  if (cartSalvo) {
    cart.length = 0; 
    cart.push(...JSON.parse(cartSalvo)); 
  }
}

export function notifyCartChange() {
  document.dispatchEvent(new CustomEvent("cartChange"));
}