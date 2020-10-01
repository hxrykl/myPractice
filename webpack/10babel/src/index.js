// import "@babel/polyfill";
//import 'regenerator-runtime/runtime';babel7.4之后替代@babel/polyfill
const arr = [
	new Promise(() => {}),
	new Promise(() => {})
]

arr.map(item => {
	console.log(item);
})