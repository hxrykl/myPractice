Array.prototype.myshift = function(){
    var k =this[0];
    this.splice(0,1);
    return k;

}

arr =[2,5,1,7,4,9];
var re =arr.myshift();
console.log(re,arr);
