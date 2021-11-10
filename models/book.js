import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: String,
  read: Boolean,
})

const Book = mongoose.model("Book", bookSchema)

export { Book }