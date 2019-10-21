function* foo(){
    yield  "1";
    yield "2";
    yield "3";
    return "end";
}
//generator函数执行后得到的是迭代器
console.log("generator:",foo());
//console.log("迭代器：",foo().next());
let iterator = foo();
let a;
//方法一
/*while(!(a =iterator.next()).done){
    console.log("值：",a.value);
}*/
//方法2
for(let e of iterator){
    console.log(e);
}








