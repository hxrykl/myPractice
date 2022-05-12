/*
数据流的中位数
中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例：

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
*/

var MedianFinder = function () {
  this.nums = []
};
//二分查找
MedianFinder.prototype.addNum = function (num) {
  if (!this.nums.length) {
    this.nums.push(num);
    return;
  }

  let left = 0,
    right = this.nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (this.nums[mid] === num) {
      this.nums.splice(mid, 0, num);
      return;
    } else if (this.nums[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  this.nums.splice(right + 1, 0, num);
};

MedianFinder.prototype.findMedian = function () {
  let length = this.nums.length
  let isEvenNumber = !(length % 2)
  if (isEvenNumber) {
    return ((this.nums[length / 2] + this.nums[(length / 2) - 1]) / 2)
  } else {
    return this.nums[(length - 1) / 2]
  }
};


