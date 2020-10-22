const express = require('express')

require('dotenv').config()
require('colors')

const server = express()

const PORT = (process.env.PORT = 3555)
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`.rainbow)
})
