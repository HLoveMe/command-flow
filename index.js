'use strict';
//dev
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/esm5/index.prod.js');
} else {
  module.exports = require('./dist/esm5/index.dev.js');
}
