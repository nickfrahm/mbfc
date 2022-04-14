const express = require('express');
const app = express();
const port = 5000;
const mbfcAPI = require('./routes/api/tables/tableData');

app.use('/api', mbfcAPI);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
