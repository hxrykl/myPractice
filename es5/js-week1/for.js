console.log("正三角");
var a = "x";
var b = "=";
for (var x = 1;x <= 9;x++){
    for(var y = 1;y<=x;y++){
        var r = x*y;
        console.log("",x,a,y,b,r);
    }
}


console.log("倒三角");

for(var n =1;n<=9;n++){
    for(var m=n;m<=9;m++){
        var l =n*m;
        console.log("",n,"x",m,"=",l);
    }
}
