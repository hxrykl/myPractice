const path = require('path');//
const HtmlWebpackPlugin = require('html-webpack-plugin');//会在打包结束后生成一个html文件，并把打包生成的js引入html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
	entry: {
		main: './src/index.js',//默认
	},
	module: {
		rules: [{ 
			test: /\.js$/, 
			exclude: /node_modules/, //匹配的文件不在/node-modules/文件夹里，第三方模块代码已经做好转换了
			loader: "babel-loader" ,//将es6语法转换为es5语法
		}]
	},
	plugins: [//可以再webpack运行到某个时刻时,帮助你处理某些事
		new HtmlWebpackPlugin({//打包之后运行，生成index.html文件
			template: 'src/index.html'//指定模板
		}),
		new CleanWebpackPlugin()//打包之前运行,删除dist文件夹
	],
	output: { //打包好的文件放至
		// publicPath: './',//所有打包生成的文件之间的引用都增加一个根路径
		filename: '[name].js',//多份打包时输出的文件名不能相同，这里用占位符解决
		path: path.resolve(__dirname, '../dist')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}