var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./db');
var routes = require('./routes/routes');
var accessControl = require('./accessControl');
var app = express();
var port = 8080;
var _ = require('lodash');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var User = require('./models/user');

app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('debug', true);

app.use('/', routes);

function findUserByUsername(username) {
    return _.find(users, { username: username })
}

function validateUser(user, password, cb) {
    bcrypt.compare(password, user.password, cb);
}

app.listen(port, () => console.log('listening on ' + port))