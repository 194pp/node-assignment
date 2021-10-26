const jwt = require('jsonwebtoken');
const config = require('../config/config');

async function generateToken(payload) {
  return await jwt.sign(payload, config.secret);
}

async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.send(401);

  jwt.verify(token, config.secret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = {
  generateToken,
  authenticateToken
}