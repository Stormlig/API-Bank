const senhaCentral = (req, res, next) => {
  const { senha_banco } = req.query;

  if (!senha_banco) {
    return res.status(401).send("Não autorizado.");
  }
  if (senha_banco !== "Cubos123Bank") {
    return res.status(401).send("A senha do banco informada é inválida!");
  }

  next();
};

module.exports = senhaCentral;
