const express = require("express");
const senhaCentral = require("../intermediarios/senhaCentral");

const {
  exibirContas,
  criarConta,
  atualizarDadosUsuario,
  excluirConta,
  saldoDoUsuario,
  extrato,
} = require("../controladores/controladorDeContas");
const {
  depositar,
  saque,
  transferencia,
} = require("../controladores/controladorDeTransacoes");

const rota = express.Router();

rota.get("/contas", senhaCentral, exibirContas);
rota.post("/contas", criarConta);
rota.put("/contas/:numeroConta/usuario", atualizarDadosUsuario);
rota.delete("/contas/:numeroConta", excluirConta);

rota.post("/transacoes/depositar", depositar);
rota.post("/transacoes/sacar", saque);
rota.post("/transacoes/transferir", transferencia);

rota.get("/contas/saldo", saldoDoUsuario);
rota.get("/contas/extrato", extrato);

module.exports = rota;
