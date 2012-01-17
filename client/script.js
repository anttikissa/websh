$(function() {
	var socket = io.connect('http://localhost:3030');
	socket.on('data', function (data) {
		var d = document;
		d.write(data + '<br>\n');
		console.log('Got: ' + JSON.stringify(data));
		socket.emit('data', 'Thanks.');
	});
});

