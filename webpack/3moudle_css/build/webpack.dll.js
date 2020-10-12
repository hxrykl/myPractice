const path = require('path');
const webpack = require('webpack');
module.exports = {
	mode: 'production',
	entry: {
		vendors: ['lodash'],
		react: ['react', 'react-dom']
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve(__dirname, '../dll/[name].manifest.json')
		})
	],
	output: {
		library: '[name]',//将打包成的文件通过一个变量名暴露于全局环境
		filename: '[name].dll.js',
		path: path.resolve(__dirname, '../dll')
	}
}