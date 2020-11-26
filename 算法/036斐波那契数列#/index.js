/*
斐波那契数列
*/
var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
	let b = 0,c = 1
	let k = 2;
  	while(k <= n) {
        c =  c+b
        b =  c-b
        c %= 1000000007;
        k++
  	}
  return c
};