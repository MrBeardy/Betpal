module.exports = {
  devtool: 'source-map',
  entry: {
    'inject': './src/inject.jsx',
    'background': './src/background.jsx',
  },
  output: {
    path: __dirname + "/extension/bundled",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
