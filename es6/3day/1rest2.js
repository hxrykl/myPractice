//将字符串变成数组的方法
let s ="hello world";
let arr =[...s]
console.log("方法1：",arr);

//方法2
let arr2 =s.split("")
console.log("方法2：",arr2);

//方法3
let arr3 = Object.values(s);
console.log("方法3：",arr3);

//方法4
let arr4 = Array.from(s);
console.log("方法4：",arr4);

//方法5
let arr5 = Array.prototype.slice.call(s);
console.log("方法5：",arr5);















