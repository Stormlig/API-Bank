const filtrarDadosPorNumeroConta = require("../utils/filtrarDadosPorNumeroConta");
const encontrarContaPorNumero = require("./encontrarContas");
const {
  depositos,
  transferencias,
  saques,
} = require("../bancodedados/bancodedados");

const extratoDados = (numero_conta, senha) => {
  const contaEncontrada = encontrarContaPorNumero(numero_conta);

  if (!contaEncontrada) {
    throw new Error("Conta não encontrada!");
  }

  if (contaEncontrada.usuario.senha !== senha) {
    throw new Error("Senha incorreta!");
  }

  return {
    depositos: filtrarDadosPorNumeroConta(depositos, numero_conta),
    transferenciasEnviadas: transferencias.filter(
      (transferencia) => transferencia.numero_conta_origem === numero_conta
    ),
    transferenciasRecebidas: transferencias.filter(
      (transferencia) => transferencia.numero_conta_destino === numero_conta
    ),
    saques: filtrarDadosPorNumeroConta(saques, numero_conta),
  };
};

module.exports = extratoDados;
