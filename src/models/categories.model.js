var conn = require('../../config/db')

var Category = function(category) {
    this.ar_name = category.ar_name,
    this.en_name = category.en_name,
    this.image = category.image
}

Category.getAllCategories = (result) => {
    conn.query("SELECT * FROM categories", (err, res) => {
        if(err){
            console.log("Error In Fetching Categories")
            result(null, err)
        } else{
            console.log("Categories Fetched Successfully !")
            result(null, res)
        }
    })
}

Category.getArCategories = (result) => {
    conn.query("SELECT id, ar_name, image FROM categories", (err, res) => {
        if(err){
            console.log("Error In Fetching Categories")
            result(null, err)
        } else{
            console.log("Categories Fetched Successfully !")
            result(null, res)
        }
    })
}

Category.getEnCategories = (result) => {
    conn.query("SELECT id, en_name, image FROM categories", (err, res) => {
        if(err){
            console.log("Error In Fetching Categories")
            result(null, err)
        } else{
            console.log("Categories Fetched Successfully !")
            result(null, res)
        }
    })
}

Category.getCategory = (categoryId, result) => {
    conn.query("SELECT * FROM categories WHERE id = ?", categoryId, (err, res) => {
        if(err){
            console.log("Error In Fetching CategorY")
            result(null, err)
        } else{
            console.log("Category Fetched Successfully !")
            result(null, res.pop())
        }
    })
}

Category.addCategory = (data, file, result) => {
    conn.query("INSERT INTO categories (ar_name, en_name, image) VALUES (?, ?, ?)", [data.ar_name, data.en_name, `http://127.0.0.1:3000/productsImages/${file ? file.originalname : 'default.jpg'}`], (err, res) => {
        if(err){
            console.log("Error In Adding CategorY")
            result(null, err)
        } else{
            console.log("Category Added Successfully !")
            result(null, res)
        }
    })
}

Category.updateCategory = (categoryId, data, file, result) => {
    conn.query("UPDATE categories SET ar_name = ?, en_name = ?, image = ? WHERE id = ?", [data.ar_name, data.en_name, `http://127.0.0.1:3001/productsImages/${file ? file.originalname : 'default.jpg'}`, +categoryId], (err, res) => {
        if(err){
            console.log("Error In Updating CategorY")
            result(null, err)
            console.log(err)
        } else{
            console.log("Category Updated Successfully !")
            result(null, res)
        }
    })
}

Category.deleteCategory = (categoryId, result) => {
    conn.query("DELETE FROM categories WHERE id = ?", categoryId, (err, res) => {
        if(err){
            console.log("Error In Deleting CategorY")
            result(null, err)
        } else{
            console.log("Category Deleted Successfully !")
            result(null, res)
        }
    })
}

module.exports = Category