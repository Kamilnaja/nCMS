var mongoose = require('mongoose');
var SettingsSchema = require('../models/settings');
var SettingsModel = mongoose.model('Config', SettingsSchema);
var async = require('async');

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