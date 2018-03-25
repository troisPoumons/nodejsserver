const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://moi:moi@ds237808.mlab.com:37808/star-wars-quotes', (err, client) => {
  if (err) return console.log(err)
  db = client.db('star-wars-quotes') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

