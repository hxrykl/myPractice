require('babel-polyfill')
let arr = ['te','la','to'];

let obj = {
    name:"te",
    age:"12",
    gender:"male"
}

let {name,gender} = obj;
console.log(name,gender);
arr.forEach((item) => {
    console.log(item);
})

function love(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('true love');
        },3000)
    })
}



love()
.then((result)=>{
    console.log('ok',result);
})
.catch(()=>{
        console.log('no');
    })









