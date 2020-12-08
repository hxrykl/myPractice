/*
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

输入: "  hello world!  "
输出: "world! hello"
*/

var reverseWords = function(s) {
    let arr = s.split(' '),news = '',n = 0
    while(arr.length >= n){
        if(!news && arr[arr.length-n]) {
            news = arr[arr.length-n]
        } else if(arr[arr.length-n]){
            news += ' ' + arr[arr.length-n]
        }
        n++
    }
    return news
};