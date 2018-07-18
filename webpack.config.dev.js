import path from 'path';

export default {
	debug: true,	//enables debugging info while running build
	devtool: 'inline-source-map',	//tells webpack to generate a source map; its like a pdb file that maps bundled & minified code back to your original code
	noInfo: false,	//tells webpack to display a list of all files that its bundling
	entry: [
		path.resolve(__dirname, 'src/index')	//define an entry point to application
	],
	target: 'web',	//could set this to 'node' or 'electron; depending on our application
	output: {
		path: path.resolve(__dirname, 'src'),	//tell webpack where to create our development bundle
		publicPath: '/',						//note that webpack wonn't actually write files; simulates the existence of the file in memory
		filename: 'bundle.js'					//we'll change this later when creating our deployment bundle.
	},
	plugins: [],
	module: {
		loaders: [	//tell webpack how to handle different file types;
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loaders: ['style','css']}	//if your javascript imports a non-JS file, webpack can intelligently bundle those as well.
		]
	}
}
