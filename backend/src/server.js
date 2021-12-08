// import express and middleware
const express = require('express')
const hamstersRouter = require('./routes/hamster.js')


// import database 

const hamsters = require('./data.json')

// konfig. server

const app = express()
const PORT =  process.env.PORT || 1337
const cors = require('cors')
const path = require('path')
const staticFolder = path.join(__dirname, 'public')


// install middleware
app.use( cors())
app.use(express.static(__dirname + '../build'))   //    bilo je '/build'   &   '../../build'

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
})

app.use( express.urlencoded( { extended:true }) )
app.use( express.json() )


app.use('/', express.static(staticFolder)) 


// set-up routes
app.use('/hamsters', hamstersRouter)

app.use('/img', express.static(path.resolve('backend/public/hamsters/'))) 

// app.use( '/img', express.static(path.resolve('hamsters/') ));

app.listen(PORT, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})



 
// app.get('/', (req, res) => {
//     console.log('Web root')
//     res.send('The server is deployed')
// })
 

app.use( express.static(path.resolve('../build/') ));     //bilo je 'build/'

app.get('*', (req, res) => {
    console.log('* is being called...')
    res.send(__dirname + '../build/index.html');    // bilo je '/build/index.html'  &   '../../build'
});
