/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

    注意：答案中不可以包含重复的三元组
    给定数组 nums = [-1, 0, 1, 2, -1, -4]，
    输出： [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
 * @return {number[][]}
 */

 /*
    思路：排序+双指针
 */
var threeSum = function(nums) {
    let res = [],second,last
    nums.sort((a,b) => {return a-b})
    let k = 0;
    while (nums[k] < 1) {
        //去第一个数重
        if (k > 0 && nums[k] === nums[k-1]) {k += 1;continue}
        second = k+1
        last = nums.length - 1
        while(second < last) {
            let sum = nums[k] + nums[second] + nums[last]
            if(sum === 0){
                res.push([nums[k], nums[second], nums[last]])
                //去第二个数重
                while(second < last && nums[second] ===  nums[second+1]) second+=1
                //去第三个数重
                while(second < last && nums[last] ===  nums[last-1]) last -= 1
                second+=1
                last -= 1
            } else if(sum<0) {
                second+=1
            } else if (sum>0) {
                last -= 1
            }
        }
        k += 1
    }
    return res
};