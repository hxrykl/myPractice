// import './style.css';
// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);

// btn.onclick = function() {
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.appendChild(div);
// }
import counter from './counter'
import number from './number'
counter();
number();

//如果开启了热模块替换功能
//你希望改变一个模块文件时浏览器仅仅重新执行当前模块代码
//且不重新执行其他模块代码时
if (module.hot) {
	module.hot.accept('./number', () => { //之所以在css文件的热模块替换处理上不需要写这样的单独重新运行代码，是因为style-loader已内嵌处理
		document.body.removeChild(document.getElementById('number'));
		number();
	})
}
