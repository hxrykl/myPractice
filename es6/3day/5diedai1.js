//迭代字符串
let iterator = "hello"[Symbol.iterator]();
for(let b of iterator){
    console.log("字符串：",b);
}

//迭代数组
let iterator2 = [1,2,3][Symbol.iterator]();
for(let c of iterator2){
    console.log("数组:",c);
}
//类似
let iterator3 = [1,2,3].values();
for(let d of iterator3){
    console.log("数组2",d);
}

//迭代agrument
(function fun(){
    let iterator4 = arguments[Symbol.iterator]();
    for(let e of iterator4){
        console.log("arguments:",e);
    }
})("te","la","tom");





