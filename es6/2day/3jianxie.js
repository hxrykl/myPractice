let obj ={
    name:"te",
    age:12,
    sayName(){
        console.log('my name is ',this.name);
    },
    sayAge:()=>{
        console.log(this.age);
    }
}

obj.sayName();
//这时this指向全局对象
obj.sayAge();



















