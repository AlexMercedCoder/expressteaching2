const mongoose = require('mongoose')
const {Schema, model} = mongoose

const dogSchema = new Schema({
    name: String,
    age: Number
})

const Dog = model('dog', dogSchema)

module.exports = Dog