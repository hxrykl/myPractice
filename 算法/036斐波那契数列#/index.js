/*
斐波那契数列
*/
var fib = function(n) {
  if(n < 2) return n
	let n1 = 0, n2 = 1
	let k = 2;
	while(k <= n) {
    n2 =  n2 + n1
    n1 =  n2 - n1
    n2 %= 1000000007;
    k++
	}
  return n2
};