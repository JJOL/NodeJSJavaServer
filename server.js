//"use strict";
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var controller = require('./socket.js');
var MCServer   = require('./MCServer.js');

var routes = require('./routes/index');
var api    = require('./routes/mcserver')
var app = express();
app.set('port', process.env.PORT || 3000);
controller.init();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/server', api);


app.listen(app.get('port'), function() {
    console.log("Listening in port ", app.get('port'));
});