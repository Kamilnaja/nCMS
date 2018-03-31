exports.login_save_user = (req, res, next) => {
    var user = new User({ username: req.body.username })
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        user.password = hash;
        user.save((err, user) => {
            if (err) {
                throw next(err);
            }
            res.sendStatus(201);
        })
    })
}

exports.login_session = (req, res, next) => {
    User.findOne({
        username: req.body.username
    })
        .select('password')
        .exec((err, user) => {
            if (err) { return next(err) }
            if (!user) { return res.sendStatus(401) }
            bcrypt.compare(req.body.password, user.password, (err, valid) => {
                if (err) { return next(err) }
                if (!valid) { return res.sendStatus(401) }
                var token = jwt.encode({
                    username: user.username
                }, secretKey);
                res.send(token);
            })
        })
}

exports.login_get_user = (req, res) => {
    var token = req.headers['x-auth'];
    var auth = jwt.decode(token, secretKey);
    User.findOne({ username: auth.username }, (err, user) => {
        res.json(user);
    })
}