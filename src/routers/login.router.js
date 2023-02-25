const express = require("express");

const route = express.Router();

const { singin } = require('../controllers/login.controller')

route.get('/login',singin);
module.exports = route; 