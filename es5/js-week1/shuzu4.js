
Array.prototype.myPop = function(){
    var l =this.length-1;
    var k= this[l];
    //delete this[l];
    //this.splice(l,1);
    this.length=l;
    return k;
}

var arr1 =[1,3,4,2,8,5,1];
var re1 =arr1.myPop();
console.log(re1,arr1);

var re2 =arr1.pop();
console.log(re2,arr1);
