# API-Bank

A API Bank é uma aplicação que simula operações bancárias básicas, permitindo que os usuários criem contas, realizem depósitos, saques, transferências, verifiquem saldos e obtenham extratos de suas transações. Esta API foi desenvolvida com o propósito de fornecer uma base para sistemas bancários mais complexos e também como um exemplo de aplicação com Node.js e Express.js.

## Funcionalidades

A API oferece as seguintes funcionalidades:

**Exibir Contas** (GET /contas): Retorna a lista de todas as contas cadastradas no sistema.

**Criar Conta** (POST /contas): Permite a criação de novas contas com informações de usuário, como nome, CPF, data de nascimento, telefone, email e senha.

**Atualizar Dados** do Usuário (PUT /contas/:numeroConta/usuario): Atualiza as informações do usuário associado a uma conta específica.

**Excluir Conta** (DELETE /contas/:numeroConta): Remove uma conta se o saldo for zero.

**Depositar** (POST /transacoes/depositar): Realiza um depósito em uma conta especificada.

**Saque** (POST /transacoes/sacar): Realiza um saque em uma conta especificada, verificando a senha e o saldo suficiente.

**Transferência** (POST /transacoes/transferir): Realiza uma transferência entre duas contas, verificando senha, saldo suficiente e que as contas sejam diferentes.

**Saldo** do Usuário (GET /contas/saldo): Verifica o saldo de uma conta, requerendo o número da conta e senha.

**Extrato** (GET /contas/extrato): Obtém o extrato de transações de uma conta, requerendo o número da conta e senha.

## Uso da API

Para usar a API Bank, você pode fazer requisições HTTP para as rotas especificadas acima usando um cliente HTTP, como o axios ou fetch em JavaScript. Certifique-se de que a API esteja rodando localmente ou em um servidor acessível.

### Exemplo de Requisição

img
img

_Lembre-se de que a API atualmente armazena os dados em memória, o que significa que os dados serão perdidos quando o servidor for desligado. Você pode considerar persistir esses dados em um banco de dados real ou em um arquivo JSON para manter as informações após o reinício do servidor._

## Requisitos

Certifique-se de ter Node.js instalado em sua máquina para executar esta aplicação.

## Instalação

1. Clone o repositório:  
    git clone https://github.com/seu-usuario/API-Bank.git 

2. Acesse o diretório do projeto:  
      cd cubos-bank-api

3. Instale as dependências:  
      npm install

4. Inicie o servidor:  
      npm rum dev  
   ou  
      yarn dev  

A API estará disponível em http://localhost:3000.

## Motivação

Este projeto foi desenvolvido como resultado de um desafio proposto pela **Cubos Academy**. A escolha de tecnologia e a implementação desta API são parte integrante da minha jornada de aprendizado e desenvolvimento. Fique à vontade para explorar e utilizar este projeto como uma base para suas próprias criações e aprendizado.

## Considerações Finais

Esta API é uma simulação simplificada e pode ser usada como ponto de partida para a criação de um sistema bancário mais completo. Lembre-se sempre da importância de manter a segurança das senhas e de implementar medidas adequadas de proteção em uma aplicação real.

## Contribuições

Se você está interessado em contribuir para este projeto, seja na melhoria do front end, alguma parte específica do back end ou qualquer outra área, você é mais que bem-vindo! A colaboração é fundamental para o crescimento e aprimoramento deste projeto.

Para contribuir, siga estas etapas:

1. **Fique à Vontade para Entrar em Contato**: Se você tem ideias ou gostaria de discutir como pode contribuir, sinta-se à vontade para entrar em contato comigo. Estou aberto a sugestões, discussões e ideias para o projeto.

2. **Faça uma Pull Request**: Se você já tem uma alteração pronta, envie uma pull request. Certifique-se de seguir as diretrizes de contribuição e fornecer informações claras sobre as alterações que você fez.

3. **Reporte Problemas**: Se você encontrar problemas ou bugs, crie uma issue no GitHub para que eles possam ser rastreados e resolvidos.

Lembre-se de que este projeto está em evolução, e todas as contribuições são valorizadas. Obrigado por considerar a colaboração!
