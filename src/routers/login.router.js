const express = require("express");

const route = express.Router();

const { singin,p_login } = require('../controllers/login.controller')

route.get('/login',singin);
route.post('/login',p_login);
module.exports = route; 