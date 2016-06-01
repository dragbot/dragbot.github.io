var counter = 0;

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('useragent').innerHTML = navigator.userAgent;

    window.setInterval(function() {
    	document.getElementById('interval').innerHTML = counter;
    	counter++;
    }, 100);

    window.setTimeout(function() {
        document.body.innerHTML += '<script src="js/delayed-common.js?id=1"><\/script>';
    }, 1000);

    setInterval(function() {
        var currentTime = new Date()
        document.getElementById('interval_time').innerHTML += (currentTime.toTimeString().split(' ')[0] + ' - ')
    }, 1000)
}, false);
