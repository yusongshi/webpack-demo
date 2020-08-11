let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: './js/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: 'webpack is good'
        }),
        new htmlWebpackPlugin({
            filename: 'index2.html',
            template: 'index2.html'
        })
    ]
}