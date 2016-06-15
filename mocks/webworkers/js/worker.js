for (var i = 0; i < 1000000000; i++) {
    Math.random();
}
var endTime = new Date().getTime();

postMessage('Finished! With worker script');