const path = require('path');//

module.exports = {
	// entry: './src/index.js',//打包开始文件
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{//规则
			test: /\.jpg$/,//匹配符合.jpg结尾的文件
			use: {
				loader: 'file-loader'//打包的方案
			}
		},{//规则
			test: /\.vue$/,//匹配符合.jpg结尾的文件
			use: {
				loader: 'vue-loader'//打包的方案
			}
		}]
	},
	output: { //打包好的文件放至
		filename: 'index.js',//打包好的文件命名
		path: path.resolve(__dirname, 'dist')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}