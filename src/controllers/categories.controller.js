const CategoryModel = require('../models/categories.model')

exports.getAllCategories = (req, res) => {
    CategoryModel.getAllCategories((err, categories) => {
        if(err)
        res.send(err)
        console.log('Categories', categories);
        res.send(categories)
    })
}

exports.getArCategories = (req, res) => {
    CategoryModel.getArCategories((err, categories) => {
        if(err)
        res.send(err)
        console.log('Categories', categories);
        res.send(categories)
    })
}

exports.getEnCategories = (req, res) => {
    CategoryModel.getEnCategories((err, categories) => {
        if(err)
        res.send(err)
        console.log('Categories', categories);
        res.send(categories)
    })
}

exports.getCategory = (req, res) => {
    CategoryModel.getCategory(req.params.id, (err, category) => {
        if(err){
            res.send(err)
        } else {
            res.send({status: true, message: "Category Fetched Successfully", data: category})
        }
    })
}


exports.addCategory = (req, res) => {
    var categoryReqData = new CategoryModel(req.body)
    CategoryModel.addCategory(categoryReqData, req.file, (err, category) => {
        if(err){
            res.send(err)
        } else {
            res.send({status: true, message: "Category Added Successfully", data: category})
        }
    })
}

exports.updateCategory = (req, res) => {
    var categoryReqData = new CategoryModel(req.body)
    CategoryModel.updateCategory(req.params.id, categoryReqData, req.file, (err, category) => {
        if(err){
            res.send(err)
        } else {
            res.send({status: true, message: "Category Updated Successfully", data: category})
        }
    })
}

exports.deleteCategory = (req, res) => {
    CategoryModel.deleteCategory(req.params.id, (err, category) => {
        if(err){
            res.send(err)
        } else {
            res.send({status: true, message: "Category Updated Successfully", data: category})
        }
    })
}