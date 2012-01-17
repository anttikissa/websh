var socket = io.connect('http://localhost:3030');
socket.on('data', function (data) {
	var d = document;
	d.write(data + '\n');
	console.log('Got: ' + data);
	socket.emit('data', 'Thanks.');
});
