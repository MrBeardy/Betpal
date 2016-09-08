module.exports = {
  devtool: 'source-map',
  entry: {
    'inject': './js/inject.jsx',
    'background': './js/background.jsx',
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
