var path = require("path");
var webpack = require("../../");
module.exports = [
	{
		name: "one-entry",
		entry: {
			pageA: "./pageA",
		},
		output: {
			path: path.join(__dirname, "js"),
			filename: "[name]_one.js"
		},
		plugins: [
			new webpack.optimize.ModuleConcatenationPlugin()
		],
		stats: {
			maxModules: Infinity,
			exclude: () => false
		}
	},
	{
		name: "two-entries",
		entry: {
			pageA: "./pageA",
			pageB: "./pageB",
		},
		output: {
			path: path.join(__dirname, "js"),
			filename: "[name]_two.js"
		},
		plugins: [
			new webpack.optimize.ModuleConcatenationPlugin()
		],
		stats: {
			maxModules: Infinity,
			exclude: () => false
		}
	}
];
