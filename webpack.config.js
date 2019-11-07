const path = require('path');
const port = 6666;

module.exports = {
	entry: {
		index: './example/index.js',
	},
	output: {
		path: path.resolve(__dirname, `example/public/assets`),
		publicPath: "/assets/",
		filename: "js/[name].bundle.js",
		chunkFilename: "js/[name].bundle.js",
	},
	devtool: "eval-source-map",
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, 'example/public'),
		compress: true,
		port: port,
		// writeToDisk: true,
	},
	stats: {
		maxModules: 0,
		modules: false,
		moduleTrace: false,
		reasons: false,
		hash: false,
		version: false,
		entrypoints: false,
	},
	performance: {
		maxEntrypointSize: 250000,
		maxAssetSize: 250000
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					}
				}
			},
		]
	},
};
