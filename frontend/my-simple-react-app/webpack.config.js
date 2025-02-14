const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const opn = require('opn');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    // Disable the 'open' feature
    open: false,
    // Manually open the browser after the server has started
    onAfterSetupMiddleware: function(devServer) {
      opn(devServer.options.protocol + '://' + devServer.options.host + ':' + devServer.options.port + '/');
    }
  }
};
