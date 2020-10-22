const mongoose = require('mongoose')
require('colors')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`** MongoDB Connected: ${connect.connection.host}`.rainbow)
  } catch (error) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB
