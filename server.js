const express = require('express') //bringing in the express library
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.mongoURI
const PORT = process.env.PORT
const mongoConfig = {useNewUrlParser: true, useUnifiedTopology: true}
const Dog = require('./models/dog.js')
const cors = require('cors')

//CONNECT TO DATABASE
const db = mongoose.connection
mongoose.connect(mongoURI, mongoConfig, (err) => {
    console.log('You are connected to Mongo')
})

//CONFIGURE CORS

const corsOptions = {
    origin: 'https://agitated-goldstine-e14b87.netlify.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


//MIDDLEWARE
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.static('public'))




//ROUTES

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/cheese', (req, res) => {
    res.send('you did it again!')
})

app.get('/data', (req, res) => {
    res.json(data)
})

app.route('/dog')
.get( async (req, res) => {
    const dogs = await Dog.find({})
    res.json(dogs)
})
.post( async (req, res) => {
    const dog = await Dog.create(req.body)
    res.json(dog)
})



//LISTENER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})