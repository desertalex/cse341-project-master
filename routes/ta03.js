//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const Products = require('../models/products');

router.get('/',(req, res, next) => {
    Products.fetchAll(products => {
        res.render('pages/ta03', {
            prods: products, 
            title: 'Team Activity 03', 
            path: '/ta03', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    });
    
});

module.exports = router;