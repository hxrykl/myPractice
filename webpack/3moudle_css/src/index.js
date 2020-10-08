// import "@babel/polyfill";
// import 'regenerator-runtime/runtime';//babel7.4之后替代@babel/polyfill

import axios from 'axios';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component{//创建一个可以渲染出div内容的组件
	componentDidMount() {//页面加载完毕执行
		axios.get('/react/api/header.json')
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
	}
	render() {
		return <div>hello world</div>
	}
}

ReactDom.render(<App />, document.getElementById('root'));//将组件挂载到页面