const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/js/script.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `build`),
    watchContentBase: true
  }
};