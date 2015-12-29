var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controller = require('./socket.js');
controller.init();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res) {
    controller.sendHi("Juan", function(status) {
        if(status) {
            res.send("Java Says Hi!");
        } else {
            res.send("Connection is Dead");
        }
        //console.log("Done");
    });
   
});


app.listen(3000);

// Connect to server


