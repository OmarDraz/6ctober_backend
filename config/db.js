const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '6oct',
})

connection.connect((error) => {
    if(error) throw error;
    console.log("Database Connected Successfully!!")
})

module.exports = connection