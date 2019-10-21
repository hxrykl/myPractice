
var str = "abc1234-6789345bwscsadwf1234-4567890dawgjhgh";
var pat = new RegExp("\\d{4}-\\d{7}","ig");
var pa =/[0-9]{4}-[0-9]{7}/ig;

var p =/.*/g;
var p1=/\D*/g;
var p2=/[^0-9]{2,}/g;
var p3=/\w{2,}/g;
var p4=/([a-z]{2,})([0-9]{3,})/g;

var re4=p4.exec(str);
var re3=p3.exec(str);
var re2 =p2.exec(str);
var re1=p1.exec(str);
var re = pat.exec(str);
var r = p.exec(str);
var res= pa.exec(str);

console.log("([a-z]{2,})([0-9]{3,}):",re4);
console.log("\w{2,}",re3);
console.log("[^0-9]{2,}",re2);
console.log("\D*:",re1);


console.log("==================");
console.log("",re,".:",r);

console.log("//:",res);
