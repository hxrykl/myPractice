Array.prototype.myPush = function (){
    //var l =this.length;
    for(var key in arguments){
        var kuai = arguments[key];
        this[this.length++] = kuai;
    }
    return this.length;
}

var arr =[1,2];
var re =arr.myPush("la","te","jk");
console.log(re,arr);


Array.prototype.myPop = function(){
    var l = this.length-1;
    var k;
    var r = 0;
    for(var key in arguments){
        var kuai = arguments[key];
        this[(+key)]= kuai;

    }

    return r;

}

var arr1 =[1,3,4,2,8,5,1];
var re1 =arr1.myPop();
console.log(re1,arr1);

var re2 =arr1.pop();
console.log(re2,arr1);
