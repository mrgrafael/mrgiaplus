const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const verifyToken = require('../auth/verifyToken');

router.get('/', verifyToken, getUsers);

module.exports = router;