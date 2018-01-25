var express = require('express');
var router = express.Router();
var main_site_ctrl = require('../controllers/mainSiteControllers');

router.get('/site_title', main_site_ctrl.main_site_display_name);

router.post('/site_title', main_site_ctrl.main_site_save_name);

module.exports = router;