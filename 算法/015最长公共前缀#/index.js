/*
最长公共前缀

输入: ["flower","flow","flight"]
输出: "fl"
输入: ["dog","racecar","car"]
输出: ""
*/

var longestCommonPrefix = function(strs) {
    let  str = strs[0] || ''
    strs.map(item => {
        while(item.indexOf(str) !== 0) {
            str = str.slice(0, str.length-1)
        }
    })
    return str
};