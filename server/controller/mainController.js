var express = require('express');
var router = express.Router();

var main_site_ctrl = require('../services/SettingsService');
var login_ctrl = require('../services/loginService');
var user_ctrl = require("../services/usersService");
const ArticlesService = require("../services/ArticlesService");
const SettingsService = require("../services/SettingsService");

const articlesService = new ArticlesService();
const settingsService = new SettingsService();


router.get('/api/posts', articlesService.getArticles);
router.get('/api/posts/:id', articlesService.getOneById);
router.put('/api/posts/:id', articlesService.editArticle);
router.post('/api/posts', articlesService.createArticle);
router.delete('/api/posts/:id', articlesService.deleteById);

router.get('/api/settings', settingsService.getMainSettings);
router.put('/api/settings', settingsService.setMainSettings);

router.post('/api/user', login_ctrl.login_save_user);
router.post('/api/session', login_ctrl.login_session);

router.get('/api/users', user_ctrl.get_users);

module.exports = router;