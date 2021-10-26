const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const path = require("path");

router.post('/', loginController);
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/login.html'));
})

module.exports = router;