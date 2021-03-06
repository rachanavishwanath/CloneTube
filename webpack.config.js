const path = require("path");

module.exports = {
  context: __dirname,
  entry: './frontend/cloneTube.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
      extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babel/react']
            }
        },
      }
    ]
  }
};
