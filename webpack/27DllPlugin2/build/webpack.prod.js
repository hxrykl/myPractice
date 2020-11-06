const path = require('path');//
const prodConfig = {
	mode: 'production',
	devtool: 'cheap-moudle-source-map',//报错指向原始源代码
	output: { //打包好的文件放至
		filename: '[name].[contenthash]js',//用哈希值是为了代码修改重新打包时，让浏览器更新缓存
		chunkFilename: '[name].[contenthash].js',//代码不变时哈希值也不会变，(旧版本的webpack哈希值可能会变)
	}
}
module.exports =  prodConfig