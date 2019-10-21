//对象解构
let {name,age} = {name:'te',age:12}
let {nam:na,ag} = {nam:"la",ag:13}

let{name2:name2,age2:age2} = {name2:"te",age2:12}

let {name3:name3,age3:gender} = {name3:"te",age3:12}
console.log(name,name2,name3,na);
console.log(age,age2,gender,ag);

let obj ={
    realname:"ter",
    address:{
        province:"山西",
        city:"太原",
        area:"某区"
    }
}

let {realname,address:{city},address:a} = obj;
console.log(realname,city,a);

//数组解构
let [a1,b,c] = [1,3,6];
console.log(a1,b,c);
//注意对应位置
let [e,h,i,[f,f2,f3],g] = [1,2,3,[12,4],5];
console.log(e,f,f2,f3,g);

//默认值被替代
let {fa,le="ta"} = {fa:"fu",le:"hi"}
console.log(fa,le);

//进一步说明默认被替代
function ajax({url,method="get",data={},success}){
    console.log("url:",url);
    console.log("method:",method);
    console.log("data:",data);
    console.log("success:",success);
}

ajax({
    url:"http://39.105.108.131",
    method:"post",
    success:function(){

    }
})

//
//再进一步说明默认被替代，被22jiegou.js调用
module.exports ={
    sayHello(){
        console.log("hello");
    },
    sayName(){
        console.log("my name is lala");
    },
    sayAge(){
        console.log('my age is 12');
    }
}



















