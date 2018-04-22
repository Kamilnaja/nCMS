var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var User = require('./../models/user');
var config = require('./../login/config');

exports.login_save_user = (req, res, next) => {
    var newUser = new User({ username: req.body.username })
    User.findOne({ username: req.body.username }, (err, user) => {
        if (user === null) {
            saveUser(req, newUser, next, res);
        } else {
            res.send('notUniqueUserName')
        }
    })
}

exports.login_session = (req, res, next) => {
    User.findOne({
        username: req.body.username
    })
        .select('password')
        .select('username')
        .exec((err, user) => {
            if (err) { return next(err) }
            if (!user) { return res.sendStatus(401) }
            evaluateUser(req, user, next, res);
        })
}

exports.login_users = (req, res, next) => {
    if (!req.headers['x-auth']) {
        return res.sendStatus(401);
    }
    setToken(req);
}

function setToken(req) {
    var token = req.headers['x-auth'];
    var auth = jwt.decode(token, config.secretKey);
}

function evaluateUser(req, user, next, res) {
    bcrypt.compare(req.body.password, user.password, (err, valid) => {
        if (err) {
            return next(err);
        }
        if (!valid) {
            return res.sendStatus(401);
        }
        var token = jwt.encode({
            username: user.username
        }, config.secretKey);
        res.send(token);
    });
}

function saveUser(req, newUser, next, res) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        newUser.password = hash;
        newUser.save((err) => {
            if (err) {
                throw next(err);
            }
            res.sendStatus(201);
        });
    });
}
