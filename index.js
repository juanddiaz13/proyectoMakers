const express = require('express')
const app = express()
const port = 3000

const logger = require('morgan');
const cookieParser = require('cookie-parser');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


var imagesRouter = require('./routes/images/router');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/images', imagesRouter);

module.exports = app;