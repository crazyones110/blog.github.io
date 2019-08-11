const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js/')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ]
  }
};
