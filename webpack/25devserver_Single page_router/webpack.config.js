const path = require('path');//
const HtmlWebpackPlugin = require('html-webpack-plugin');//会在打包结束后生成一个html文件，并把打包生成的js引入html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	mode: 'development',
	devtool: 'cheap-moudle-eval-source-map',//报错指向原始源代码
	entry: {
		main: './src/index.js',//默认
	},
	//开发环境下使用
	devServer: {//开启web服务器,解决了绝对路径下打开项目不能发起ajax请求问题
		historyApiFallback: true,//服务器访问任何页面都引用index.html文件，单页面应用路由的关键所在,底层实现基于connect-history-api-fallback包
		contentBase: path.join(__dirname, "dist"),//告诉服务器读取的内容文件地址
		open: true,//自动打开浏览器
		proxy: {//跨域代理 基于 http-proxy-middleware实现
			'/react/api': {//符合前缀时代替转发
				target: 'http://www.dell-lee.com',//转发的地址
				secure: false,//默认不接受https协议，值为false时接受
				pathRewrite: {//路径重写，替换，用于测试地址替换
					'header.json': 'demo.json'
				},
				changeOrigin: true//覆盖源头，以解决站点对源头的限制
			}
		},
		// index: '',//支持代理/根目录代理
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
	// optimization: {
	// 	usedExports: true
	// },
	output: { //打包好的文件放至
		publicPath: '/',//所有打包生成的文件之间的引用都增加一个根路径
		filename: '[name].js',//多份打包时输出的文件名不能相同，这里用占位符解决
		path: path.resolve(__dirname, 'dist')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}