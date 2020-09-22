// 自定义开发环境配置
const { merge } = require('webpack-merge')
const WebpackConfig = require('./webpack.config.js')
const ExamplePlugin = require('../plugin/examplePlugin.js')
const path = require('path')

module.exports = function (params) {
    return merge(WebpackConfig(params), {
        devtool: 'source-map',
        plugins: [
            new ExamplePlugin()
        ],
        module: {
            rules:[
                {
                    test: /\.js$/,
                    //loader: 'happypack/loader?id=happybabel',
                    loader: path.resolve(__dirname, '../plugin/noconsole.js')
                }
            ]    
        }
        
    })
}