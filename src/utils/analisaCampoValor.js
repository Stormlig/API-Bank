const analisarValor = (valor) => {
  if (typeof valor === "string") {
    throw new Error("Por favor, digite um valor válido!");
  }

  if (valor <= 0) {
    throw new Error("O valor depositado não pode ser zero ou negativo!");
  }
};

module.exports = analisarValor;
