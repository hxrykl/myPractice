let prot =  Object.getPrototypeOf([])
console.log("检测原型：",prot,prot === Array.prototype);

let prot2 = Object.setPrototypeOf([1,2,3],Object.prototype);
console.log(prot2);

let obj = {
    anme:"lala",
    age:14,
    gender:"male"
}

let ob1 = Object.keys(obj);
let ob2 = Object.values(obj);
let ob3 = Object.entries(obj);
console.log("属性名：",ob1,"属性值",ob2,"属性名/值",ob3);














