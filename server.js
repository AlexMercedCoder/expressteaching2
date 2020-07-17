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

const whitelist = ['https://agitated-goldstine-e14b87.netlify.app', 'httpgit a://agitated-goldstine-e14b87.netlify.app']
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}


//MIDDLEWARE
app.use(express.json())
app.use(cors(corsOptionsDelegate))
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