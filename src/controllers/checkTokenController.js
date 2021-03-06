const { authenticateToken } = require('../utils/jwt');

const checkToken = async (req, res) => {
  try {
    const tokenData = await authenticateToken(req.body.token);
    res.send({tokenData});
  } catch (err) {
    res.send(err);
  }
}

module.exports = checkToken;