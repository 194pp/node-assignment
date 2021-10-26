const express = require('express');
const router = express.Router();

const checkTokenController = require('../controllers/checkTokenController');

router.post('/', checkTokenController);

module.exports = router;