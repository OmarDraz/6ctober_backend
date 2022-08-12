const express = require('express');
const router = express.Router()

const statisticsController =  require('../controllers/statistics.controller')

router.get('/', statisticsController.getAll)

router.get('/day', statisticsController.getDayStatistics)

router.delete('/:id', statisticsController.removeOne)

module.exports = router
