/*
有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

输入：s = "()[]{}"
输出：true

输入：s = "([)]"
输出：false
*/


var isValid = function(s) {
    let str = [], l = s.length
    if(l <= 1) return false
    for(let i = 0; i < l; i++){
        switch(s[i]) {
            case '}':
                if(str.lastIndexOf('{') !== -1 && str.lastIndexOf('{') === str.length - 1){
                    str.splice(str.lastIndexOf('{'),1)
                } else {
                    return false
                }
                break
            case ']':
                if(str.lastIndexOf('[') !== -1 && str.lastIndexOf('[') === str.length - 1){
                    str.splice(str.lastIndexOf('['),1)
                } else {
                    return false
                }
                break
            case ')':
                if(str.lastIndexOf('(') !== -1 && str.lastIndexOf('(') === str.length - 1){
                    str.splice(str.lastIndexOf('('),1)
                } else {
                    return false
                }
            	break
          default:
            str.push(s[i])
        }
    }
    return !str.length
};


var isValid = function(s) {
    if(s.length <= 1) return false
    let str = [], l = s.length, map = {'}': '{', ']': '[', ')' : '('}
    for(let i = 0; i < l; i++){
        if(map[s[i]]) {
            if(str.length > 0 && str[str.length-1] == (map[s[i]]) ){
                str.pop()
            } else {
                return false
            }
        } else {
            str.push(s[i])
        }
    }
    return !str.length
};