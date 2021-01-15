const path = require('path');
const fs = require('fs');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/view-books', (req, res, next) => {
    
    fs.readFile('prove02/database.json', (err, data) => {
        var json = {books: [], title: 'View Books'};
        if (data != '') {
            json = JSON.parse(data);
            json.title = "View Books";
        }
        res.render('view-books', json);
    });

    
});

module.exports = router;