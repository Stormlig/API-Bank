const {
  contas,
  depositos,
  saques,
  transferencias,
} = require("../bancodedados/bancodedados");
const { format } = require("date-fns");
const analisarValor = require("../utils/analisaCampoValor");
const localizar_Conta = require("../utils/localizarConta");
const {
  verificaSenha,
  verificaSaldoSuficiente,
  verificaTransferenciaMesmaConta,
} = require("../servicos/verificaSenha&Saldo");

const depositar = (req, res) => {
  const { numero_conta, valor } = req.body;

  try {
    analisarValor(valor);
    const dataHoraFormtada = format(new Date(), "dd-MM-yyyy  HH:mm:ss");

    const procurar = localizar_Conta(contas, numero_conta);
    const contaEncontrada = contas[procurar];

    depositos.push({
      numero_conta,
      valor,
      data: dataHoraFormtada,
    });

    contaEncontrada.saldo += valor;

    return res.status(200).json();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
};

const saque = (req, res) => {
  const { numero_conta, valor, senha } = req.body;

  try {
    const localizarConta = localizar_Conta(contas, numero_conta);
    const contaEncontrada = contas[localizarConta];

    verificaSenha(senha, contaEncontrada);
    verificaSaldoSuficiente(valor, contaEncontrada);

    const novoSaldo = contaEncontrada.saldo - valor;
    contaEncontrada.saldo = novoSaldo;

    const dataHoraFormtada = format(new Date(), "dd-MM-yyyy  HH:mm:ss");

    saques.push({
      data: dataHoraFormtada,
      numero_conta,
      valor,
    });

    return res.status(201).json();
  } catch (error) {
    res.status(404).json({ mensagem: error.message });
  }
};

const transferencia = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  try {
    const localizarContaOrigem = localizar_Conta(contas, numero_conta_origem);
    const localizarContaDestino = localizar_Conta(contas, numero_conta_destino);

    const contaOrigemEncontrada = contas[localizarContaOrigem];
    const contaDestinoEncontrada = contas[localizarContaDestino];

    verificaSenha(senha, contaOrigemEncontrada);
    verificaSaldoSuficiente(valor, contaOrigemEncontrada);
    verificaTransferenciaMesmaConta(numero_conta_origem, numero_conta_destino);

    const dataHoraFormtada = format(new Date(), "dd-MM-yyyy  HH:mm:ss");

    transferencias.push({
      dataHoraFormtada,
      numero_conta_destino,
      numero_conta_origem,
      valor,
    });

    contaDestinoEncontrada.saldo += valor;
    const atualizarSaldo = contaOrigemEncontrada.saldo - valor;
    contaOrigemEncontrada.saldo = atualizarSaldo;

    return res.status(200).json();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
};

module.exports = { depositar, saque, transferencia };
