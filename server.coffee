express = require 'express'
socketIo = require 'socket.io'
childProcess = require 'child_process'

port = 2020
streamPort = 3030

app = express.createServer()
app.use(express.static(__dirname + '/client'))
app.listen port

console.log "Express on http://localhost:#{port}"

io = socketIo.listen streamPort
io.set 'log level', 1

handleConnection = (socket) ->
	put = (data) -> 
		socket.emit 'data', data.toString()

	console.log 'spawning child'
	child = childProcess.spawn('./process.sh')

	child.on 'exit', (code, signal) ->
		put 'process has left the building, code ' + code
		if signal then put 'process was terminated due to signal ' + signal

	socket.on 'disconnect', ->
		console.log 'Socket closed, terminating.'
		child.kill('SIGTERM')
		setTimeout (->
			console.log 'Socket closed + 1 second, killing.'
			child.kill('SIGKILL')
		), 1000

	child.stdout.on 'data', (data) ->
		put data

	child.stderr.on 'data', (data) ->
		put "[error] " + data

	socket.on 'data', (data) ->
#		console.log 'Got data back: ' + data

io.sockets.on 'connection', handleConnection

console.log "Socket.IO on http://localhost:#{streamPort}"

