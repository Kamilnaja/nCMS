var expect = require('chai').expect;
var articleCtrl = require('./../controllers/articlesController');
var loginCtrl = require('./../controllers/loginController');
var settingsCtrl = require('./../controllers/settingsController');
var userCtrl = require('./../controllers/usersController');

describe('all controllers should exists', () => {
    it('exists', () => {
        expect(articleCtrl).to.exist;
        expect(loginCtrl).to.exist;
        expect(settingsCtrl).to.exist;
        expect(userCtrl).to.exist;

    })
});

