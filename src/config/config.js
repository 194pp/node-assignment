require('dotenv').config();

const db = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.8ylha.mongodb.net/split-bill?retryWrites=true&w=majority`;
const port = process.env.PORT;
const secret = process.env.SECRET_KEY;

module.exports = {
  db,
  port,
  secret
}