const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// const authRoutes = require('./routes/auth')
const contactRoutes = require('./routes/contacts')

// server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/contactbook/contacts', contactRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server