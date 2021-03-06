//Setting up the express server
//setting server.js as the entry point in package.json 

const express = require('express')
//bringing in the connection constant from db.js for mongodb(Database) connections
const connectDB = require('./config/db')
const path = require('path')

//initialise the express module
const app = express()

//Connect Database
connectDB()


//Init middleware
//previously we used body-parser, but now the functionality in inherent in express
app.use(express.json({ extended: false }))

app.use(express.static(__dirname + '/public/index.html'));

//setting up a basic route and sending resonse back to test if the server is working
// app.get('/', (req, res) => res.send("API running!"))


//Defining Routes

app.use('/', require('./routes/api/supAdmin'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/doctors', require('./routes/api/doctors'))
app.use('/api/patient', require('./routes/api/patients'))


//setting up the port for the server to start
const PORT = process.env.PORT || 5000

//starting the server
app.listen(PORT, () => console.log(`Server started on ${PORT}`))
