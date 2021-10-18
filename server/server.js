const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const fruitRoutes = require('./routes/fruit')

server.use('/api/v1/fruit', fruitRoutes)

module.exports = server
