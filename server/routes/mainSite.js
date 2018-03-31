var express = require('express');
var router = express.Router();

var main_site_ctrl = require('../controllers/mainSiteControllers');
var articles_ctrl = require('../controllers/articlesController');

router.get('/api/posts', articles_ctrl.get_articles);
router.get('/api/posts/:id', articles_ctrl.get_one_article);

router.put('/api/posts/:id', articles_ctrl.update_article);

router.post('/api/posts', articles_ctrl.save_articles);

router.delete('/api/posts/:id', articles_ctrl.delete_article);
router.get('/api/settings', main_site_ctrl.main_site_get_settings);
router.put('/api/settings', main_site_ctrl.main_site_save_settings);

router.post('/user', main_site_ctrl.main_site_save_user);
router.post('/session', main_site_ctrl.main_site_session);
router.get('/user', main_site_ctrl.get_user);

module.exports = router;