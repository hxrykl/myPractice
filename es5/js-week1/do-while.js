

console.log("1x1正三角形");
var x = 1;

do{
    var y = 1;
    do{

        var r = x*y;
        console.log("",y,"x",x,"=",r);
        y++;
    }
    while(y<=x);
    x++;
}
while(x<=9);

console.log("1x1倒三角形");
var n = 9;
do{
    var m  =1;
    do{
        var l = m*n;
        console.log("",m,"x",n,"=",l);
        m++;
    }
    while(m<=n);
    n--;
}
while(1<=n);
