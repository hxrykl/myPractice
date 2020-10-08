
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDom from 'react-dom';
import Home from './home.js';
import List from './List.js';

class App extends Component{//创建一个可以渲染出div内容的组件
	
	render() {
		return (
			<BrowserRouter>
				<div>
				<Route path='/' exact component={Home} />
				<Route path='/List' component={List} />
				</div>
			</BrowserRouter>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));//将组件挂载到页面