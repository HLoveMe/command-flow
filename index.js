'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/esm-browser/index.js');
} else {
  module.exports = require('./dist/esm-browser/index.dev.js');
}