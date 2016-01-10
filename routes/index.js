var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    var players = [
        {nick: "IOWizard"}, {nick: "KiyameAssassin"}, {nick: "IntoxicatedWolf"}, {nick: "Danny"}
    ]
    res.render('index', {players: players});
});

router.get('/about', function(req, res) {
    res.render("./pages/about.ejs");
});

module.exports = router;