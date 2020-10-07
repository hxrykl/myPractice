const path = require('path');
module.exports = {
	mode: 'production',
	entry: './src/index.js',
	// externals: ["lodash"],//打包过程遇到的库忽略不打包
	externals: {
		lodash: {
			commonjs: 'lodash',//规定import、require等引入的lodash库只能取名lodash
			root: '_',//规定script标签引入的lodash库只能命明_
		}
		
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'library.js',
		library: 'library',//允许script标签引入当前库
		libraryTarget: 'umd',//允许任何形式去引用当前库 import、require等
		// libraryTarget: 'this',//将库挂载到全局的this上，通过this.library即可访问
		// libraryTarget: 'window',//将库挂载到全局的window上
	}
}