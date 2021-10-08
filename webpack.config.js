const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
      libraryTarget: "umd",
      library: "react-audio-visualizers-core"
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};