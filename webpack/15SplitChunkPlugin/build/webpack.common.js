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
	optimization: { 
		splitChunks: {//代码分割
			chunks: 'all',//异步和同步都能使用
		    minSize: 20000,//模块小于时不做代码分割
		    // maxSize: 0,//模块大小超出时再次分割
		    minChunks: 1,//最少分割数
		    maxAsyncRequests: 30,//最多异步分割的模块
		    maxInitialRequests: 30,//最多同步分割的模块
		    automaticNameDelimiter: '~',//文件名连接符
		    name: true,
		    cacheGroups: {//决定分割出来的代码放至那个文件里
		      vendors: {
		      	test: /[\\/]node_modules[\\/]/,//模块满足条件时
		      	priority: -10,//当模块满足多个条件时，通过此值大小决定优先级
		      	filename: 'vendors.js',//同步模块分割时才能使用
		      },
		      // default: false
		      default: { //默认
		      	priority: -20,
		      	reuseExistingChunk: true,//如果一个模块已经被打包过了，将不会被再次打包，会引用第一次打包的代码
		      	filename: 'common.js'
		      }
		    }
		}
	},
	output: { //打包好的文件放至
		filename: '[name].js',//多份打包时输出的文件名不能相同，这里用占位符解决
		path: path.resolve(__dirname, '../dist')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}