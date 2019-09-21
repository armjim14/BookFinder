const express = require("express");
const mongoose = require("mongoose")

const app = express();
var db = require("./models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/books";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/saved/books", (req, res) => {
    db.books.find({}, (err, data) => {
        if(err) { return console.log(err)}
        res.json(data)
    })
})

app.post("/save/book", (req, res) => {
    const {bookId, title, author, description, link, image, price} = req.body;
    db.books.create({bookId, title, author, description, link, image, price}, (err, data) => {
        if(err) { return console.log(err)}
        res.json(data)
    })
})

app.delete("/delete/:id", (req, res) => {
    console.log(req.params.id)
    db.books.findByIdAndRemove(req.params.id, (err, data) => {
        res.json(data)
    })
})

var PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Listening...")
})