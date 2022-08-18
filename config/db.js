const mysql = require('mysql')

let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: '6oct',
    })
}

connection.connect((error) => {
    if(error) throw error;
    console.log("Database Connected Successfully!!")
})

module.exports = connection