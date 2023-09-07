const { contas } = require("../bancodedados/bancodedados");

const verificaConta = (req, res, next) => {
  const { numeroConta } = req.params;
  const contaEncontrada = contas.find((conta) => conta.numero === numeroConta);

  if (!contaEncontrada) {
    return res.status(404).json("Conta não encontrada.");
  }

  req.contaEncontrada = contaEncontrada;
  next();
};

module.exports = verificaConta;
