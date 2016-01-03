var express = require('express');
var router  = express.Router();
var socket  = require('../socket.js');

socket.init();

router.get('/players', function(req, res) {
   socket.getInfo
});

module.exports = router;