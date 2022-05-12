/*
删除字符串中的所有相邻重复项 II

给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。

你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。

在执行完所有删除操作后，返回最终得到的字符串。

输入：s = "deeedbbcccbdaa", k = 3
输出："aa"
解释： 
先删除 "eee" 和 "ccc"，得到 "ddbbbdaa"
再删除 "bbb"，得到 "dddaa"
最后删除 "ddd"，得到 "aa"

*/

var removeDuplicates = function(s, k) {
    let stack = []
    for(let c of s) {
        let prev = stack.pop()
        if(!prev || prev[0] !== c) {
            stack.push(prev)
            stack.push(c)
        } else if(prev.length < k-1) {
            stack.push(prev+c)
        }
    }
    return stack.join('')
};

var removeDuplicates = function(s, k) {
    let l = s.length,
        stack = [],
        i = 0
    while(i < l){
        let n = 1
        for(let m = 0; m < k-1; m++){
            if(stack[stack.length - 1 - m] === s[i]){
                n++
            }
        }
        if(k !== n) {
            stack.push(s[i])
        } else {
            stack.splice(stack.length - k + 1, k-1)
        }
        i++
    }
    return stack.join('')
};