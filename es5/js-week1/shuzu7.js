
arr = [12,29,3,32,4,8];
console.log(arr);
arr.sort(
    function(a,b){
        if(a<b){return -1;}
        else{return 1;}
    }
)

console.log(arr);

console.log("my");
Array.prototype.mysort = function(){
    array = [];
    var l =this.length;
        var min;
        for(var key in this){
            var m=this[key];
            if(min == undefined){
                min=m;
            }else{
                if(10<=min && 10<=m){
                    var min1 = min%10  ;
                    var m1=m%10 ;
                    min /=10;
                    m /=10;
                    if(min>m){
                        min=m;
                    }else if(min<m){
                        min=min;
                    }else{
                        if(min1>m1){
                            min=m;
                        }else if(min1<m1){
                            min=min;
                        }else{
                            min=min;
                        }
                    }
                    return min;
                }else if(10<=min && m<10){
                    min /=10;
                    if(min<m){
                        min=min;
                    }else{
                        min=m;
                    }
                    return min;
                }else if(min<10 && 10<=m){
                    m /=10;
                    if(min>m){
                        min=m;
                    }else{
                        min=min;
                    }
                    return min;
                }
            }
            return min;
            console.log(min);
        }
}
console.log("lai");
arr1 = [12,29,3,32,4,8];
var arr2 =arr1.mysort();
console.log(arr2,arr1);









