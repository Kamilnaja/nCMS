var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./db');
var mainSite = require('./routes/mainSite');
var accessControl = require('./accessControl');
var app = express();
var port = 8080;
//config 
app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.set('debug', true);

app.use('/', mainSite);

var _ = require('lodash');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var User = require('./models/user');
var users = [{ username: 'kamil', password: '$2a$10$Mqb7DT7FpsJTvAcB0HTRdeuZ4eXI71ex4U6gurmUU33s04ShRMQnq' }]

function findUserByUsername(username) {
    return _.find(users, { username: username })
}

function validateUser(user, password, cb) {
    bcrypt.compare(password, user.password, cb);
}

app.listen(port, () => console.log('listening on ' + port))