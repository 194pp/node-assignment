const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const mongoose = require('mongoose');
const port = config.port || 3000;

const app = express();

express.static('public');
express.static('public/css');
mongoose.connect(config.db);

app.use(cors());
app.use(express.json());

// static
app.use(express.static('public'))

// routes
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const groupsRoute = require('./routes/groupsRoute');
const checkTokenRoute = require('./routes/checkTokenRoute');
const billsRoute = require('./routes/billsRoute');

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/groups', groupsRoute);
app.use('/checkToken', checkTokenRoute);
app.use('/bills', billsRoute);

app.listen(port);
console.log('Listening on port ' + port);
