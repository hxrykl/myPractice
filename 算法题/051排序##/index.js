/*
排序


*/


/**快排 取一个基数，一个左指针，一个右指针，*/
var sortArray = function (nums) {
  quick(nums, 0, nums.length - 1)
  return nums
};

function quick(list, left, right) {
  let index = 0
  if (list.length > 1) {
    index = partition(list, left, right) // 帮助我们将子数组分离为较小值数组和较大值数组
    left < index - 1 && quick(list, left, index - 1)
    index < right && quick(list, index, right)
  }
}

function partition(list, left, right) {
  let mid = list[(right + left) >> 1]
  while (left <= right) {
    while (list[left] < mid) left++
    while (list[right] > mid) right--
    if (left <= right) {
      [list[left], list[right]] = [list[right], list[left]]
      left++
      right--
    }
  }
  return left
}

/**冒泡 将大数值往后挪，不断缩短范围*/
var sortArray = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums;
};

/**插入排序 将数组分为两部分，已排序，未排序，从为排序中找到第一个，从已排序后面开始比较，大于时停下插入*/
var sortArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (temp >= nums[j]) break;
      nums[j + 1] = nums[j]
    }
    nums[j + 1] = temp;
  }
  return nums;
};

/**选择排序 从前往后，找到最小数，放到最前面，缩小范围，继续。。。*/
var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = Infinity;
    let minIndex;
    for (j = i; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j]
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
};

/**归并排序 */
var sortArray = function (nums) {
  return mergeSort(nums, 0, nums.length - 1)
};

function mergeSort(nums, left, right) {
  if (left >= right) return nums;
  let mid = (left + right) >> 1;
  mergeSort(nums, left, mid)
  mergeSort(nums, mid + 1, right)
  return merge(nums, left, mid, right)
}

function merge(nums, left, mid, right) {
  let ans = [];
  let c = 0,
    i = left,
    j = mid + 1;
  while (i <= mid && j <= right) {
    if (nums[i] < nums[j]) {
      ans[c++] = nums[i++];
    } else {
      ans[c++] = nums[j++]
    }
  }
  while (i <= mid) {
    ans[c++] = nums[i++];
  }
  while (j <= right) {
    ans[c++] = nums[j++];
  }
  for (let i = 0; i < ans.length; i++) {
    nums[i + left] = ans[i];
  }
  return nums;
}