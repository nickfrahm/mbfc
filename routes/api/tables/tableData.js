const express = require('express');
const router = express.Router();
const tableScraper = require('../../../scraper/tableData');

//get single league data TODO: Refactor to remove hardcoded links.
router.get('/tableData/:league', (req, res) => {
  try {
    let url;
    if (req.params.league === 'laliga')
      url = 'https://www.fotmob.com/leagues/87/overview/laliga';
    if (req.params.league === 'bundesliga')
      url = 'https://www.fotmob.com/leagues/54/overview/1.-bundesliga';
    if (req.params.league === 'premierleague')
      url = 'https://www.fotmob.com/leagues/47/overview/premier-league';
    if (req.params.league === 'ligue1')
      url = 'https://www.fotmob.com/leagues/53/overview/ligue-1';
    if (req.params.league === 'seriea')
      url = 'https://www.fotmob.com/leagues/55/overview/serie-a';

    tableScraper.scrapeTableData(url).then((data) => res.json(data));
  } catch (error) {
    res.send('Error ' + error);
  }
});

//get all league data. Leagues Array->Team Array->Team Object
//TODO: refactor hardcorded URLs.
router.get('/tableData/all', (req, res) => {
  try {
    tableScraper.scrapeAllTableData().then((data) => res.json(data));
  } catch (error) {
    res.send('Error ' + error);
  }
});

module.exports = router;

//Scraper Links
//EPL: https://www.fotmob.com/leagues/47/overview/premier-league
//La Liga: https://www.fotmob.com/leagues/87/overview/laliga
//Bundesliga: https://www.fotmob.com/leagues/54/overview/1.-bundesliga
//Serie A: https://www.fotmob.com/leagues/55/overview/serie-a
//Ligue 1: https://www.fotmob.com/leagues/53/overview/ligue-1
