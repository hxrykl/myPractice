let arr = [
    {
        age:3,
        name:"la",
        heigh:70
    },
    {
        age:5,
        name:"tre",
        heigh:90,
    },
    {
        age:4,
        name:"ba",
        heigh:80
    }
]
function nameComparator(name){
    return function(a,b){
        if(a[name]>b[name]){
            return 1;
        }else{
            return -1;
        }
    }
}
//
function comparator(a,b){
    if(a.age>b.age){
        return 1;
    }else{
        return -1;
    }
}
//调用函数时a,b
/*console.log("按照年龄",arr.sort(function(a,b){
    if(a.age>b.age){
        return 1;
    }else{
        return -1;
    }
}));*/
console.log("按照年龄2",arr.sort(comparator));

let name = "name";
console.log("姓名字符编码",arr.sort(nameComparator(name)));

let age = "age";
console.log("按照年龄",arr.sort(nameComparator(age)));

let heigh = "heigh";
console.log("按照身高",arr.sort(nameComparator(heigh)));






