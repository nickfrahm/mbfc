const express = require('express');
const router = express.Router();
const tableScraper = require('../../../scraper/tableData');

router.get('/tableData', (req, res) => {
  try {
    tableScraper
      .scrapeTableData('https://www.fotmob.com/leagues/87/overview/laliga')
      .then((data) => res.json(data));
  } catch (error) {
    res.send('Error ' + error);
  }
});

module.exports = router;
