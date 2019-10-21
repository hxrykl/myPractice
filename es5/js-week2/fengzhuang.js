/*
var obj = new Object();
obj.name = "je";
obj.sayName = function(){
    console.log("my name is"+this.name);
}


var obj2 = new Object();
obj2.name ="la";
obj2.sayName = function(){
    console.log("my name is"+this.name);

}

*/
function factory(name,age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;

    obj.sayName = function(){
        console.log("my name is"+this.name);
    }
    obj.sayAge = function(){
        console.log("今年"+this.age+"岁");
    }
    return obj;
}


var obj = factory("te",13);
var obj2 = factory("la");
obj.sayName();
obj.sayAge();
obj2.sayName();






















