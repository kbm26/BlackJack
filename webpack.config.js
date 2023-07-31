const path = require('path');

module.exports = {
  entry: './classes/GameManager.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // The output bundled file
  },
  mode: 'development', // or 'production' for minification
};
