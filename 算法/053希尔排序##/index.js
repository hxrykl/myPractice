/* 
希尔排序

简单插入排序的改进版，不同于插入排序的是，它会优先比较距离较远的元素
插入排序：
工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入

 */

/**插入排序 时间 O（n^2）空间O(1) */
var sortArray = function (nums) {
  let numsLength = nums.length
  for(let index = 1; index < numsLength; index++) {

    if(nums[index] >= nums[index-1]) continue

    let tmp = nums[index], //当前要插入的元素
        preIndex = index - 1
    while(preIndex >= 0 && nums[preIndex] > tmp) {//从已排序后往前找，小于前一个向后移
        nums[preIndex + 1] = nums[preIndex]
        --preIndex
    }                                                                                                  
    nums[preIndex + 1] = tmp //大于前一个插入
  }
  return nums
};

/**希尔排序 时间O(nlogn) 空间O(1) */
var sortArray = function (nums) {
  let numsLength = nums.length
  
  for(let gap = Math.floor(numsLength/2); gap > 0; gap = Math.floor(gap/2)) {//间隔长度
    for(let i = gap; i < numsLength; i++) {
      let j = i
      let current = nums[i]
      while(j - gap >= 0 && current < nums[j - gap]) {
        nums[j] = nums[j - gap]
        j = j - gap
      }
      nums[j] = current
    }
  }
  return nums
};