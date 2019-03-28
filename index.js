const express = require('express')
const helmet = require('helmet')
const server = express()

server.use(helmet())
server.use(express.json())

const URL = 4000

server.get('/', (req, res) => {
    res.status(200).json('hello')
})

server.listen(URL, () => {
    console.log(`i hear you on port ${URL}`)
})