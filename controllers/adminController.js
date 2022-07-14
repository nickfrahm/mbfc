const asyncHandler = require('express-async-handler');
const Player = require('../models/player');

// desc: Get all the player objects from the db.
// route: GET /api/admin/players
// access: Private
const getPlayers = asyncHandler(async (req, res, next) => {
  try {
    const players = await Player.find();
    res.status(200);
    res.json(players);
  } catch (error) {
    res.status(500);
    res.json({ error: 'Error getting player data: ' + error });
  }
});

// desc: Create a single player object for the db.
// route: POST /api/admin/players
// access: Private
const createPlayer = asyncHandler(async (req, res, next) => {
  try {
    if (!req.body) {
      throw new Error('No request body.');
    }

    const player = await Player.create({
      name: req.body.name,
      teams: req.body.teams,
      uclPoints: req.body.uclPoints,
      competitionWins: req.body.competitionWins,
    });
    res.status(200).json(player);
    //res.status(200).send(req.body);
  } catch (error) {
    res.status(500);
    res.json({ error: 'Error creating player: ' + error });
  }
});

// desc: Update the player object given by id.
// route: PUT /api/admin/players/:id
// access: Private
const updatePlayer = asyncHandler(async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      throw new Error('No player found by id.');
    }

    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(500);
    res.json({ error: 'Error getting player data: ' + error });
  }
});

// desc: Delete the player object given by id.
// route: DELETE /api/admin/players/:id
// access: Private
const deletePlayer = asyncHandler(async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      throw new Error('No player found by id.');
    }

    await Player.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Player deleted: ' + req.params.id });
  } catch (error) {
    res.status(500);
    res.json({ error: 'Error getting player data: ' + error });
  }
});

module.exports = { getPlayers, createPlayer, updatePlayer, deletePlayer };
