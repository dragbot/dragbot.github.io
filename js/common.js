var counter = 0;
window.setInterval(function() {
	document.getElementById('interval').innerHTML = counter;
	counter++;
}, 1);

document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('useragent').innerHTML = navigator.userAgent;

	// window.setInterval(function() {
	// 	document.getElementById('interval').innerHTML = counter;
	// 	counter++;
	// }, 1);

	window.setTimeout(function() {
		document.body.innerHTML += '<script src="js/delayed-common.js?id=1"><\/script>';
	}, 1000);
}, false);