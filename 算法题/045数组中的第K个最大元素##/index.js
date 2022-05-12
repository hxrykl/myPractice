/*
数组中的第K个最大元素

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
*/

var findKthLargest = function(nums, k) {
  return nums.sort((a, b) => b - a)[k-1]
};


//基于快速排序
var findKthLargest = function(nums, k) {
  let star = 0, end = nums.length - 1
  if(k >= nums.length ) return Math.min(...nums);
  let index = quickSort(nums, star, end)
  while(index !== k) {
    if(index < k) {
      star = index + 1
      index = quickSort(nums, star, end)
    } else if(index > k) {
      end = index - 1
      index = quickSort(nums, star, end)
    }
  }
  console.log(nums)
  return Math.min(...nums.slice(0, k))
};

function quickSort(arr, left, right) {
  let base = left;
  ++left
  while(true) {
    while(left <= right && arr[base] <= arr[left]) ++left;
    while(left <= right && arr[base] >= arr[right]) --right;
    if(left >= right) break
    [arr[left], arr[right]] = [arr[right], arr[left]]
    ++left
    --right
  }
  [arr[base], arr[right]] = [arr[right], arr[base]]
  return right //返回基数的位置
}


