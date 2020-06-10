//import common
const common = require("./webpack.common.js");
const merge = require("webpack-merge");

//import Path
const path = require("path");

//import Plugins
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    devServer: {
        port: 8181,
        contentBase: path.resolve(__dirname, "src"),
        historyApiFallback: true
    }
});
