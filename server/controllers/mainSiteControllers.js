var mongoose = require('mongoose');
var SettingsSchema = require('../models/settings');
var SettingsModel = mongoose.model('Config', SettingsSchema);
var async = require('async');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var User = require('./../models/user');
var secretKey = 'supersecretkey';

let validateError = function () {
    return {
        if(err) { return (err) }
    }
}

exports.main_site_get_settings = (req, res) => {
    SettingsModel.find({})
        .exec((err, data) => {
            validateError();
            res.send(data);
        })
}

exports.main_site_save_settings = (req, res) => {
    SettingsModel.findOne({ title: { $ne: null } }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            data.title = req.body.title;
            data.subtitle = req.body.subtitle;
            data.footer = req.body.footer;
            data.save((err, data) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.status(200).send(data);
            })
        }
    })
}

exports.main_site_save_user = (req, res, next) => {
    var user = new User({ username: req.body.username })
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        user.password = hash;
        user.save((err, user) => {
            if (err) {
                throw next(err);
            }
            res.sendStatus(201);
        })
    })
}

exports.main_site_session = (req, res, next) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) { return next(err) }
        if (!user) { return res.send(401) }
        bcrypt.compare(req.body.password, user.password, (err, valid) => {
            if (err) { return next(err) }
            if (!valid) { return res.send(401) }
            var token = jwt.encode({
                username: user.username
            }, secretKey);
            res.json(token);
        })
    })
}

exports.get_user = (req, res) => {
    var token = req.headers['x-auth'];
    var auth = jwt.decode(token, secretKey);
    User.findOne({ username: auth.username }, (err, user) => {
        res.json(user);
    })
}