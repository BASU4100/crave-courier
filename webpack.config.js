const path = require("path");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const { watchFile } = require("fs");
const { styleText } = require("util");

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/html/template.html"],
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: "./src/html/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader" ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};