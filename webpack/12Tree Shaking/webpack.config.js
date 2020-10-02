const path = require('path');//
const HtmlWebpackPlugin = require('html-webpack-plugin');//会在打包结束后生成一个html文件，并把打包生成的js引入html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	mode: 'production',
	devtool: 'cheap-moudle-source-map',//报错指向原始源代码
	entry: {
		main: './src/index.js',//默认
	},
	devServer: {//开启web服务器,解决了绝对路径下打开项目不能发起ajax请求问题
		contentBase: path.join(__dirname, "dist"),
		open: true,//自动打开浏览器
		// port: 8080,//默认端口
		proxy: {//跨域代理
			'/api': 'http://localhost:3000',
		},
		hot: true,//开启热模块替换
		hotOnly: true//如果热模块替换功能失效，浏览器将不能自动刷新页面
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
		new CleanWebpackPlugin(),//打包之前运行,删除dist文件夹
		new webpack.HotModuleReplacementPlugin()
	],
	// optimization: { //
	// 	usedExports: true, //对于导入的模块，只做按需打包，模块中没有引入的代码不打包
	// },
	output: { //打包好的文件放至
		publicPath: './',//所有打包生成的文件之间的引用都增加一个根路径
		filename: '[name].js',//多份打包时输出的文件名不能相同，这里用占位符解决
		path: path.resolve(__dirname, 'dist')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}