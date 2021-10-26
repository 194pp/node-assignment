const bcrypt = require('bcrypt');

const salt = 10;

const encrypt = async (data) => {
  const hash = await bcrypt.hash(data, salt);
  console.log(hash);
  return hash;
}

const decryptCheck = async (data, hash) => {
  const result = bcrypt.compare(data, hash);
  console.log(result);
  return await result;
}

module.exports = {
  encrypt,
  decryptCheck
}

