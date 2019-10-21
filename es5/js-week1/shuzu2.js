var arr = new Array();
var obj = {};

console.log("constructor" in arr);
console.log("constructor" in obj);

console.log("sort" in arr);
console.log("sort" in obj);
var name;
var arr2 =[
    name,
    {
        name:"la"
    },
    3,
    function(){
        var a;
        console.log(this.length);
    }
]
console.log(arr2[2]);
console.log(arr2[3]());

var arr3 = new Array(3,4,1,6,7,3,8,9,4);
  var r =0;
for(var key in arr3){
    var l =arr3[key];
     r +=l;
    console.log(r);
}
console.log(r);
