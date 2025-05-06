const jwt = require('jsonwebtoken');
const users = require('../users');

/**
 * Middleware de proteção de rotas.
 * Exige header Authorization: Bearer <token>
 */
const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    token = token.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const currentUser = users.find((u) => u.id === decoded.id);

      if (!currentUser) {
        return res.status(401).json({ message: 'Usuário não autorizado.' });
      }

      req.user = currentUser; // Anexa o usuário na request
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Token inválido.' });
    }
  } else {
    return res.status(401).json({ message: 'Token ausente.' });
  }
};

/**
 * Middleware de autorização baseado em papéis (roles).
 * Exemplo de uso: authorize('ADMINISTRADOR', 'OPERACIONAL')
 */
const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Acesso negado.' });
  }
  next();
};

module.exports = { protect, authorize };