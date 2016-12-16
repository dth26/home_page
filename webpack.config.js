var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
	entry: [path.join(__dirname, '/public/main.ts')],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: ['awesome-typescript-loader'
                ]                
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            './src' // location of your src
        )
    ]
}


module.exports = webpackConfig;