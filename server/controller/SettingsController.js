var express = require('express');
var settingsController = express.Router();

const SettingsService = require("../services/SettingsService");
const settingsService = new SettingsService();

settingsController.get('/api/settings', settingsService.getMainSettings);
settingsController.put('/api/settings', settingsService.setMainSettings);

module.exports = settingsController;