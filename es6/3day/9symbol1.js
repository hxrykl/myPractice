
let obj = new Object();
//给对象插入一个无污染的属性
obj[Symbol()] = function foo(){};
//给对象插入一个无污染的属性并能调用出来
let a = Symbol('a');
obj[a] = function bar(){};

console.log(obj);
console.log("引用",obj[a]);










