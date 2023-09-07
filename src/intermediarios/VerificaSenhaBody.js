const { contas } = require("../bancodedados/bancodedados");

const verificaSenhaCorretaBody = (req, res, next) => {
  const { senha, numero_conta } = req.query;

  const contaEncontrada = contas.find((conta) => {
    return conta.numero === numero_conta;
  });

  console.log(contaEncontrada);

  if (contaEncontrada.usuario.senha !== senha) {
    throw new Error("Senha incorreta!");
  }
  next();
};

module.exports = verificaSenhaCorretaBody;
