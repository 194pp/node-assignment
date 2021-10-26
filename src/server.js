const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const mongoose = require('mongoose');
const port = config.port || 3000;

const app = express();
mongoose.connect(config.db);

// middleware
app.use(cors());
app.use(express.json());

// helpers
const encryptionHelper = require('./utils/encryptionHelper');

// routes
const registerRoute = require('./routes/registerRoute');

app.use('/register', registerRoute);

app.listen(port);
console.log('Listening on port ' + port);
