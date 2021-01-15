const path = require('path');
const fs = require('fs');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');
const { title } = require('process');

router.get('/add-book', (req, res, next) => {
    res.render('add-book', {
        title: 'Add Book'
    });
});

router.post('/add-book', (req, res, next) => {
    var json = '';
    fs.readFile('prove02/database.json', (err, data) => {
        if (data.length == 0) {
            json = {
                "books": [
                    {
                        "book_title": req.body.book_title,
                        "book_description": req.body.book_description
                    }
                ]
            }
        } else {
            json = JSON.parse(data);
            json.books.push({
                "book_title": req.body.book_title,
                "book_description": req.body.book_description
            });
        }
        fs.writeFile('prove02/database.json', JSON.stringify(json), (err) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });
    })
    res.redirect('/prove02/add-book');
})

module.exports = router;