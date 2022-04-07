const cheerio = require('cheerio');
const request = require('request');

request(
  'https://www.fotmob.com/leagues/47/overview/premier-league',
  (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      const tableRows = [];

      $('tbody tr').each((i, el) => {
        const teamRow = {
          team: $('td a span', el).text(),
          wins: $('td:nth-child(4)', el).text(),
          draws: $('td:nth-child(5)', el).text(),
          losses: $('td:nth-child(6)', el).text(),
          points: $('td:nth-child(9)', el).text(),
        };
        tableRows.push(teamRow);
      });

      console.log(tableRows);
    }
  }
);
