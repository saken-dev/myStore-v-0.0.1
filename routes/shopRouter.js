const express = require('express')

const productsConroller = require('../controllers/productAdd')

const router = express.Router()

router.get('/add-product', productsConroller.getAddProduct)

router.post('/add-product', productsConroller.postAddProduct)

module.exports = router