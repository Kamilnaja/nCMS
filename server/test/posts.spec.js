var expect = require('chai').expect;
var articleCtrl = require('../services/articlesController');
var loginCtrl = require('../services/loginController');
var settingsCtrl = require('../services/settingsController');
var userCtrl = require('../services/usersController');

describe('all controllers should exists', () => {
    it('exists', () => {
        expect(articleCtrl).to.exist;
        expect(loginCtrl).to.exist;
        expect(settingsCtrl).to.exist;
        expect(userCtrl).to.exist;

    })
});

