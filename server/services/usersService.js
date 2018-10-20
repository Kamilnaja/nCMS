const mongoose = require('mongoose');
const UserSchema = require('../models/user');
const UserModel = mongoose.model('User', UserSchema);

exports.get_users = (req, res) => {
    UserModel.find({})
        .exec((err, data) => {
            res.send(data);
        })
}