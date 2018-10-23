var expect = require('chai').expect;
var articleCtrl = require('../services/articlesService');
var loginCtrl = require('../services/LoginService');
var settingsCtrl = require('../services/SettingsService');
var userCtrl = require('../services/usersService');

describe('all controllers should exists', () => {
    it('exists', () => {
        expect(articleCtrl).to.exist;
        expect(loginCtrl).to.exist;
        expect(settingsCtrl).to.exist;
        expect(userCtrl).to.exist;

    })
});

