const mongoose = require('mongoose');
const SettingsSchema = require('../models/settings');
const SettingsModel = mongoose.model('Config', SettingsSchema);
const async = require('async');

let validateError = function () {
    return {
        if(err) {
            return (err)
        }
    }
};

module.exports = class SettingsService {
    getMainSettings(req, res) {
        SettingsModel.find({})
            .exec((err, data) => {
                validateError();
                res.send(data);
            });
    };

    setMainSettings(req, res){
        SettingsModel.findOne({title: {$ne: null}}, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                setSiteData(data, req, res);
            }
        })
    };
};