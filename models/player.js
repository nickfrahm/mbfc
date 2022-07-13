const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: { type: String, required: true },
  teams: { type: [String], required: true },
  uclPoints: { type: Number, required: true },
  competitionWins: { type: [String], required: true },
});

module.exports = mongoose.model('Player', PlayerSchema);
