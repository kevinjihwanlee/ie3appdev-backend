// Import Express
let express = require('express')

// Import body-parser
let bodyParser = require('body-parser')

// Import Mongoose
let mongoose = require('mongoose')

// Initialize app
let app = express()

// Import routes
let apiRoutes = require("./api-routes")

// Configure body-parser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json())

// find appropriate database to connect to, default to localhost
let uristring = process.env.MONGOLAB_URI || 'mongodb://localhost/yekyok'

// Connect to Mongoose and set connection variable
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err)
  } else {
    console.log('Succeeded connecting to: ' + uristring)
  }
})

var db = mongoose.connection

// Set up server port
var port = process.env.PORT || 5000

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'))

// use API routes in app
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running yek yok on port " + port)

});