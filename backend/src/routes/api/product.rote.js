const express = require('express');
const { productController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const router = express();

router
    .get('/',productController.getProducts)
    // .get('/search',productController.searchProduct)
    .get('/:productId',auth(),productController.getProduct)
    .post('/add',auth('MANAGE_ALL_PRODUCTS'),productController.addProuct)
    .post('/update/:productId',auth('MANAGE_ALL_PRODUCTS'),productController.updateProduct)
    .post('/delete/:productId',auth('MANAGE_ALL_PRODUCTS'),productController.removeProduct)
module.exports = router;