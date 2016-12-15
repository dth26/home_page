var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index.hbs');
});

router.get('/developer', function(req, res, next){
	res.render('index.hbs');
});

module.exports = router;