const accountsModel = require("../models/accountsModel");
const encryptionHelper = require('../utils/encryptionHelper');

const createAccount = async (req, res) => {
  accountsModel.find({email: req.body.email}, async (err, docs) => {
    if (err) {
      console.error(err);
    } else if (docs.length === 0){
      res.send({error: 'User does not exist with this email!'});
    }
    else {
      const passwordCheck = await encryptionHelper.decryptCheck(req.body.password, docs[0].password);
      if (!passwordCheck) {
        res.send({error: "Password incorrect"});
      } else {
        res.send({message: "Password correct"});

        // TODO: generate session

      }
    }
  });
}

module.exports = createAccount;