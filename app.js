var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var controller = require('./socket.js');

var routes = require('./routes/index');

var app = express();
controller.init();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

/*app.get("/", function(req, res) {
    controller.sendHi("Juan", function(status) {
        if(status) {
            res.send("Java Says Hi!");
        } else {
            res.send("Connection is Dead");
        }
    });
});*/

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