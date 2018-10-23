const express = require('express');
const loginController = express.Router();

const user_ctrl = require("../services/usersService");

const LoginService = require("../services/LoginService");
const loginService = new LoginService();

loginController.post('/api/user', loginService.login_save_user);
loginController.post('/api/session', loginService.login_session);
loginController.get('/api/users', user_ctrl.get_users);

module.exports = loginController;