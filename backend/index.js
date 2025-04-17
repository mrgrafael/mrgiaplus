const express = require('express');
const cors = require('cors');
const app = express();
const users = require('./users');

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { login, senha } = req.body;
  const user = users.find(u => u.login === login && u.senha === senha);
  if (user) {
    res.json({ success: true, role: user.role, user: user.login });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(3001, () => console.log('Servidor backend rodando na porta 3001'));