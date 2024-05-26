const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Handlebars = require("handlebars");
// const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./src/index.js"),
    timeout: path.resolve(__dirname, "./src/js/timeout.js"),
    interval: path.resolve(__dirname, "./src/js/interval.js"),
    notifications: path.resolve(__dirname, "./src/js/notifications.js"),
    subscription: path.resolve(__dirname, "./src/js/subscription.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.hbs$/i,
        loader: "handlebars-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:8][ext][query]",
        },
      },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "New Page",
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      title: "Timeout",
      filename: "01-timeout.html",
      template: "./src/pages/01-timeout.html",
      chunks: ["timeout"],
    }),
    new HtmlWebpackPlugin({
      title: "Interval",
      filename: "02-interval.html",
      template: "./src/pages/02-interval.html",
      chunks: ["interval"],
    }),
    new HtmlWebpackPlugin({
      title: "notifications",
      filename: "notifications.html",
      template: "./src/pages/notifications.html",
      chunks: ["notifications"],
    }),
    new HtmlWebpackPlugin({
      title: "subscription",
      filename: "subscription.html",
      template: "./src/pages/subscription.html",
      chunks: ["subscription"],
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 4444,
    open: true,
  },
};
