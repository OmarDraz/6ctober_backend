const StatisticsModel = require('../models/statistics.model')

exports.getAll = (req, res) => {
    StatisticsModel.getAll((err, statistics) => {
        if(err)
        res.send(err)
        console.log('statistics', statistics);
        res.send(statistics)
    })
}

exports.getDayStatistics = (req, res) => {
    StatisticsModel.getDayStatistics((err, statistics) => {
        if(err)
        res.send(err)
        console.log('statistics', statistics);
        res.send(statistics)
    })
}

exports.removeOne = (req, res) => {
    StatisticsModel.removeOne(req.params.id, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json({status: true, message: "Deleted Successfully", id: product.insertId})
    })
}