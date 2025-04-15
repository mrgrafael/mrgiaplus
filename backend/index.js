const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const users = [
  { login: "adm", senha: "9591**", role: "ADMINISTRADOR" },
  { login: "operacional", senha: "operacional123", role: "OPERACIONAL" },
  { login: "financeiro", senha: "financeiro123", role: "FINANCEIRO" },
  { login: "consultora", senha: "consultora123", role: "CONSULTORA" },
];

app.post("/api/login", (req, res) => {
  const { usuario, senha } = req.body;
  const user = users.find((u) => u.login === usuario && u.senha === senha);
  if (user) {
    return res.json({
      success: true,
      login: user.login,
      role: user.role,
      token: "fake-jwt-token"
    });
  } else {
    return res.status(401).json({ success: false, message: "Credenciais inválidas" });
  }
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend funcionando!" });
});

app.listen(port, () => {
  console.log(`MRG IA Plus backend rodando na porta ${port}`);
});
