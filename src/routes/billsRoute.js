const express = require('express');
const router = express.Router();
const path = require("path");
const billsController = require('../controllers/billsController');

router.post('/', billsController.createBill);
router.get('/:groupId', billsController.getGroupBills);
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/bills.html'));
});

module.exports = router;