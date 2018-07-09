const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {
 entry: 'all-tests.js',
 output: {
   filename: 'testBundle.js'
},
 target: 'node',
 externals: [nodeExternals()],
 node: {
   fs: 'empty'
 },

 plugins: [
   new WebpackShellPlugin({
     onBuildExit: "mocha testBundle.js"
   })
 ]
};

module.exports = config;