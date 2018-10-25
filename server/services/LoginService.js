const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const config = require('./../login/config');
const bcrypt = require('bcrypt');
const UserSchema = require('./../models/user');
const UserModel = mongoose.model("User", UserSchema);

module.exports = class LoginService {
    login_save_user(req, res, next) {
        const newUser = new UserModel({
            username: req.body.username,
            role: req.body.role
        });
        UserModel.findOne({ username: req.body.username }, (err, user) => {
            if (user === null) {
                saveUser(req, newUser, next, res);
            } else {
                res.send('notUniqueUserName')
            }
        })
    }

    login_session(req, res, next) {
        UserModel.findOne({
            username: req.body.username
        })
            .select('password')
            .select('username')
            .exec((err, user) => {
                if (err) {
                    return next(err)
                }
                if (!user) {
                    return res.sendStatus(401)
                }
                this.compare(req, user, next, res);
            })
    }

    compare(req, user, next, res) {
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
};


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