const mongoose = require('mongoose');
const {ObjectId} = require("mongodb");

const GroupsSchema = mongoose.Schema({
  groupName: {
    type: String,
    required: true
  },
  groupMembers: {
    type: [ObjectId],
    required: true
  }
});

module.exports = mongoose.model('groups', GroupsSchema);