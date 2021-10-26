const registerModel = require("../models/registerModel");
const encryptionHelper = require('../utils/encryptionHelper');

const createAccount = async (req, res) => {
  const hashedPassword = await encryptionHelper.encrypt(req.body.password);

  const newAccount = new registerModel({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashedPassword
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