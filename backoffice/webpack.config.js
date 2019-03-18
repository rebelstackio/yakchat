const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack'); 
const CopyPlugin = require('copy-webpack-plugin');


module.exports = () => {
	 // Call dotenv and it will return an Object with a parsed key 
	 const env = dotenv.config({
		 path: path.resolve(process.cwd(), '../', '.env')
	 }).parsed;

	 // Reduce it to a nice object, the same as before
	 const envKeys = Object.keys(env).reduce((prev, next) => {
		 prev[`process.env.${next}`] = JSON.stringify(env[next]);
		 return prev;
	 }, {});

	 const defaultobject = {
		entry: './src/main/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.js'
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'public')
		},
		module: {
			rules: [
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
					include: [
						/\/node_modules\/@rebelstack-io\/metaflux/
					]
				},
				{
					test: /\.css$/,
					use: [ 
						'style-loader',
						'css-loader' 
					]
				},
				{
					test: /\.(png|jpg|gif|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
							},
						},
					],
				},
			]
		},
		resolve: {
			extensions: ['*', '.js'],
			modules: ['node_modules', 'src']
		},
		node: {
			fs: 'empty'
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public/index.html'),
				hash: false,
				filename: 'index.html',
				inject: 'body'
			}),
			new webpack.DefinePlugin(envKeys),
			new CopyPlugin([
				{ from: 'public/css', to: 'css' },
				{ from: 'public/fonts', to: 'fonts' },
				{ from: 'public/images', to: 'images' },
				{ from: 'public/manifest.json', to: 'manifest.json' },
			]),

		],
		devtool: 'source-map'
	}
	return defaultobject;
};