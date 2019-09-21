const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookId: {
      type: String
    },
    title: {
      type: String
    },
    author: {
      type: String
    },
    description: {
      type: String,
    },
    link: {
      type: String
    },
    image: {
        type: String
    },
    price: {
      type: String
    }
  });

  var books = mongoose.model("book", bookSchema);

  module.exports = books;