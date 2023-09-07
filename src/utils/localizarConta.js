const localizar_Conta = (contas, numero_Conta) => {
  const index = contas.findIndex((conta) => conta.numero === numero_Conta);
  if (index === -1) {
    throw new Error("Conta não encontrada");
  }
  return index;
};

module.exports = localizar_Conta;
