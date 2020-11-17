/*
给定一个int数组=[6，4，-3，5，-2，-1，0，1，-9]，将所有正数向左移动，并将所有负数向右移动。尽量使其时间复杂度为O（n），空间复杂度为O（1）。
*/

function sortArr(arr) {
	let right = [], left = [], k = 0;
	while(k < arr.length) {
		if(arr[k] === 0) {
			right.push(arr[k])
		} else if(arr[k] > 0){
			right.unshift(arr[k])
		} else {
			left.push(arr[k])
		}
		k++
	}
	return [...right,...left]
}