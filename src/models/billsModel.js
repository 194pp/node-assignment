const mongoose = require('mongoose');
const {ObjectId} = require("mongodb");


const BillsSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  groupId: {
    type: ObjectId,
    required: true
  }
});

module.exports = mongoose.model('bills', BillsSchema);