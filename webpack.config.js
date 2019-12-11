var path = require('path');
var src_dir = path.join(__dirname, '../Related-Recently-Viewed-Products/client/src');
var src_dir2 = path.join(__dirname, '../Nav-Search/client/src');
var public_dir = path.join(__dirname, './client/public');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          src_dir,
          src_dir2
        ],
        loader: 'babel-loader',
        options: {
          'presets': ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  entry: {
    rec_products: '../Related-Recently-Viewed-Products/client/src/index.jsx',
    nav_bar: '../Nav-Search/client/src/index.jsx'
  },
  output: {
    filename: '[name]_bundle.js',
    path: public_dir
  }
};