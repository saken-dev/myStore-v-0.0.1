const Product = require('../models/productModel')

exports.getAddProduct = (req,res,next) => {
    res.render('add-product.ejs')
}

exports.postAddProduct = (req,res) =>{
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProduct = (req, res) => {
    Product.fetchAll((products) => {
        res.render("main.ejs", {
            prods: products,
        })
    })
}