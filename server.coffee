express = require 'express'
socketIo = require 'socket.io'

port = 2020
streamPort = 3030

app = express.createServer()
app.use(express.static(__dirname + '/client'))
app.listen port

console.log "Express on http://localhost:#{port}"

io = socketIo.listen streamPort

io.sockets.on 'connection', (socket) ->
	setInterval(->
		socket.emit 'data', 'Some data for you'
	,	1000)

	socket.on 'data', (data) ->
		console.log 'Got data back: ' + data

console.log "Socket.IO on http://localhost:#{streamPort}"

