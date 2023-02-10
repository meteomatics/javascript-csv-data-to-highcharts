var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        proxy: {
            "/api/meteomatics": {
                target: "https://api.meteomatics.com",
                auth: "user:password",
                pathRewrite: {
                    "api/meteomatics/": "",
                },
                cookieDomainRewrite: "localhost",
                changeOrigin: true,
                secure: false,
                logLevel: "info",
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: [] })
    ],

};
