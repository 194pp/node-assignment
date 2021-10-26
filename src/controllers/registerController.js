const registerModel = require("../models/registerModel");

const createAccount = async (req, res) => {
  const newAccount = new registerModel({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password
  });
  await newAccount.save(function (err, savedAccount) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.send(savedAccount);
    }
  });
}

module.exports = createAccount;