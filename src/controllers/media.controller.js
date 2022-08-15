const MediaModel = require('../models/media.model')

exports.getMedia = (req, res) => {
    MediaModel.getMedia((err, media) => {
        if(err)
        res.send(err)
        console.log('Media', media);
        res.send(media)
    })
}

exports.modifyImage = (req, res) => {
    const productReqData = new MediaModel(req.body)
    MediaModel.modifyImage(productReqData, req.file, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json({status: true, message: "تم اضافة المنتج بنجاح", id: product.insertId})
    })
}

exports.modifyVideo = (req, res) => {
    const productReqData = new MediaModel(req.body)
    MediaModel.modifyVideo(productReqData, req.file, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json({status: true, message: "تم اضافة المنتج بنجاح", id: product.insertId})
    })
}

