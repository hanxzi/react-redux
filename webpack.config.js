var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports= {
    devtool: 'cheap-module-eval-source-map',
    entry:[
        'webpack-hot-middleware/client',
        './index.js'
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath: '/static/'
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
                include: __dirname
            },
            {
                test:/\.css$/,
                loaders: ['style','css']
            }
        ]
    }
}