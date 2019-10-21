//迭代器
let arr = ["terry","larry","tom","jacky"];
//获取迭代器
let values_iterator = arr.values();
//通过迭代器获取数组中的元素
while(!(item = values_iterator.next()).done){
    console.log(item.value);
}

//使用for  of 遍历迭代器
let entry_iterator = arr.entries();
for (let entry of entry_iterator){
    console.log("数组键对",entry);
}

//使用for of 遍历数组
for (let item of arr){
    console.log("数组值：",item);
}

//使用for in 遍历数组拿到的是索引
for (let item in arr){
    console.log("索引：",item);
}

//for循环
//while循环
//do while循环
//for in 循环
//for of 循环
//从values,entries,keys拿迭代器
//至少八种循环去遍历数组

