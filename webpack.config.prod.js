import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	debug: true,	//enables debugging info while running build
	devtool: 'source-map',	//tells webpack to generate a source map; its like a pdb file that maps bundled & minified code back to your original code
	noInfo: false,	//tells webpack to display a list of all files that its bundling
	entry: {
		main: path.resolve(__dirname, 'src/index'),	//define an entry point to application
		vendor: path.resolve(__dirname, 'src/vendor')
	},
	target: 'web',	//could set this to 'node' or 'electron; depending on our application
	output: {
		path: path.resolve(__dirname, 'dist'),	//tell webpack where to create our production bundle
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		// Generat an external css file with a hash in the filename
		new ExtractTextPlugin('[name].[contenthash].css'),

		//Hash the files using MD5 so that their names change only when the content changes.
		new WebpackMd5Hash(),

		// Use CommonsChunkPlugin to create a separate bundle
		// of vencdor libraries so taht they're cached separately.
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		// Create HTML file that includes reference to our bundled javascript code.
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			inject: true // automatically inject any necessary scripts into our html. removes need for <script src="bundle.js"></script> in our index.html
		}),

		// Eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [	//tell webpack how to handle different file types;
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
		]
	}
}
