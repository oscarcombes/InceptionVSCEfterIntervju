let path = require("path");

module.exports = {
  mode: "development",
  entry:  path.resolve(__dirname, 'code.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'distribution')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};