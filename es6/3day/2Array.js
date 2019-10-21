//将类数组转换成数组
let array_like = {"0":"ter","1":"lal",length:2}
//类数组对象
console.log(array_like);
//从数组对象解构出slice方法
let {slice} =[];
//类似
//let array = Array.prototype.slice;
let array = slice.call(array_like,0);
console.log(array);

//第二种方法
console.log("类数组转换成数组2",Array.from(array_like));


let  set = new Set([1,2,3,1,2,3,4,5,6,6,6]);
console.log("去重：",set);
console.log("再转换成数组",Array.from(set));

















