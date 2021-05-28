/*
 打乱数组
 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。
 Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果

输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]

*/
var Solution = function(nums) {
  this.nums = nums;
};
Solution.prototype.reset = function() {
  return this.nums;
};
Solution.prototype.shuffle = function() {
  const nums = this.nums.slice();
  let n = nums.length;
  // 产生的结果有 n! 种可能
  for (let i = 0; i < n; i++) {
      // 从 i 到 n-1 随机选一个
      const rand = (Math.random() * (n - i) | 0) + i;
      // 交换nums数组i和rand下标的两个元素
      [ nums[i], nums[rand] ] = [ nums[rand], nums[i] ];
  }
  return nums;
};