// This file isn't transpiled, so mush use CommonJS and ES5

// Register babel to transpile before ourt tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};	//treat "import './index.css';" from file index.js as an empty function

