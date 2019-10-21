//将obj转换为一个可迭代的对象
let obj = {"0":"tet","1":"lala","2":"tom"};
obj[Symbol.iterator] = function* (){
    for(let key in obj){
        let val = obj[key];
        yield  [key,val];
    }
}
for(let c of obj){
    console.log(c);
}
//entries()方法的由来
obj.myentries = obj[Symbol.iterator];
console.log(obj.myentries().next());
console.log(obj);
for(let o of obj.myentries()){
    console.log(o);
}








