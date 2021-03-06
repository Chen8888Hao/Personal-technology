var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './es6/main.js'],
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: path.join(__dirname, 'es6'),
            query: {
                presets: 'es2015'
            }
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
}
