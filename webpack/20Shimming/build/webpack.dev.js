const path = require('path');//
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = {
	mode: 'development',
	devtool: 'cheap-moudle-eval-source-map',//报错指向原始源代码
	devServer: {//开启web服务器,解决了绝对路径下打开项目不能发起ajax请求问题
		contentBase: path.join(__dirname, "dist"),
		open: true,//自动打开浏览器
		// port: 8080,//默认端口
		proxy: {//跨域代理
			'/api': 'http://localhost:3000',
		},
		hot: true,//开启热模块替换
		// hotOnly: true//如果热模块替换功能失效，浏览器将不能自动刷新页面
	},
	plugins: [//可以再webpack运行到某个时刻时,帮助你处理某些事
		new webpack.HotModuleReplacementPlugin()
	],
}

module.exports = merge(commonConfig, devConfig);