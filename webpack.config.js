const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    filename: "index.js",
    library: "react-video-cover",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "prop-types": "prop-types"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
};
