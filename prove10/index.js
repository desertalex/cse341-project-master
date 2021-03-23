const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'prove10');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes);

module.exports = app;