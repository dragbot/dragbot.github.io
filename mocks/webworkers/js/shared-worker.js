var connections = 0; // count active connections
var ports = [];

self.addEventListener("connect", function (e) {
	var port = e.ports[0];
	ports.push(port);
	connections++;

	port.addEventListener("message", function (e) {
		port.postMessage("Hello " + e.data + " (port #" + connections + ")");
	}, false);

	port.start();
}, false);

setTimeout(function() {
	ports.forEach(function(port) {
		port.postMessage("Ping");
	});
}, 10000);