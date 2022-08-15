const multer = require('multer')
const express = require('express');
const router = express.Router()
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/uploads');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });

var upload = multer({
    storage: storage,
});

const productController = require('../controllers/products.controller')

router.get('/category/:id', productController.getCatProducts)

router.get('/:id', productController.getProduct)

router.post('/add_product', upload.single('image'), productController.addProduct)

router.put('/update_product/:id', upload.single('image'), productController.updateProduct)

router.delete('/delete_product/:id', productController.deleteProduct)

module.exports = router
