var io = require('socket.io-client');
var socket;
var connected = false;

function connect() {
    console.log("Attempting to Connect to Java")
    socket.on('connect', function () {
        connected = true;
        console.log("Connection to Java has beem Made!");
    });
}

module.exports.init = function() {
    socket = io.connect('http://192.168.0.100:8080');
    connect();
    socket.on('disconnect', function() {
        connected = false;
        console.log("Connection to Java has beem Lost!");
        //connect();
    });
}
module.exports.sendHi = function(client, callback) {
    if (connected) {
        socket.emit('greeting', client, function(data) {
           console.log("Server Has Reponded to " + client + "'s Greeting!"); 
           callback(1);
        });
    } else {
        console.log("Not Connected To Server!!!!");
        callback(0);
    }
}
//module.exports = Controller;
