var mongoose = require('mongoose');
var articlesSchema = mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
})
module.exports = articlesSchema;