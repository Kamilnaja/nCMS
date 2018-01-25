var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var userFilePath = path.join(__dirname, 'postMockup.json');
var accessControl = require('./accessControl');
var mainSite = require('./routes/mainSite');
var db = require('./db');
var app = express();

//config 
app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello on main');
})

app.get('/all', (req, res) => {
    var allPosts = fs.createReadStream(userFilePath);
    res.send(allPosts);
})

app.use('/main', mainSite);

app.listen(3000, () => console.log('listening on 3000')
)