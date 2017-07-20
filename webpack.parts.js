const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',
		host,
		port,
		overlay: {
			errors: true,
			warnings: true,
		},
	},
});

exports.babel = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.js$/,
				include,
				exclude,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
				},
			},
		],
	},
});

exports.loadCSS = ({ include, exclude} = {}) => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				include,
				exclude,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
});

exports.extractCSS = ({ include, exclude, use }) => {
	const plugin = new ExtractTextPlugin({
		filename: '[name].css',
	});

	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include,
					exclude,
					use: plugin.extract({
						use,
						fallback: 'style-loader',
					}),
				},
			],
		},
		plugins: [ plugin ],
	};
};

exports.loadImages = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				test: /\.(png|jpg|svg)$/,
				include,
				exclude,

				use: {
					loader: 'url-loader',
					options,
				},
			},
		],
	},
});

exports.loadFonts = ({include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				include,
				exclude,

				use: {
					loader: 'file-loader',
					options,
				},
			},
		],
	},
});






