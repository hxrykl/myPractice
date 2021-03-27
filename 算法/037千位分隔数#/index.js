/*
千位分隔数

输入：n = 987
输出："987"

输入：n = 1234
输出："1.234"

输入：n = 123456789
输出："123.456.789"
*/

var thousandSeparator = function(n) {
    let count = 0;
    let ans = "";
    do {
        let cur = n % 10;
        n = Math.floor(n / 10);
        ans = cur + ans
        ++count;
        if (count % 3 == 0 && n) {
            ans = '.' + ans
        }
    } while (n);
    return ans
};


var thousandSeparator = function(n) {
    n = '' + n  
    if(n<1000) return n
    let result = '',l = n.length, i = 0
    while(i < l){
        if(i>1 && i%3 === 0){
            result =  n[l-i-1] + '.' + result
        } else {
            result = n[l-i-1] + result
        }
        i++
    }
    return result
};