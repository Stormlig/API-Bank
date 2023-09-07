const { contas } = require("../bancodedados/bancodedados");

const dadosRepetidos = (cpf, email) => {
  const DadosRepetidos = contas.find((item) => {
    return item.usuario.cpf === cpf || item.usuario.email === email;
  });

  if (DadosRepetidos) {
    throw new Error("Já existe uma conta com o CPF ou email informado!");
  }

  return false;
};

module.exports = dadosRepetidos;
