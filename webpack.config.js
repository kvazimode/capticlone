const path = require(`path`);
const CopyPlugin = require("copy-webpack-plugin");

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
  },
  plugins: [
      new CopyPlugin({
          patterns: [
            {from:`src/img`,to:`img`},
            {from:`src/index.html`,to:`index.html`}
          ]
      })
  ]
};
