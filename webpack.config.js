module.exports = {
  entry: ['babel-polyfill', './js/inject.js'],
  output: {
    path: __dirname + "/extension/bundled",
    filename: "inject.bundled.js"
  }
}
