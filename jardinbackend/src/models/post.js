const { Schema, model } = require("mongoose")

const postSchema = new Schema({
  image: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  date: {type: Date, require: true}
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model("Schema", postSchema)