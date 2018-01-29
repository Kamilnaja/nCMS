var mongoose = require('mongoose');
var MainSiteSchema = require('../models/mainSite');
// todo - change to config
var MainSiteModel = mongoose.model('Config', MainSiteSchema);

exports.main_site_get_settings = (req, res) => {
    MainSiteModel.find({})
        .exec((err, data) => {
            if (err) { return (err) }
            res.send(data);
        })
}
exports.main_site_save_settings = (req, res) => {
    MainSiteModel.findOne({ title: { $ne: null } }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            data.title = req.body.title;
            data.subtitle = req.body.subtitle;
            data.save((err, data) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.status(200).send(data);
            })
        }
    })
}