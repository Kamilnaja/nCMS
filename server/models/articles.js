var mongoose = require('mongoose');

var articlesSchema = mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    content: {
        type: String
    },
    subtitle: {
        type: String
    },
    dateOfAdding: {
        type: Date
    }
},
    {
        timestamps: true
    }
)

module.exports = articlesSchema;