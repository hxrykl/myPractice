const path = require('path');//

module.exports = {
	mode: 'production',
	// entry: './src/index.js',//打包开始文件
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{//规则
			test: /\.(jpg|gif|png)$/,//匹配符合.jpg .gif .png结尾的文件
			use: {
				// loader: 'file-loader',//打包的方案
				loader: 'url-loader',
				options: {
					limit: 2048,//文件小于2048k时会打包成base64格式
					name: '[name]_[hash].[ext]',//placeholders占位符， [ext] 原始文件的后缀 [name] 原始文件的名字 [hash] 哈希值
					outputPath: 'images/',//指定打包文件存放的文件夹
				}
			}
		},{//规则
			test: /\.vue$/,//匹配符合.vue结尾的文件
			use: {
				loader: 'vue-loader'//打包的方案
			}
		},{//规则
			test: /\.css$/,//匹配符合.css结尾的文件
			use: [//配合使用
			'style-loader',//将css内容挂载到style标签里
			'css-loader'//将多个css文件合并成一个css文件
			]
		},
		{//规则
			test: /\.scss$/,//匹配符合.css结尾的文件
			use: [//配合使用,从下到上，从右到左顺序打包
			'style-loader',//将css内容挂载到style标签里
			{
				loader: 'css-loader',//将多个css文件合并成一个css文件
				options:{
					importLoaders: 1 //通过import引入的样式文件使用在 css-loader 前应用的 loader 的数量
				}
			},
			'sass-loader',//将 Sass 编译成 CSS
			// 'postcss-loader'
			]
		},]
	},
	output: { //打包好的文件放至
		filename: 'index.js',//打包好的文件命名
		path: path.resolve(__dirname, 'dist')//打包好的文件存放的文件夹，必须是绝对路径；__dirname代指当前文件下的绝对路径，bundle指定文件夹名
	}
}