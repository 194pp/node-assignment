const billsModel = require('../models/billsModel');

const createBill = async (req, res) => {
  try {
    const newBill = new billsModel({
      description: req.body.description,
      amount: parseFloat(req.body.amount),
      groupId: req.body.groupId
    });

    await newBill.save(function (err, savedBill) {
      if (err) {
        res.send({error: "Error in saving data to DB."});
      } else {
        res.send(savedBill);
      }
    });
  } catch (err) {
    res.send(err);
  }
}

const getGroupBills = async (req, res) => {
  try {
    billsModel.find({groupId: req.params.groupId}, async (err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.send(docs);
      }
    });
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  createBill,
  getGroupBills
}