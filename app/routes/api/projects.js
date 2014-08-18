express = require('express');
router = express.Router();

router.get('/projects', function(req, res) {
	
	Project = require('../../models/project');

	res.json({message: 'kollo fel kletch!'});
});

module.exports = router;
