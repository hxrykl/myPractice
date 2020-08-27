const path = require('path');//

module.exports = {
	entry: './index.js',//打包开始文件
	output: { //打包好的文件放至
		filename: 'bundle.js',//打包好的文件命名
		path: path.resolve(__dirname, 'bundle1')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}