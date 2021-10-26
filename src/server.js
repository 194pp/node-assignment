const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const mongoose = require('mongoose');
const port = config.port || 3000;

const app = express();
mongoose.connect(config.db);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('server reached');
  res.send('bwah');
});

const registerRoute = require('./routes/registerRoute');

app.use('/register', registerRoute);

app.listen(port);
console.log('Listening on port ' + port);
