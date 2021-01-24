const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/home', shopController.getHome);
router.get('/add-product', shopController.getAddProduct);
router.post('/add-product', shopController.postAddProduct);
router.get('/view-products', shopController.getViewProducts);
router.get('/view-products/:productId', shopController.getViewProduct);
router.post('/delete-products', shopController.postDeleteProducts);

module.exports = router;