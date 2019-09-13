let path = require("path");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
    publicPath: "dist/"
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "style.css"
      //chunkFilename: "[id].css",
      //ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-react-jsx",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.module\.css$/, // модульный css , без *modules.css в нейминге пойдет в глобальный  сss
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              //publicPath: "../", // не меняю
              hmr: process.env.NODE_ENV === "development" //hmr - hot module replacement
            }
          },
          {
            loader: "css-loader",
            options: {
              //modules: true, //правило для имени класса (дает рандомный name хеш)включение модулей чтобы можно было : import styles from "./mycss.css"
              importLoaders: 1, //
              modules: { localIdentName: "[local]__[sha1:hash:hex:7]" }
            }
          }
        ]
      },
      {
        test: /^((?!\.module).)*css$/, // это нужно для подключения стилей из сторонних библиотек типа react-bootstrap чтобы брались без лоадера
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              //publicPath: "../", // не меняю
              hmr: process.env.NODE_ENV === "development" //hmr - hot module replacement
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
module.exports = conf;
