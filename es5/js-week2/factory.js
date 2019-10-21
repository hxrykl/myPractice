function factory(name,age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function(){
        console.log("my name is"+this.name);
       //return this.name;
    };
    return obj;
}

var obj1 = factory("te",12);

var obj2 = factory("la",13);

console.log(obj1,obj2);

console.log(obj1.sayName());
console.log(obj2.sayName());

obj1.sayName();
obj2.sayName();































