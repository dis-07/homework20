const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/template.html"),
        })
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    cache: false,
};