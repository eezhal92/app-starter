// eslint-disable-next-line no-global-assign
require = require('esm')(module);

const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

module.exports = require('./src/main.js');
