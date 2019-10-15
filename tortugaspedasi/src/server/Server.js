const express = require('express')
let server = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/TortugaPedasi', { useNewUrlParser: true})

const api = require('./routes')

// Set Api Routes
server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })

server.use('/', api)

const PORT = 7777
app.listen(process.env.PORT || PORT, () => console.log(`Running on port ${PORT}`))
