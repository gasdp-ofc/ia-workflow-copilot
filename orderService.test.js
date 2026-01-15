// Gerado com o prompt:
// "Crie testes unitários usando Jest para validar a função calcularTotal,
// considerando valores acima e abaixo de 100."

const { calcularTotal } = require('../src/orderService');

test('Aplica desconto para valores acima de 100', () => {
  expect(calcularTotal(200)).toBe(180);
});

test('Não aplica desconto para valores abaixo de 100', () => {
  expect(calcularTotal(80)).toBe(80);
});
