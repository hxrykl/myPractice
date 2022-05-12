/**
  最小的k个数
  输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
  输入：arr = [3,2,1], k = 2
  输出：[1,2] 或者 [2,1]

  输入：arr = [0,1,2,1], k = 1
  输出：[0]
*/

var getLeastNumbers = function(arr, k) {
  return arr.sort((a,b) => a-b).slice(0, k)
};

[2, 8, 1, 1, 0, 11, -1, 0]
//基于快速排序的 partition
function partition(arr, start, end) {
  const k = arr[start];//基数
  let left = start + 1,
      right = end;
  while (true) {
      while (left <= end && arr[left] <= k) ++left;//从左开始找到比基数还大的数
      while (right >= start + 1 && arr[right] >= k) --right;//从右开始找到比基数还小的数

      if (left >= right) {
          break;
      }

      [arr[left], arr[right]] = [arr[right], arr[left]]; //交换找到的两个数
      ++left;
      --right;
  }
  [arr[right], arr[start]] = [arr[start], arr[right]];
  return right;
}
var getLeastNumbers = function(arr, k) {
  const length = arr.length;
  if (k >= length) return arr;
  let left = 0,
      right = length - 1;
  let index = partition(arr, left, right);
  while (index !== k) {
      if (index < k) { //差额从后面继续找
          left = index + 1;
          index = partition(arr, left, right);
      } else if (index > k) { //多余精进
          right = index - 1;
          index = partition(arr, left, right);
      }
  }

  return arr.slice(0, k);
};