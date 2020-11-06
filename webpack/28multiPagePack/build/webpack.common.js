const path = require('path');//
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');//会在打包结束后生成一个html文件，并把打包生成的js引入html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//css代码分割
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//最小输出
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');
const fs = require('fs');//node核心模块

const makePlugins = (configs) => {
	const plugins = [
		new CleanWebpackPlugin()
	]

	Object.keys(configs.entry).forEach(item => {
		plugins.push(
			new HtmlWebpackPlugin({
				template: 'src/index.html',//指定模板
				filename: `${item}.html`,//文件命名
				chunks: ['runtime', 'vendors', item]//指定引入的js文件
			})
		)
	});
	const files = fs.readdirSync(path.resolve(__dirname, '../dll'));//将映射文件夹的文件路径集合到数组
	files.forEach(file => {
		if (/.*\.dll.js/.test(file)) {
			plugins.push(new AddAssetHtmlWebpackPlugin({//将文件插入script标签里，达到模块全局变量作用
				filepath: path.resolve(__dirname, '../dll', file)
			}))
		}
		if (/.*\.manifest.js/.test(file)) {
			plugins.push(new webpack.DllReferencePlugin({ 
				manifest: path.resolve(__dirname, '../dll', file)
			}))
		}
	});
	return plugins;
}

const commonConfig = {
	entry: {
		index: './src/index.js',//默认
		list: './src/list.js',
		detail: './src/detail.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],//引入模块文件名没有后缀时，按顺序匹配
		alias: {
			src: path.resolve(__dirname, '../src')//引入模块地址重定向
		},
	},
	module: {
		rules: [{ 
			test: /\.jsx?$/, 
			exclude: /node_modules/, //匹配的文件不在/node-modules/文件夹里，第三方模块代码已经做好转换了
			use: [{
				loader: 'babel-loader'
			}]
		}]
	},
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
	performance: false,//取消警告
	output: { //打包好的文件放至
		filename: '[name].js',//多份打包时输出的文件名不能相同，这里用占位符解决
		chunkFilename: '[name].chunk.js',//分割引入模块时，在原本的名字上拼接一个字符
		path: path.resolve(__dirname, '../dist')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}

commonConfig.plugins = makePlugins(commonConfig);

module.exports = (env) => {
	if (env && env.production) {
		return merge(commonConfig, prodConfig);
	} else {
		return merge(commonConfig, devConfig);
	}
}