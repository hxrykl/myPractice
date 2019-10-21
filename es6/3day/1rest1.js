


let o1 ={
    name:"lala",
    age:12,
    gender:"male"
}
let o2={
    name:"tat",
    age:13,
    des:{
        name:"biib",
        fress:44
    }
}
//不完全合并
let o ={o1,o2}
console.log("不完全合并:",o);
//合并两个对象的方法1,属性名相同会覆盖
let target = {};
let o3 = Object.assign(target,o1,o2);
console.log("方法1：",o3);
//方法2,将对象里的属性剥离出来
let o4 = {...o1,...o2}
console.log("方法2:",o4);





















