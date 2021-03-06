
/*
无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
输入: s = "abcabcbb"
输出: 3 
*/

/*map下标+窗口*/
var lengthOfLongestSubstring = function(s) {
    let l = s.length
        str = new Map(),
        i = 0,
        j = 0,
        max = 1

    if(!l) return 0

    while(j < l){
        if(str.has(s[j]) && str.get(s[j]) >= i){
            i = str.get(s[j])
        }
        str.set(s[j], j+1)
        max = max > (j + 1 - i) ?  max : j + 1 - i 
        j++
    }
    return max
};

/*双循环*/
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0
    let str = '', l = 0, strL = 1
    while(l < s.length) {
        str = s[l]
        let m = 1
        while(m+l < s.length) {
            if(str.includes(s[m+l])) break
            str += s[m+l]
            strL = strL > str.length ? strL : str.length
            m++
        }
        l++
    }
  	return strL
};

/*窗口模式*/

var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0
    let str = '',
		max = 1
	for (let i = 0; i < s.length; i++){
		if(str.includes(s[i])){
			str = str.slice(str.indexOf(s[i])+1) + s[i]
		} else {
			str = str + s[i]
		}
		max = str.length > max ? str.length : max
	}
    return max
};


