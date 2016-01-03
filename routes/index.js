var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    var players = [
        {nick: "IOWizard"}, {nick: "KiyameAssassin"}, {nick: "IntoxicatedWolf"}, {nick: "Danny"}
    ]
    res.render('index', {players: players});
});

module.exports = router;