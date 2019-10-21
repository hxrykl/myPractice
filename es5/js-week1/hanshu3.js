function han(a){
    var re;
    if(a<10){
        re = a;
    } else{
        re = "re不等于a";
    }
    return re;
}
var g= han(13);
console.log(g);
console.log(han(12));

console.log('arguments');

function add(a,b){
    console.log(arguments);
    var re = 0;
    for (var key in arguments){
        var val = arguments[key];

        re += val;
    }
    return re;
}
var result =add(19,22,11,5,3,90,43);
console.log(result);

console.log('this');

var p1 = {
    name:"larry",
    age:12,
    say:foo
}

var p2 = {
    name:"la",
    age:13,
    say:foo
}
function foo(){
    console.log("hello"+this.name);
}
p1.say();
p2.say();

p1.say.call({name:"aaa"});
var re =add.call({a:1},1,45);
console.log(re);
p1.say.apply({name:"aa"});
var r = add.apply({b:2},[9,1]);
console.log(r);
