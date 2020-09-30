const express = require('express');
const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');//
const config = require('./webpack.config.js');//引入当前目录下的webpack配置文件
const complier = webpack(config);//通过webpack库结合配置文件实现一个即时编译器

const app = express();//创建服务器实例

app.use(webpackDevMiddleware(complier, {//使用中间件执行编译器
	publicPath: config.output.publicPath//输出地址可以不写，使用默认配置
}));

app.listen(3000, () => {//监听3000端口
	console.log('server is running!');
})