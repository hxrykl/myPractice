const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const prodConfig = {
	mode: 'production',
	devtool: 'cheap-moudle-source-map',//报错指向原始源代码
}
module.exports = merge(commonConfig, prodConfig);