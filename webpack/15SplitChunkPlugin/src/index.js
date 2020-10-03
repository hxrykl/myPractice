

import _ from 'lodash'; //假设1mb大小

// //业务代码 假设1mb大小
console.log(_.join(['a', 'b', 'c'], '***'));


//打包出来的文main.js件 2mb大小，
//每次代码改变都要重新加载2mb大小文件
//文件大，加载时间长

//由2mb大小 main.js拆分出 1mb大小main.js 和 1mb大小lodash.js
//js文件可并行加载，且加载速度可能快与2mb大小main.js文件
//同时拆分出来的代码是为了当1mb main.js改变，
//页面重新加载时，因为浏览器缓存原因，只加载改变的main.js文件
//而不会重新加载未改变的ladash.js文件，进而提升速度

function getComponent() { //异步加载模块的代码需要babel-plugin-dynamic-import-webpack解析，在.babelrc文件写入plugins: ["dynamic-import-webpack"]
	return import(/*webpackChunkName:"lodash"*/'lodash').then(({default: _}) => {
		var elemnt = document.createElment('div');
		elemnt.innerHTML = _.join(['dell', 'lee'], '-');
		return elemnt;
	})
}

getComponent().then(elemnt => {
	document.body.appendChild(elemnt);
})

