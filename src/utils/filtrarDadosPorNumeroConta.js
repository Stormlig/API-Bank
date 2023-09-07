const filtrarDadosPorNumeroConta = (dados, numero_conta) => {
  return dados.filter((item) => item.numero_conta === numero_conta);
};

module.exports = filtrarDadosPorNumeroConta;
