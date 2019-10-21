
let set = new Set();
let set2 = new Set([1,2,3,1,3,4,5,4]);
//不能直接写对象，只能写数组
console.log(set,set2);
console.log(set.size);

//使用set和Array.from数组去重方法1
let arr = [1,3,2,3,2,4,5,5,6,4];
let set3 = new Set(arr);//利用set不允许成员重复的机制
console.log(set3);
console.log(Array.from(set3));//将可遍历的对象转换成数组

//方法2使用rest和set
console.log("方法2：",[...set3]);//剥离成员再放入数组

//方法3使用es5中的indexOf(返回某个指定的字符串值在字符串出现的位置，如果首次出现，返回-1)
Array.prototype.myInfo = function(){
    var newArr = [];
    for(var i = 0;i<arr.length;i++){
        var a = newArr.indexOf(arr[i]);
        if(a == -1){
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}
console.log("方法3：",arr.myInfo());





