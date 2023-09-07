const { contas } = require("../bancodedados/bancodedados");
const dadosRepetidos = require("../utils/dadosRepetidos");
const localizar_Conta = require("../utils/localizarConta");
const { verificaSenha } = require("../servicos/verificaSenha&Saldo");
const extratoDados = require("../servicos/ExtratoDados");
const encontrarContaPorNumero = require("../servicos/encontrarContas");
const proximoNumeroConta = require("../servicos/proximoNumeroConta");

const exibirContas = (req, res) => {
  res.status(200).json(contas);
};

const criarConta = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  try {
    dadosRepetidos(cpf, email);

    const novoNumeroConta = proximoNumeroConta();

    const novaConta = {
      numero: novoNumeroConta,
      saldo: 0,
      usuario: {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha,
      },
    };

    contas.push(novaConta);
    return res.status(201).json();
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const atualizarDadosUsuario = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  const { numeroConta } = req.params;

  try {
    dadosRepetidos(cpf, email);

    const contaEncontrada = encontrarContaPorNumero(numeroConta);

    const usuario = contaEncontrada.usuario;
    usuario.nome = nome;
    usuario.cpf = cpf;
    usuario.data_nascimento = data_nascimento;
    usuario.telefone = telefone;
    usuario.email = email;
    usuario.senha = senha;

    return res.status(200).json({ mensagem: "Conta atualizada com sucesso!" });
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const excluirConta = (req, res) => {
  const { numeroConta } = req.params;

  try {
    const indexContaEncontrada = localizar_Conta(contas, numeroConta);
    const contaEncontrada = contas[indexContaEncontrada];

    if (contaEncontrada.saldo !== 0) {
      return res.status(400).json({
        mensagem: "A conta não pode ser excluída porque o saldo não é zero.",
      });
    }

    contas.splice(indexContaEncontrada, 1);
    return res.status(200).json();
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const saldoDoUsuario = (req, res) => {
  const { numero_conta, senha } = req.query;

  try {
    const localizarConta = localizar_Conta(contas, numero_conta);
    const contaEncontrada = contas[localizarConta];

    verificaSenha(senha, contaEncontrada);

    const exibirSaldo = contaEncontrada.saldo;

    return res.status(201).json(exibirSaldo);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
};

const extrato = (req, res) => {
  const { numero_conta, senha } = req.query;

  try {
    const extratoData = extratoDados(numero_conta, senha);

    return res.status(200).json(extratoData);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
};

module.exports = {
  exibirContas,
  criarConta,
  atualizarDadosUsuario,
  excluirConta,
  saldoDoUsuario,
  extrato,
};
