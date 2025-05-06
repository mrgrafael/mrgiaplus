const users = require('../users');

exports.getUsers = (req, res) => {
  res.json(users);
};