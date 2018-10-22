const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./db');
const controller = require("./controller/mainController");
const accessControl = require('./accessControl');
const app = express();
const port = 8080;
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const User = require('./models/user');

app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('debug', true);

app.use('/', controller);

function findUserByUsername(username) {
    return _.find(users, { username: username })
}

function validateUser(user, password, cb) {
    bcrypt.compare(password, user.password, cb);
}

app.listen(port, () => console.log('listening on ' + port))