const path = require('path')

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/home', (req,res, next) => {
    res.render('home', {
        title: 'Home'
    });
});

module.exports = router;