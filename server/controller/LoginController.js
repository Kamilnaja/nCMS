const express = require('express');
const loginController = express.Router();

const user_ctrl = require("../services/usersService");

const LoginService = require("../services/LoginService");
const loginService = new LoginService();

loginController.post('/api/user', loginService.login_save_user.bind(loginService));
loginController.post('/api/session', loginService.login_session.bind(loginService));
loginController.get('/api/users', user_ctrl.get_users.bind(user_ctrl));

module.exports = loginController;