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
  resolve: {
    alias: {
      "styled-components": path.resolve('./', "node_modules", "styled-components"),
    }
  },
  entry: {
    vendor: ['styled-components'],
    rec_products: '../Related-Recently-Viewed-Products/client/src/index.jsx',
    nav_bar: '../Nav-Search/client/src/index.jsx'
  },
  externals: {
    'styled-components': {
         commonjs: 'styled-components',
         commonjs2: 'styled-components',
         amd: 'styled-components'
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: Infinity,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
    filename: '[name]_bundle.js',
    path: public_dir
  }
};