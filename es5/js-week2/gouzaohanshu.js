function dog(name,age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log("name"+this.name);
    }
}

var obj =new  dog("la",2);
obj.sayName();
console.log(obj);
console.log(obj.age);































