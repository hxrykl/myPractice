function add(){
    console.log("我是一个函数");
}
add();
var a =add;
a();
var ar ={
    name:"对象",
    af:add,
    av:a
}
ar.af();
ar.av();
console.log(ar.av);
function say(){
    if(true){
        console.log("hello wrold");
    }
}
say();

