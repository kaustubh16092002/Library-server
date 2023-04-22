const express = require('express')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const app = express()
const Book=require('./books/Book.js')
app.use(bodyParser.json())

mongoose.connect('mongodb://0.0.0.0:27017/librarian').then(() => {
    console.log("connected")
})

// app.get('/',function(req,res){
//     res.send("welcome to librarian")
// })

app.get('/',async (req, res) => {
    let list= await Book.find()
    res.send("welcome to librarian from nodemon")
})

app.post('/', async (req, res) => {
    try {
        let book = Book(req.body)
        await book.save()
        res.send(book)
    } catch (error) {
        res.status(400).send(error.message)
    }


})


app.listen(3000, () => {
    console.log("Server Started on port 3000");
})