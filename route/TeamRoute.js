const express = require('express');
const router = express.Router();
const TeamController = require('../Controllers/TeamController');

router.post('/create', TeamController.createTeam);

module.exports = router;