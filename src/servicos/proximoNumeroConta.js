const { contas } = require("../bancodedados/bancodedados");

const proximoNumeroConta = () => {
  if (contas.length === 0) {
    return "1";
  }

  const numerosDeContas = contas.map((conta) => parseInt(conta.numero));
  const maxNumeroConta = Math.max(...numerosDeContas);
  return (maxNumeroConta + 1).toString();
};

module.exports = proximoNumeroConta;
