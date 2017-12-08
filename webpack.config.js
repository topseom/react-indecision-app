const path = require('path');

//babel-cli is for command line
//babel-core like babel-cli it for webpack use
//babel-loader is teach webpack how to run babel
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: '/node_modules/'
        }]
    }
};