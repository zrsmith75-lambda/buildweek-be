const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const connectDB = require('./utils/db.js')
const PostRouter = require('./routes/posts.js')

require('dotenv').config()
require('colors')

connectDB()

const server = express()
server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))

server.use('/api/posts', PostRouter)

const PORT = process.env.PORT || 3555
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`.rainbow)
})
