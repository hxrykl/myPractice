/*
	给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
	输入: "A man, a plan, a canal: Panama"
	输出: true

	输入: "race a car"
	输出: false
*/

/*双指针*/
var isPalindrome = function(s) {
	let pat = /[a-zA-Z0-9]/i,
		star = 0,
		end = s.length - 1
	while(star <= end) {
		if(!pat.test(s[star])) {
			star++
			continue
		}
		if(!pat.test(s[end])) {
			end--
			continue
		}

		if(s[star].toLowerCase() !== s[end].toLowerCase()) {
			return false
		}
		star++
		end--
	}

	return true
};