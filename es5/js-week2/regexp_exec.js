
var str= "123456-1234567dasfsdfhsdfghfghgsg341276-3214132dfvgsdtgvsfyb1234456-435632432544ghgdhg";
var pat=/\d{3,}-\d{4,}/g;

console.log(pat.source);
do{
    var re =pat.exec(str);
    console.log(re);
}
while(
    pat.lastIndex != 0
);

var re2;
while(  (re2 =pat.exec(str)) != null){
    console.log(re2);
}


var p =new RegExp("hello","ig");
console.log(p.source);
console.log(p.flags);























