for (var i = 0; i < 100000000; i++) {
    Math.random();
}
var endTime = new Date().getTime();

postMessage('Finished! With worker script');