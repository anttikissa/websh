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

#	file = '/Users/antti/code/backend/bin/usn'
	file = 'bash'
	args = ['-i']
	child = childProcess.spawn(file, args)

	console.log 'Spawned child ' + child.pid

#	child.stdin.write('ls')
#	child.stdin.end()

	child.on 'exit', (code, signal) ->
		put "process #{child.pid} has left the building, code " + code
		if signal then put 'process was terminated due to signal ' + signal

	socket.on 'disconnect', ->
		console.log "Socket closed, terminating #{child.pid}."
		child.kill('SIGTERM')
		setTimeout (->
			console.log "Socket closed + 1 second, killing #{child.pid}."
			child.kill('SIGKILL')
		), 1000

	child.stdout.on 'data', (data) ->
		put data

	child.stderr.on 'data', (data) ->
		put data

	socket.on 'keypress', (which) ->
		str = String.fromCharCode(which)
		console.log 'Got keypress (code ' + which + ') ' + str
		child.stdin.write(str)
#		child.stdin.end()

io.sockets.on 'connection', handleConnection

console.log "Socket.IO on http://localhost:#{streamPort}"

