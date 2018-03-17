var mongoose = require('mongoose');
var ArticlesSchema = require('../models/articles');
var ArticlesModel = mongoose.model('Post', ArticlesSchema);

let validateError = function () {
    return {
        if(err) { return (err) }
    }
}

exports.get_articles = (req, res) => {
    ArticlesModel.find({})
        .exec((err, data) => {
            validateError();
            res.send(data);
        })
}

exports.get_one_article = (req, res, next) => {
    ArticlesModel.findById(req.params.id, (err, article) => {
        if (err) { res.send(err) };
        res.json(article);
    })
}

exports.delete_article = (req, res) => {
    ArticlesModel.findByIdAndRemove(req.params.id, (err, article) => {
        validateError();
    }).then(
        ArticlesModel.find({})
            .exec((err, data) => {
                validateError();
                res.send(data);
            })
    )
}

exports.save_articles = (req, res) => {
    console.log(req.body);
    var article = new ArticlesModel(
        {
            title: req.body.title,
            subtitle: req.body.subtitle,
            author: req.body.author,
            content: req.body.content
        });
    article.save((err) => {
        if (err) return handleError(err);
        res.send('Zapisano wpis');
    })
}