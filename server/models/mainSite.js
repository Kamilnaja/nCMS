var mongoose = require('mongoose');
var mySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})
module.exports = mySchema;