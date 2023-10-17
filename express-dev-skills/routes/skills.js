var express = require('express');
var router = express.Router();

module.exports = router;

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

// GET /skills (all skills)
router.get('/', skillsCtrl.index);

// GET /skills/:id (a single skill)
router.get('/:id', skillsCtrl.show)



