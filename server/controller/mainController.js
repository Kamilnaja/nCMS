var express = require('express');
var router = express.Router();

var main_site_ctrl = require('../services/settingsService');
var login_ctrl = require('../services/loginService');
var user_ctrl = require("../services/usersService");
const ArticlesService = require("../services/ArticlesService");

const articlesService = new ArticlesService();

router.get('/api/posts', articlesService.getArticles);
router.get('/api/posts/:id', articlesService.getOneById);
router.put('/api/posts/:id', articlesService.editArticle);
router.post('/api/posts', articlesService.createArticle);
router.delete('/api/posts/:id', articlesService.deleteById);

router.get('/api/settings', main_site_ctrl.main_site_get_settings);
router.put('/api/settings', main_site_ctrl.main_site_save_settings);

router.post('/api/user', login_ctrl.login_save_user);
router.post('/api/session', login_ctrl.login_session);

router.get('/api/users', user_ctrl.get_users);

module.exports = router;