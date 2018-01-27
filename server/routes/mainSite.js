var express = require('express');
var router = express.Router();
var main_site_ctrl = require('../controllers/mainSiteControllers');

router.get('/site_title', main_site_ctrl.main_site_display_name);
// router.options('/site_title', main_site_ctrl.main_site_save_title);
router.put('/site_title', main_site_ctrl.main_site_save_title);

module.exports = router;