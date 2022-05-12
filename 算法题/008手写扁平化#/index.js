/*
手写扁平化函数
*/


//递归
var newArr =  []
function myFlat(arr, n) {
	arr.map((item, index) => {
		if(item.constructor === Array && n > 1){
			myFlat(item, n-1)
		} else {
			newArr.push(item)
		}
	})
	return newArr
}