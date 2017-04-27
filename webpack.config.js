var path = require('path');
var webpack = require('webpack');

module.exports= {
    devtool: 'cheap-module-eval-source-map',
    entry:  [
        'webpack-hot-middleware/client?path=http://localhost:3011/__webpack_hmr&reload=true&noInfo=false&quiet=false',
        './index.js'
    ],
    output: {
        filename:'bundle.js',
        path:path.join(__dirname, 'dist'),
        publicPath: '/static/'
    },

    devServer: {
        hot: true,
        contentBase:path.join(__dirname, 'dist'),
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [ 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules'],
            },
        ],
    },

}