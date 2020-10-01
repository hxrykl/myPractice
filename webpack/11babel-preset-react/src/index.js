// import "@babel/polyfill";
// import 'regenerator-runtime/runtime';//babel7.4之后替代@babel/polyfill

import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component{//创建一个可以渲染出div内容的组件
	render() {
		return <div>hello world</div>
	}
}

ReactDom.render(<App />, document.getElementById('root'));//将组件挂载到页面