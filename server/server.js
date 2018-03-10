var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./db');
var mainSite = require('./routes/mainSite');
var accessControl = require('./accessControl');
var app = express();
var port = 8080;
//config 
app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('debug', true);

app.use('/', mainSite);

app.listen(port, () => console.log('listening on ' + port))