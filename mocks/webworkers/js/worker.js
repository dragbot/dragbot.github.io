for (var i = 0; i < 900000000; i++) {
    Math.random();
}
var endTime = new Date().getTime();

postMessage('Finished! With worker script');