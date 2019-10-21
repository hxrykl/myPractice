let o1 ={
    sayName(){},
    sayAge(){},
    name:"lala"
}
let o2 = {
    age:13
}
let tagert ={};
let o3  =Object.assign(tagert,o1,o2)

console.log(o3,"/////////////",tagert);

//克隆

let o4 =Object.assign({},o1);
console.log("克隆：",o4);













