const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    url: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', PostSchema)
