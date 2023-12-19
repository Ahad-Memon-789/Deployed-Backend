const express = require('express');
const router = express.Router();
const TeamController = require('../Controllers/TeamController');

router.get('/', TeamController.GetTeam)
router.post('/create', TeamController.createTeam);

module.exports = router;