var counter = 0;

document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('useragent').innerHTML = navigator.userAgent;

	window.setInterval(function() {
		document.getElementById('interval').innerHTML = counter;
		counter++;
	}, 1);

	window.setTimeout(function() {
		document.write('<script src="js/delayed-common.js"><\/script>');
	}, 1000);
}, false);