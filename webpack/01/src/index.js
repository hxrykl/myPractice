//这块引入模块代码将被webpack打包翻译成浏览器可读的代码
import Header from './header.js'//ES Module模块引入方式
import Content from './content.js'
// import Sidebar from './sidebar.js'
var Sidebar = require('./sidebar.js')//CommonJS模块引入规范

new Header();

new Sidebar();

new Content();

// var ns = require('./ns.jpg')
import ns from './ns.jpg'

console.log(ns)

let imgs = new Image()
imgs.src = ns
let root = document.getElementById('root')
root.append(imgs)


// import './index.css'
import './ns.scss'