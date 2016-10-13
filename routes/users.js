var express = require('express');
var router = express.Router();
var User = require('../model/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('users', {
		title: 'Users'
	});
});

module.exports = router;
