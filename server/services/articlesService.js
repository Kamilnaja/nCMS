const mongoose = require('mongoose');
const ArticlesSchema = require('../models/articles');
const ArticlesModel = mongoose.model('Post', ArticlesSchema);

module.exports = class articlesService {

    getArticles(req, res) {
        ArticlesModel
            .find({})
            .sort({dateOfAdding: -1})
            .exec((err, data) => {
                if (err) {
                    throw (err)
                }
                res.send(data);
            })
    }

    getOneById(req, res) {
        ArticlesModel.findById(req.params.id, (err, article) => {
            if (err) {
                res.send(err)
            }
            res.json(article);
        })
    }

    deleteById(req, res) {
        ArticlesModel
            .findByIdAndRemove(req.params.id, (err) => {
                if (err) {
                    res.send(err);
                }
            })
            .then(ArticlesModel.find({})
                .exec((err, data) => {
                    if (err) {
                        return (err)
                    }
                    res.send(data);
                })
            )
    }

    createArticle(req, res) {
        const payload = new ArticlesModel({
            title: req.body.title,
            subtitle: req.body.subtitle,
            author: req.body.author,
            content: req.body.content,
        });
        payload.save((err) => {
            if (err) {
                throw err;
            }
            res.send('Zapisano wpis');
        })
    }

    editArticle(req, res) {
        const payload = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            author: req.body.author,
            content: req.body.content
        };
        ArticlesModel
            .findByIdAndUpdate(req.params.id,
                payload, {new: true}, (err, data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        returnArticles(req, res);
                    }
                })
    }
};