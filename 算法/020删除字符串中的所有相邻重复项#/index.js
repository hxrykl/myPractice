/*
 删除字符串中的所有相邻重复项
 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。

*/

/*
利用栈
*/
var removeDuplicates = function(S) {
    let stack = [],
    l = S.length
    for(let i = 0; i < l; i++) {
      if(stack[stack.length-1] === S[i]){
        stack.pop()
      } else {
        stack.push(S[i])
      }
    }
    return stack.join('')
};

var removeDuplicates = function(S) {
    function delStr () {
      	let has = false
        for(let i = 0; i < S.length; i++){
            if(S[i] === S[i+1]){
                has = true
                if(i === 0){
                    S = S.slice(i+2)
                } else {
                    S = S.slice(0, i) + S.slice(i+2)
                }
              	break
            }
        }
      	has ? delStr () : ''
    }
  	delStr ()
    return S
};