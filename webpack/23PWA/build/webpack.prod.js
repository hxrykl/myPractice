const path = require('path');//
const WorkboxPlugin = require('workbox-webpack-plugin');//辅助PWA
const prodConfig = {
	mode: 'production',
	devtool: 'cheap-moudle-source-map',//报错指向原始源代码
	plugins: [//可以再webpack运行到某个时刻时,帮助你处理某些事
		new WorkboxPlugin.GenerateSW({//PWA技术底层来自seiviceWorker
			clientsClaim: true,
			skipWaiting: true
		})//会生成precache-manifest和service-worker两个文件说明成功
	],
	output: { //打包好的文件放至
		filename: '[name].[contenthash].js',//用哈希值是为了代码修改重新打包时，让浏览器更新缓存
		chunkFilename: '[name].[contenthash].js',//代码不变时哈希值也不会变，(旧版本的webpack哈希值可能会变)
	}
}
module.exports =  prodConfig