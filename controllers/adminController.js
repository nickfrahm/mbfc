const asyncHandler = require('express-async-handler');
const Player = require('../models/player');

// desc: Get all the player objects from the db.
// route: GET /api/admin/players
// access: Public
const getPlayers = asyncHandler(async (req, res, next) => {
  try {
    const players = await Player.find();
    res.status(200);
    res.json(players);
  } catch (error) {
    res.status(400);
    res.json({ error: 'Error getting player data: ' + error });
  }
});

module.exports = { getPlayers };
