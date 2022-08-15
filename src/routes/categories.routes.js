const express = require('express');
const router = express.Router()
const multer = require('multer')

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

const categoryController = require('../controllers/categories.controller')

router.get('/', categoryController.getAllCategories)

router.get('/ar', categoryController.getArCategories)

router.get('/en', categoryController.getEnCategories)

router.get('/:id', categoryController.getCategory)

router.post('/add_category', upload.single('image'), categoryController.addCategory)

router.put('/update_category/:id', upload.single('image'), categoryController.updateCategory)

router.delete('/delete_category/:id', categoryController.deleteCategory)

module.exports = router