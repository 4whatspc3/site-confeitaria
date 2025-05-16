export const cart = [];

export function calcularTotal() {
  const total = cart.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.quantidade;
  }, 0);

  // Arredonda para duas casas decimais
  return Math.round(total * 100) / 100;
}

export function notifyCartChange() {
  document.dispatchEvent(new CustomEvent("cartChange"));
}
