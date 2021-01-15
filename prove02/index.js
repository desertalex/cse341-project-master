const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const addBookRoutes = require('./routes/add-book');
const viewBooksRoutes = require('./routes/view-books');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'prove02/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(addBookRoutes);
app.use(homeRoutes);
app.use(viewBooksRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: "Page Not Found"
    });
});

module.exports = app;