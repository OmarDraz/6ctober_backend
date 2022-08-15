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

const mediaController = require('../controllers/media.controller')

router.post('/update_image', upload.single('image'), mediaController.modifyImage)
router.post('/update_video', upload.single('video'), mediaController.modifyVideo)

router.get('/', mediaController.getMedia)

module.exports = router
