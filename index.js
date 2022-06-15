'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/flow.prod.js');
} else {
  module.exports = require('./cjs/flow.dev.js');
}