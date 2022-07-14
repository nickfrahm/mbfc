const express = require('express');
const router = express.Router();
const {
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require('../controllers/adminController');

//get all players stored in db
router.route('/admin/players').get(getPlayers).post(createPlayer);
router.route('/admin/players/:id').put(updatePlayer).delete(deletePlayer);

module.exports = router;
