const express = require('express');
const router = express.Router();
const { getPlayers } = require('../controllers/adminController');

//get all players stored in db
router.get('/admin/players', getPlayers);

module.exports = router;
