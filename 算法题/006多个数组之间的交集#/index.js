/*
求多个数组之间的交集
要求输出的每个元素都是唯一的
*/

//方法一：
function fun(...arrs){
	arrs.sort((a, b) => {return a.length - b.length})//求最短数组
  	arrs[0].sort((a, b) => {return a - b})//最短数组排序
    let res = []
    for(let k = 0; k < arrs[0].length; k++) {
      	if(arrs[0][k] === arrs[0][k-1]) {continue}//去重
    	let boo = arrs.every(item => {
        	return item.indexOf(arrs[0][k]) !== -1
        })
        boo && res.push(arrs[0][k])
    }
    return res
}

//方法二
const getIntersection = (...arrs) => {
    return Array.from(new Set(arrs.reduce((total, arr) => {//reduce不设初始值时默认第一个元素
        return arr.filter(item => total.includes(item));
    })));
}