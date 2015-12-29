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
    });
});

app.get('/spawn/:type', function(req, res) {
   controller.sendEvent('spawn', req.params.type, function(status) {
       if(status) {
            res.send("You Have Doomed Players With " + req.params.type + "s!");
        } else {
            res.send("Connection is Dead");
        }
   });
});


app.listen(3000);