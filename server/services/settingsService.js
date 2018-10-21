const mongoose = require('mongoose');
const SettingsSchema = require('../models/settings');
const SettingsModel = mongoose.model('Config', SettingsSchema);
const async = require('async');

let validateError = function () {
    return {
        if(err) { return (err) }
    }
};

exports.main_site_get_settings = (req, res) => {
    SettingsModel.find({})
        .exec((err, data) => {
            validateError();
            res.send(data);
        })
};

exports.main_site_save_settings = (req, res) => {
    SettingsModel.findOne({ title: { $ne: null } }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            setSiteData(data, req, res);
        }
    })
};

function setSiteData(data, req, res) {
    data.title = req.body.title;
    data.subtitle = req.body.subtitle;
    data.footer = req.body.footer;
    data.save((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    });
}
