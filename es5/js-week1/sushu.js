for(var i=10;i<=100;i++){
    var a=0;
    for(var m=2;m<i;m++){
        if(i%m==0){
            a=1;
            break;
        }
    }
    if(a==0){console.log(i);}
}
