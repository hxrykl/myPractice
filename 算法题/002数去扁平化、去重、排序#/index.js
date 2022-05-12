/*
数组扁平化、去重、排序、
*/

let arr = [[1,2,3],[123,23,3],[3,4,6,7,2],43,5,6,[1,[2,[3,[4,5]]]]]

let flatArr = arr.flat(Infinity)

let setArr = Array.from(new Set(flatArr))

let newArr = setArr.sort((a, b) => {return a-b})

console.log(newArr)