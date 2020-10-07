const path = require('path');//
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');//会在打包结束后生成一个html文件，并把打包生成的js引入html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//css代码分割
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//最小输出
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');
const commonConfig = {
	entry: {
		main: './src/index.js',//默认
	},
	module: {
		rules: [{ 
			test: /\.js$/, 
			exclude: /node_modules/, //匹配的文件不在/node-modules/文件夹里，第三方模块代码已经做好转换了
			use: [{
				loader: 'babel-loader'
			}]
		},{
			test: /\.css$/,
			use: [
				// 'style-loader',
				// MiniCssExtractPlugin.loader,//替换style-loader
				{
		            loader: MiniCssExtractPlugin.loader,
		            options: {
		              // 在webpack4版本中，可在开发环境使用热模块重载
		              hmr: true,//process.env.NODE_ENV === 'development',
		              // if hmr does not work, this is a forceful method.
		              reloadAll: true,
		            },
		         },
				'css-loader',
				'postcss-loader'
			]
		}]
	},
	plugins: [//可以再webpack运行到某个时刻时,帮助你处理某些事
		new MiniCssExtractPlugin({
			// filename: '[name]aa.css',//直接引用的模块会在dist/index.html文件直接添加
			chunkFilename: '[name].chunk.css'
		}),//css代码分割
		new HtmlWebpackPlugin({//打包之后运行，生成index.html文件
			template: 'src/index.html'//指定模板
		}),
		new CleanWebpackPlugin()//打包之前运行,删除dist文件夹
	],

	optimization: { //Tree Shaking
		runtimeChunk: {//解决旧版webpack打包时manifest处理相同的源代码生成不同打包代码问题（也就是导致哈希值不同的问题），
			name: 'runtime'
		},
		//在package.json文件配置"sideEffects": ["*.css"], 取消对按需引入打包方式
		usedExports: true, //对于导入的模块，只做按需打包，模块中没有引入的代码不打包
		splitChunks: {//代码分割
			chunks: 'all',//异步和同步都能使用
			cacheGroups: {
				vendors: {
		      		test: /[\\/]node_modules[\\/]/,
		      		priority: -10,
		      		name: 'vendors',
		      	}
			}
		},
		minimizer: [ 
			new OptimizeCSSAssetsPlugin({})//最小输出
		],
	},
	// performance: false,//取消警告
	output: { //打包好的文件放至
		filename: '[name].js',//多份打包时输出的文件名不能相同，这里用占位符解决
		chunkFilename: '[name].chunk.js',//分割引入模块时，在原本的名字上拼接一个字符
		path: path.resolve(__dirname, '../dist')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}
module.exports = (env) => {
	if (env && env.production) {
		return merge(commonConfig, prodConfig);
	} else {
		return merge(commonConfig, devConfig);
	}
}