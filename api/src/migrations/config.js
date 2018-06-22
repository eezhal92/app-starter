require('dotenv').config();

console.log(process.env.MONGO_URL);

const config = {
  mongoUri: process.env.MONGO_URL,
  migrationCollection: 'migrations',
};

module.exports = config;
