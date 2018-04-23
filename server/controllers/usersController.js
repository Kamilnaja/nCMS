var mongoose = require('mongoose');
let UserSchema = require('../models/user');
var UserModel = mongoose.model('User', UserSchema);

exports.get_users = (req, res) => {
    UserModel.find({})
        .exec((err, data) => {
            res.send(data);
        })
}