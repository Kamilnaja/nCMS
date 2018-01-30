var mongoose = require('mongoose');
var settingsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    }
})
module.exports = settingsSchema;