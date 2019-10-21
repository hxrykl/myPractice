


for(var i=1;i<=9;i++){
    for(var n=0;n<=9;n++){
        for(var m=0;m<=9;m++){
            var a=i*100+n*10+m;
            var b=i*i*i+n*n*n+m*m*m;
            if(a==b){
                console.log(a);
            }
        }
    }
}
