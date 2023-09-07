const { contas } = require("../bancodedados/bancodedados");
const encontrarContaPorNumero = (numeroConta) => {
  const contaEncontrada = contas.find((conta) => conta.numero === numeroConta);

  if (!contaEncontrada) {
    throw new Error("Conta não encontrada.");
  }

  return contaEncontrada;
};

module.exports = encontrarContaPorNumero;
