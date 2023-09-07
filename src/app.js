const express = require("express");
const rota = require("./rotas/rotas");
const analisaCamposVazio = require("./intermediarios/CamposVazios");

const app = express();

app.use(express.json());
app.use(analisaCamposVazio);
app.use(rota);

module.exports = app;
