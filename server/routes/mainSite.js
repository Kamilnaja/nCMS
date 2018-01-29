var express = require('express');
var router = express.Router();
var main_site_ctrl = require('../controllers/mainSiteControllers');

router.get('/api/settings', main_site_ctrl.main_site_get_settings);
router.put('/api/settings', main_site_ctrl.main_site_save_settings)
module.exports = router;