exports.scrapeTableData = function (url) {
  console.log(url);
  return new Promise((resolve, reject) => {
    const cheerio = require('cheerio');
    const request = require('request');

    request(url, (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        const tableRows = [];

        $('tbody tr').each((i, el) => {
          let teamRow;

          if (i === 0) {
            teamRow = {
              team: $(el).find('td:nth-child(4)').text(),
              wins: parseInt($(el).find('td:nth-child(6)').text()),
              draws: parseInt($('td:nth-child(7)', el).text()),
              losses: parseInt($('td:nth-child(8)', el).text()),
              points: parseInt($('td:nth-child(12)', el).text()),
            };
          } else {
            teamRow = {
              team: $(el).find('td:nth-child(2)').text(),
              wins: parseInt($(el).find('td:nth-child(4)').text()),
              draws: parseInt($('td:nth-child(5)', el).text()),
              losses: parseInt($('td:nth-child(6)', el).text()),
              points: parseInt($('td:nth-child(9)', el).text()),
            };
          }
          tableRows.push(teamRow);
        });
        resolve(tableRows);
      } else {
        reject(error);
      }
    });
  });
};

//TODO: Remove hardcoding of links
exports.scrapeAllTableData = function () {
  try {
    const links = [
      'https://www.fotmob.com/leagues/87/overview/laliga',
      'https://www.fotmob.com/leagues/54/overview/1.-bundesliga',
      'https://www.fotmob.com/leagues/47/overview/premier-league',
      'https://www.fotmob.com/leagues/53/overview/ligue-1',
      'https://www.fotmob.com/leagues/55/overview/serie-a',
    ];

    let promises = links.map((url) => {
      return exports.scrapeTableData(url);
    });

    return Promise.all(promises);
  } catch (error) {
    return Promise.reject('Error fetching all table data');
  }
};

//'https://www.fotmob.com/leagues/87/overview/laliga',
//'https://www.fotmob.com/leagues/54/overview/1.-bundesliga',
//'https://www.fotmob.com/leagues/47/overview/premier-league',
//'https://www.fotmob.com/leagues/53/overview/ligue-1',
//'https://www.fotmob.com/leagues/55/overview/serie-a',
