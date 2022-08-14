var conn = require('../../config/db')

var Statistics = function(statistic){
    this.name = statistic.name,
    this.day = statistic.day,
    this.phone = statistic.phone
}

Statistics.getAll = (result) => {
    conn.query("select day, SUM(persons) AS da group by day", (err, res) => {
        if(err){
            console.log("Error In Fetching statistics")
            result(null, err)
        } else{
            console.log("statistics Fetched Successfully !")
            result(null, res)
        }
    })
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

Statistics.getDayStatistics = (result) => {
    conn.query("SELECT * FROM statistics WHERE day = ?", today, (err, res) => {
        if(err){
            console.log("Error In Fetching statistics")
            result(null, err)
        } else{
            console.log("statistics Fetched Successfully !")
            result(null, res)
        }
    })
}

Statistics.removeOne = (id, result) => {
    conn.query("DELETE FROM statistics WHERE id = ?", id, (err, res) => {
        if(err){
            console.log("Error In Fetching statistics")
            result(null, err)
        } else{
            console.log("statistics Fetched Successfully !")
            result(null, res)
        }
    })
}



module.exports = Statistics