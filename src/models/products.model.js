var conn = require('../../config/db')

var Product = function(product) {
    this.ar_name = product.ar_name,
    this.ar_description = product.ar_description,
    this.en_name = product.en_name,
    this.en_description = product.en_description,
    this.calories = product.calories,
    this.category = product.category,
    this.price = product.price,
    this.image = product.image
}

Product.getCatProducts = (categoryId, result) => {
    conn.query("SELECT * FROM products WHERE category = ? ",categoryId, (err, res) => {
        if(err){
            console.log("Error In Fetching Products")
            result(null, err)
        } else{
            console.log("Products Fetched Successfully !")
            result(null, res)
        }
    })
}

Product.getProducts = (productId, result) => {
    conn.query("SELECT * FROM products WHERE id = ? ",productId, (err, res) => {
        if(err){
            console.log("Error In Fetching Products")
            result(null, err)
        } else{
            console.log("Products Fetched Successfully !")
            result(null, res.pop())
        }
    })
}

Product.addProduct = (data, file, result) => {
    console.log(file)
    conn.query("INSERT INTO products (ar_name, ar_description, en_name, en_description, calories, category, price, image) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )", [data.ar_name, data.ar_description, data.en_name, data.en_description, data.calories, data.category, data.price, `${process.env.HOST}/productsImages/${file ? file.originalname : 'default.jpg'}`], (err, res) => {
        if(err){
            console.log('Error While Adding', err)
            result(null, err)
        } else {
            console.log('Added Succuessfully !')
            result(null, res)
        }
    })
}

Product.updateProduct = (productId, data, file, result) => {
    conn.query("UPDATE products SET ar_name = ?, ar_description= ?, en_name = ?, en_description = ?, calories = ?, category = ?, price = ?, image = ? WHERE id = ?", [data.ar_name, data.ar_description, data.en_name, data.en_description, data.calories, data.category, data.price, data.image ? data.image : `${process.env.HOST}/productsImages/${file ? file.originalname : 'default.jpg'}`, productId], (err, res) => {
        if(err){
            console.log('Error While Updating', err)
            result(null, err)
        } else {
            console.log('Updated Succuessfully !')
            result(null, res)
        }
    })
}

Product.deleteProduct = (productId, result) => {
    conn.query("DELETE FROM products WHERE id = ?", productId, (err, res) => {
        if(err){
            console.log('Error While Deleting', err)
            result(null, err)
        } else {
            console.log('Deleted Succuessfully !')
            result(null, res)
        }
    })
}

module.exports = Product