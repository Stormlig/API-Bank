const verificaSenha = (senha, conta) => {
  if (conta.usuario.senha !== senha) {
    throw new Error("Senha incorreta!");
  }
};

const verificaSaldoSuficiente = (valor, conta) => {
  if (conta.saldo < valor) {
    throw new Error("Saldo insuficiente!");
  }
};

const verificaTransferenciaMesmaConta = (
  numeroContaOrigem,
  numeroContaDestino
) => {
  if (numeroContaOrigem === numeroContaDestino) {
    throw new Error("Não é possível transferir para a mesma conta!");
  }
};

module.exports = {
  verificaSenha,
  verificaSaldoSuficiente,
  verificaTransferenciaMesmaConta,
};
