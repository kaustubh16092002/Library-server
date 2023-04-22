const { Schema, model } = require("mongoose")

const bookSchema=Schema({
    name:{
        type: String,
        require: true,
        unique: true,
    },
    description: String
})

module.exports= model('Book',bookSchema)