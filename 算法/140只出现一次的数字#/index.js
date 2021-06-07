//只出现一次的数字
/*
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1

输入: [4,1,2,1,2]
输出: 4

*/
//异或
var singleNumber = function(nums) {
    let ans = 0;
    for(const num of nums) {
        ans ^= num;
    }
    return ans;
};



var singleNumber = function(nums) {
    let length = nums.length,
        map = {}
    
    for(let index = 0; index < length; index++) {
        if(map[nums[index]]) {
            map[nums[index]] = 2
        } else {
            map[nums[index]] = 1
        }
    }
    for(let key in map) {
        if(map[key] === 1) return key
    }
};