

// import _ from 'lodash'; //假设1mb大小

// var element = document.createElment('div');
// element.innerHTML = _.join(['not', 'wan'], '-');
// document.body.appendChild(element);

//懒加载
// async function getComponent() { //异步加载模块的代码需要babel-plugin-dynamic-import-webpack解析，在.babelrc文件写入plugins: ["dynamic-import-webpack"]
// 	const {default: _} = await import(/*webpackChunkName:"lodash"*/'lodash');
// 	const element = document.createElement('div');
// 	element.innerHTML = _.join(['dell', 'lee'], '-');
// 	return element;
// }
// document.addEventListener('click', () => {
// 	getComponent().then(element => {
// 		document.body.appendChild(element);
// 	})
// })
document.addEventListener('click', () => {
	//将点击该方法才加载引入模块文件变成核心代码加载完毕，页面空闲的时候自动加载引入模块
	import(/*webpackPrefetch: true*/'./click.js').then(({default: func}) => {
		func();
	})
})



