var conn = require('../../config/db')

var Media = function(media) {
    this.image = media.image,
    this.video = media.video
}

Media.getMedia = (result) => {
    conn.query("SELECT * FROM media", (err, res) => {
        if(err){
            console.log("Error In Fetching Categories")
            result(null, err)
        } else{
            console.log("Categories Fetched Successfully !")
            result(null, res.pop())
        }
    })
}

Media.modifyImage = (data, file, result) => {
    conn.query("UPDATE media SET image = ? WHERE id = 1", [`${process.env.HOST}/uploads/${file ? file.originalname : 'default.jpg'}` ], (err, res) => {
        if(err){
            console.log('Error While Adding', err)
            result(null, err)
        } else {
            console.log('Added Succuessfully !')
            result(null, res)
        }
    })
}

Media.modifyVideo = (data, file, result) => {
    console.log(file)
    conn.query("UPDATE media SET video = ? WHERE id = 1", [`${process.env.HOST}/uploads/${file ? file.originalname : 'default.mp4'}` ], (err, res) => {
        if(err){
            console.log('Error While Adding', err)
            result(null, err)
        } else {
            console.log('Added Succuessfully !')
            result(null, res)
        }
    })
}

module.exports = Media;