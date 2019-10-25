const express = require('express')
let server = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const chartRoutes = require('./ChartRoute')

server.use(express.static('node_modules'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/TortugaPedasi', { useNewUrlParser: true})

const api = require('./routes')
const new_api = require('./routes/api')

// Set Api Routes
server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })

server.use('/', api)
server.use('/', new_api)
server.use('/', chartRoutes)

const PORT = 7777
server.listen(process.env.PORT || PORT, () => console.log(`Running on port ${PORT}`))
