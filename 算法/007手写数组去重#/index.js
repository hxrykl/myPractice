/*
手写数组去重
*/


//方法一：新建数组-排序
function mySet(arr) {
	arr.sort((a, b) => a-b)
	let newArr = []
	for(let k = 0; k < arr.length; k++) {
		if(arr[k] === arr[k-1]) continue
		newArr.push(arr[k])
	}
	return newArr
}

//方法一：新建数组-不排序
function mySet(arr) {
	let newArr = []
	for(let k = 0; k < arr.length; k++) {
		if(newArr.includes(arr[k])) continue //k !== arr.indexOf(k)
		newArr.push(arr[k])
	}
	return newArr
}

//方法二：原有数组处理
function mySet(arr) {
	arr.sort((a, b) => a-b)
 	let k = 0;
	while(k < arr.length) {
    	if(arr[k] === arr[k-1]) arr.splice(k, 1)
        else k++
    }
	return arr
}

//方法二：原有数组处理-不排序
function mySet(arr) {
 	let k = 0, f,l;
	while(k < arr.length) {
		f = arr.indexOf(arr[k])
		l = arr.lastIndexOf(arr[k])
    	while(f !== l) {
        	arr.splice(l, 1)
         	f = arr.indexOf(arr[k])
			l = arr.lastIndexOf(arr[k])
        }
        k++
    }
	return arr
}