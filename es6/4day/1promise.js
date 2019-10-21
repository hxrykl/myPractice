function getPromise(){
    承诺构造函数接受一个回调函数作为参数，这个参数函数的参数是resolve,reject两个函数的指针
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=>{
            let random = Math.random();
            if(random > 0.5){
                resolve(random);
            }else{
                reject(random);
            }
        },1000);
    } );
    return promise;
}
let promise = getPromise();
console.log(promise);
//监听承诺方法.then方法指定两个回调函数，第一个是承诺兑现时执行，第二个是承诺失败时执行
//同时可以接收兑现或失败函数传回来的参数
promise.then((result)=>{
    console.log("success",result);
},(result1)=>{
    console.log("error",result1);
});







