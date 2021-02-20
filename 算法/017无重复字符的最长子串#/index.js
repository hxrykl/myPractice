
/*
无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
输入: s = "abcabcbb"
输出: 3 
*/
/**/
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