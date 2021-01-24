const path = require('path');
const fs = require('fs');

const Product = require('../models/product');

exports.getHome =  (req,res, next) => {
    Product.fetchAll(products => {
        res.render('home', {
            prods: products,
            title: 'Shop Home'
        });
    })
};

// add-product
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        title: 'Add Product'
    });
};

// /add-product
exports.postAddProduct = (req, res, next) => {
    console.log('Featured:', req.body.featured);
    if (req.body.product_title != '') {
        const product_title = req.body.product_title;
        const product_description = req.body.product_description;
        const product_price = req.body.product_price;
        const featured = req.body.featured;
        const product = new Product(null, product_title, product_description, product_price, featured);
        product.save();
    }
    res.redirect('/prove03/add-product');
};

exports.getViewProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('view-products', {
            prods: products,
            title: 'View Products'
        });
    })
};

exports.getViewProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
      res.render('product-detail', {
        product: product,
        title: product.title + ' Details',
      });
    });
  };

exports.postDeleteProducts =  (req, res, next) => {
    fs.writeFile('prove03/data/products.json', '[]', (err) => {
        if (err) {
            console.error(err);
            throw err;
        }
    });
    res.redirect('/prove03/view-products');
};