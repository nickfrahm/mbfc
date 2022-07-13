const express = require('express');
const app = express();
const port = 5000;
const tableRoutes = require('./routes/tables/tableData');
const adminRoutes = require('./routes/adminRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

//Connect to DB
mongoose.connect(process.env.DB_CON_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
setTimeout(() => {
  console.log(mongoose.connection.readyState);
}, 10000);

//Get Routes For API
app.use('/api', tableRoutes);
app.use('/api', adminRoutes);

app.get('/', (req, res) => {
  res.send('Retrieve data from /api/ routes');
});

//error handling
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(404);
  res.send('error finding route');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
