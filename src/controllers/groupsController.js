const groupsModel = require('../models/groupsModel');
const { authenticateToken } = require('../utils/jwt');

const createGroup = async (req, res) => {
  try {
    const tokenData = await authenticateToken(req.body.token);
    console.log(req.body.groupName);

    const newGroup = new groupsModel({
      groupName: req.body.groupName,
      groupMembers: [tokenData._id]
    });

    await newGroup.save(function (err, savedGroup) {
      if (err) {
        console.log(err)
        res.status(500).send();
      } else {
        res.send(savedGroup);
      }
    });
  } catch (err) {
    res.send({error: "An error has occurred."})
  }
}

const getUserGroups = async (req, res) => {
  try {
    const tokenData = await authenticateToken(req.body.token);
    const userId = tokenData._id;
    groupsModel.find({groupMembers: userId}, async (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
  } catch (err) {
    res.send({error: err});
  }
}

module.exports = {
  createGroup,
  getUserGroups
};