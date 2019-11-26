const express = require('express');
const body = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const cryptoRouter = require('./routes/cryptoRoute');

const app = express();
app.use(morgan('dev'));
const port = 3000;
app.use(cors({
  credentials: true,}
));

app.use(body.json());
app.use(body.urlencoded({extended: false}));

app.use('/search',cryptoRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});