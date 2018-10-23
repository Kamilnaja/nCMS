const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db');
const accessControl = require('./accessControl');
const app = express();
const port = 8080;
const articlesController = require('./controller/ArticlesController');
const settingsController = require('./controller/SettingsController');
const loginController = require('./controller/LoginController');

app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', articlesController);
app.use('/', settingsController);
app.use('/', loginController);

app.listen(port, () => console.log('listening on ' + port));