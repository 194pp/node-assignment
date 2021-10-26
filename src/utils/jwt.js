const jwt = require('jsonwebtoken');
const config = require('../config/config');

async function generateToken(payload) {
  return await jwt.sign(payload, config.secret);
}

async function authenticateToken(token) {
  return await jwt.verify(token, config.secret);
}

module.exports = {
  generateToken,
  authenticateToken
}