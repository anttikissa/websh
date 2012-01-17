express = require 'express'

port = 2020

app = express.createServer()
app.use(express.static(__dirname + '/client'))
app.listen port

console.log "Listening at http://localhost:#{port}"

