const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const CreateVueLoaderConfig = require("./vue-loader.config")
// console.log(isDev)
const config = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    extensions: ["*", ".vue", ".js", ".jsx"],
    alias: {
      vue$: "vue/dist/vue.common.js",
      "@": path.resolve(__dirname, "../src/components")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: CreateVueLoaderConfig(isDev)
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "[name]-[hash:base64:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
