// Gerado com o prompt:
// "Crie uma função que calcula o total de um pedido aplicando 10% de desconto
// para valores acima de 100 e gere testes unitários para validar o comportamento."

function calcularTotal(valor) {
  if (valor > 100) {
    return valor * 0.9;
  }
  return valor;
}

module.exports = { calcularTotal };
