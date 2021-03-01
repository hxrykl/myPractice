/*
滑动窗口的最大值
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
*/
var maxSlidingWindow = function(nums, k) {
    let l = nums.length
        result = [],
        i = 0
    if(!l) return []
    while(i <= l - k){
        let max =  Math.max(...nums.slice(i, i+k))
        result.push(max)
        i++
    }
    return result 
};