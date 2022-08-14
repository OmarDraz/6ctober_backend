const ProductModel = require('../models/products.model')

exports.getCatProducts = (req, res) => {
    ProductModel.getCatProducts(req.params.id, (err, products) => {
        if(err)
        res.send(err)
        console.log('Products', products);
        res.send(products)
    })
}

exports.getProduct = (req, res) => {
    ProductModel.getProduct(req.params.id, (err, product) => {
        if(err)
        res.send(err)
        console.log('Product', product);
        res.send(product)
    })
}

exports.addProduct = (req, res) => {
    const productReqData = new ProductModel(req.body)
    ProductModel.addProduct(productReqData, req.file, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json({status: true, message: "تم اضافة المنتج بنجاح", id: product.insertId})
    })
}

exports.updateProduct = (req, res) => {
    const productReqData = new ProductModel(req.body)
    ProductModel.updateProduct(req.params.id, productReqData, req.file, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json({status: true, message: "Updated Successfully", id: product.insertId})
    })
}

exports.deleteProduct = (req, res) => {
    ProductModel.deleteProduct(req.params.id, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json({status: true, message: "Deleted Successfully", id: product.insertId})
    })
}