var express = require('express');
var router = express.Router();

router.get('/projects', function(req, res) {
	res.render('index', { title: 'Projects' });
});

module.exports = router;
