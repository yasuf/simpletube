var express = require('express')
var app = express()

app.use(express.static('dist'))


app.listen(3000, function() {
  console.log('prodServer.js: Listening on port 3000')
})
