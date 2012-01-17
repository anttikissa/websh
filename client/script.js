$(function() {
	var c = $('#console');
	var socket = io.connect('http://localhost:3030');
	socket.on('data', function (data) {
		if (data.length) {
			var code = data.charCodeAt(0);
			if (code === 8) {
				if (c.html().length) {
					var da = c.html();
					c.html(da.substring(0, da.length - 1));
				}
			} else if (code === 9) {
				// ignore
			} else {
				c.append(data);
				var scrollHeight = c[0].scrollHeight;
				c.scrollTop(scrollHeight);
			}
		}
	});

	$(document).keypress(function(key) {
		socket.emit('keypress', key.which);
	});

	// capture special keys
	$(document).keydown(function(key) {
//		console.log('keydown, key follows: ');
//		console.log(key);
		var code = key.keyCode;
		if (code === 8 || code === 9) {
			socket.emit('keypress', code);
			return false;
		}
	});
});

