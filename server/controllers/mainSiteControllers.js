var mongoose = require('mongoose');
var MainSiteSchema = require('../models/mainSite');
// todo - change to config
var MainSiteModel = mongoose.model('Config', MainSiteSchema);

exports.main_site_display_name = (req, res) => {
    MainSiteModel.find({})
        .exec((err, data) => {
            if (err) { return (err) }
            res.send(data);
        })
}

exports.main_site_save_name = (req, res) => {
    return
}