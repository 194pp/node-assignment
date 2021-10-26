const express = require('express');
const router = express.Router();
const path = require('path');
// const groupsController = require('../controllers/groupsController');

// router.post('/', groupsController);
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/groups.html'));
});

module.exports = router;