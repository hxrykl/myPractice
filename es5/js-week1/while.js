console.log("1x1正三角");

var x= 1;
while(x<=9){
    var y=1;
    while(y<=x){
        var r = x*y;
        console.log("",y,"x",x,"=",r);
        y++;
    }
    x++;
}



console.log("1x1倒三角");
var n=9;
while(1<=n){
    var m=1;
    while(m<=n){
        var l = m*n;
        console.log("",m,"x",n,"=",l);
        m++;
    }
    n--;
}
