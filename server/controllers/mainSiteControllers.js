var mongoose = require('mongoose');
var SettingsSchema = require('../models/settings');
var ArticlesSchema = require('../models/articles');
var SettingsModel = mongoose.model('Config', SettingsSchema);
var ArticlesModel = mongoose.model('Post', ArticlesSchema);

exports.get_articles = (req, res) => {
    ArticlesModel.find({})
        .exec((err, data) => {
            if (err) { return (err) }
            res.send(data);
        })
}

exports.save_articles = (req, res) => {
    var article = new ArticlesModel({ title: 'lorem' });
    article.save((err) => {
        if (err) return handleError(err);
        console.log('item saved');
        res.send('zapisano wpis');
    })
}

exports.main_site_get_settings = (req, res) => {
    SettingsModel.find({})
        .exec((err, data) => {
            if (err) { return (err) }
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