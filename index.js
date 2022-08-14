const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path') 
const cors = require('cors')
const http = require('http')
const { Server } = require("socket.io")
const port = process.env.PORT || 3001
var conn = require('./config/db')


const server = app.listen(port, () => {
    console.log('Server Listening')
}) 
const io = require('socket.io')(server);

//use express static folder
app.use(express.static('public'))

app.use(cors())
 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send("Hello")
})


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on('client', (data) => {
        console.log(data)
        socket.broadcast.emit('recieve_clients', data)
        conn.query("INSERT INTO statistics (name, day, phone, persons) VALUES (?, ?, ?, ?)", [data.name, today, data.phone, +data.persons], (err, res) => {
            if(err){
                console.log('Error While Adding', err)
            } else {
                console.log('Added Succuessfully !')
            }
        })
    })
})

const userRoutes = require('./src/routes/users.routes')
app.use('/api/users', userRoutes)

const categoryRoutes = require('./src/routes/categories.routes')
app.use('/api/categories', categoryRoutes)

const productRoutes = require('./src/routes/products.routes')
app.use('/api/products', productRoutes)

const statisticsRoutes = require('./src/routes/statistics.routes')
app.use('/api/statistics', statisticsRoutes)

