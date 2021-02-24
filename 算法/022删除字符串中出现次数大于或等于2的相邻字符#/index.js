/*
删除字符串中出现次数大于或等于2的相邻字符

输入： ‘abbbaca’
输出： ‘ca’

*/
var removeDuplicates = function(s) {
    let stack = [], mark = ''
    for(let c of s){
      	if(mark === c) continue
    	let prev = stack.pop()
    	if(!prev || prev !== c){
    		stack.push(prev)
    		stack.push(c)
          	mark = ''
    	}else{
        	mark = c
        }
    }
    return stack.join('')
};