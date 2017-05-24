const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : './app/components/Main.jsx',
    output: {
        path: './public', filename: '[name].js', publicPath: '/'
    },
    module: {
        loaders: [
            {
                test   : /.jsx?$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query  : {
                    presets: ['es2015', 'react']
                }
            },{
                test  : /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test  : /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}
