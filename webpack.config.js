const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaultConfig,

  entry: {
    free: path.resolve(__dirname, 'src/index.jsx')
  },

  output: {
    path: path.resolve(__dirname, 'admin/build'),
    filename: 'free.js'
  }
};
