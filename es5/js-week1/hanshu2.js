
var obj= new Object();
obj.name="terry";


obj.age=12;
console.log(obj);
console.log(obj.age);
console.log(obj["name"]);
console.log(obj.name);
console.log("创建对象"+obj.constructor);
console.log(obj.hasOwnProperty('name'));
console.log(obj.propertyIsEnumerable('name'));

console.log(obj.isPrototypeOf('name'));
var fan = obj.toString();
console.log(fan);
//toString(obj);
var val = obj.valueOf();
console.log(val);
//valueOf(obj);

console.log('对象序列化和反序列化');
var obj1 = {
    name:"lary",
    age:12,
    gender:"male",
    go:"bar"
};
console.log(obj1);
var json = JSON.stringify(obj1);
console.log(json);
console.log('对象的遍历');
for(var key in obj1){
    console.log(key);
    var value = obj[key];
    console.log(key,value);
}
console.log('out');
    console.log(key);

    console.log(key,value);
console.log("name" in obj);
