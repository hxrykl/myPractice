Array.prototype.myunshift = function(){
    arr1 = [];
    var l =this.length;
    var le=arguments.length;
    for(var i=0;i<l;i++){
        arr1[i]=this[i];
    }
    for(var key in arguments){
        var a=+key;
        this[a]=arguments[key];
    }
    for(var n=0;n<l;n++){
        this[n+le]=arr1[n];
    }
    l = this.length;
    return l;

}

arr =[1,3,5,7];
var re =arr.myunshift(2,4,6);
console.log(re,arr);


arr1 =[1,3,5,7];
var re1 =arr1.unshift(2,4,6);
console.log(re1,arr1);
