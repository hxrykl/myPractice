'use strict';

var arr = ['te', 'la', 'to'];

var obj = {
    name: "te",
    age: "12",
    gender: "male"
};

var name = obj.name,
    gender = obj.gender;

console.log(name, gender);
arr.forEach(function (item) {
    console.log(item);
});
