var mongoose = require('mongoose');
var ArticlesSchema = require('../models/articles');
var ArticlesModel = mongoose.model('Post', ArticlesSchema);

let validateError = function () {
    return {
        if(err) { return (err) }
    }
}
/**
 * paginacja - daję mu numer, skąd zaczynamy (skip ) oraz 
 * ilość wyników - limit 
 * Chyba potrzebne jeszcze current 
 * pomijamy te, co są do current i wybierać query
 * current - na którym jesteśmy, czyli wyświetlamy od current do skip
 * 
 * 
 */
function returnArticles(req, res, query, current) {

    ArticlesModel.find({

    })
        .skip(current)
        .limit(parseInt(query))
        .sort({ dateOfAdding: -1 })
        .exec((err, data) => {
            validateError();
            res.send(data);
        })
}


exports.get_articles = (req, res) => {
    var query = parseInt(req.params.query, 10);
    var current = parseInt(req.params.current, 10);
    returnArticles(req, res, query, current);
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
    var payload = new ArticlesModel({
        title: req.body.title,
        subtitle: req.body.subtitle,
        author: req.body.author,
        content: req.body.content,
    });
    payload.save((err) => {
        if (err) return handleError(err);
        res.send('Zapisano wpis');
    })
}

exports.update_article = (req, res) => {
    var payload = {
        title: req.body.title,
        subtitle: req.body.subtitle,
        author: req.body.author,
        content: req.body.content
    }
    ArticlesModel.findByIdAndUpdate(req.params.id,
        payload, { new: true }, (err, data) => {
            if (err) {
                return handleError(err)
            } else {
                returnArticles(req, res);
            }
        })
}