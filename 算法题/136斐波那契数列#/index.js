/*
斐波那契数列
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
*/

//方法一：动态规划
var fib = function(n) {
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for(let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = (p + q) % 1000000007;
    }
    return r
};

