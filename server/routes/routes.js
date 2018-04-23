var express = require('express');
var router = express.Router();

var main_site_ctrl = require('../controllers/settingsController');
var articles_ctrl = require('../controllers/articlesController');
var login_ctrl = require('../controllers/loginController');
var user_ctrl = require("../controllers/usersController");

router.get('/api/posts', articles_ctrl.get_articles);
router.get('/api/posts/:id', articles_ctrl.get_one_article);

router.put('/api/posts/:id', articles_ctrl.update_article);

router.post('/api/posts', articles_ctrl.save_articles);

router.delete('/api/posts/:id', articles_ctrl.delete_article);
router.get('/api/settings', main_site_ctrl.main_site_get_settings);
router.put('/api/settings', main_site_ctrl.main_site_save_settings);

router.post('/api/user', login_ctrl.login_save_user);
router.post('/api/session', login_ctrl.login_session);
// todo - change this urls
router.get('/api/users', login_ctrl.login_users);
router.get('/api/allusers', user_ctrl.get_users);

module.exports = router;