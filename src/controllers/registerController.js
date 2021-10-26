const accountsModel = require('../models/accountsModel');
const encryptionHelper = require('../utils/encryptionHelper');

const createAccount = async (req, res) => {
  accountsModel.find({email: req.body.email}, async (err, docs) => {
    if (err) {
      console.log(err);
    } else if (docs.length !== 0){
      res.send({error: 'Email already exists!'});
    }
    else {
      const hashedPassword = await encryptionHelper.encrypt(req.body.password);

      const newAccount = new accountsModel({
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
  });
}

module.exports = createAccount;