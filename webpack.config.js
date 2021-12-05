const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}