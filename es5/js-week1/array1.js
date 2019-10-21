var name="terry";
var arr =[
    3,
    true,
    false,
    "hello",
    name,
    {
        name:"larry"
    },
    function(){
        console.log("fc");
    }
];
console.log(arr[1]);
console.log(arr[4]);
console.log(arr[6]());

var a=1;
a=a++;
console.log(a);
