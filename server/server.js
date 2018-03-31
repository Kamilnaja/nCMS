var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./db');
var mainSite = require('./routes/mainSite');
var accessControl = require('./accessControl');
var app = express();
var jwt = require('jwt-simple');
var port = 8080;
var _ = require('lodash');
var bcrypt = require('bcrypt');
//config 
app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('debug', true);

app.use('/', mainSite);

var users = [{ username: 'kamil', password: '$2a$10$Mqb7DT7FpsJTvAcB0HTRdeuZ4eXI71ex4U6gurmUU33s04ShRMQnq' }]
var secretKey = 'supersecretkey';

function findUserByUsername(username) {
    return _.find(users, { username: username })
}

function validateUser(user, password, cb) {
    bcrypt.compare(password, user.password, cb);
}

app.post('/session', (req, res) => {
    var user = findUserByUsername(req.body.username);
    var password = req.body.password;
    validateUser(user, password, (err, valid) => {
        if (err || !valid) {
            return res.sendStatus(401);
        }
        var token = jwt.encode({
            username: user.username
        }, secretKey);
        res.json(token);
    })
})

app.get('/user', (req, res) => {
    var token = req.headers['x-auth'];
    var user = jwt.decode(token, secretKey);
    res.json(user);
})

app.listen(port, () => console.log('listening on ' + port))