var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true, select: false },
    role: {
        type: String,
        required: true
    }
})

module.exports = userSchema;