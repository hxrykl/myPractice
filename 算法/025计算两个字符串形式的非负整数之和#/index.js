/*
计算两个字符串形式的非负整数之和

例 '111' + '2222' = '2333'
*/

function strNums (num1, num2) {
	let num = '',
		temp = 0,
		l1 = num1.length -1,
		l2 = num2.length -1
	while(0 <= l1 || 0 <= l2){
		let s = (0 <= l1 ? +num1[l1] : 0) + (0 <= l2 ? +num2[l2] : 0) + temp
		temp = s >= 10 ? 1 : 0
		num = s % 10 + num
		l1--
		l2--
	}
	return num
}