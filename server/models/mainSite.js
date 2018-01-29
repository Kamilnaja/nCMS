var mongoose = require('mongoose');
var mySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    }
})
module.exports = mySchema;