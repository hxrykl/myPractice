var con =0;
for(var i=1;i<10;i++){
    for(var n=1;n<10;n++){
        for(var m=1;m<10;m++){
            for(var l = 1;l<10;l++){
                if(i!=n && i!=m && i!=l && n!=m && n!=l && m!=l){
                    var k=i*1000+n*100+m*10+l;
                    console.log(k);
                    con++;
                }
            }
        }
    }
}
console.log("总数:"+con);
