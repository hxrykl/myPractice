/*
给定两个数组，编写一个函数来计算它们的交集。
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
*/

//排序+双指针
var intersection = function(nums1, nums2) {
    nums1.sort((x, y) => x - y);
    nums2.sort((x, y) => x - y);
    const length1 = nums1.length, length2 = nums2.length;
    let index1 = 0, index2 = 0;
    const intersection = [];
    while (index1 < length1 && index2 < length2) {
        const num1 = nums1[index1], num2 = nums2[index2];
        if (num1 === num2) {
            // 保证加入元素的唯一性
            if (!intersection.length || num1 !== intersection[intersection.length - 1]) {
                intersection.push(num1);
            }
            index1++;
            index2++;
        } else if (num1 < num2) {
            index1++;
        } else {
            index2++;
        }
    }
    return intersection;
};

//排序+indexOf()

var intersection = function(nums1, nums2) {
    nums1.sort((a,b) => {return a-b})
    let k = 0,res =[]
    while(k < nums1.length){
        if(nums1[k] === nums1[k-1]) {k++; continue}
        nums2.indexOf(nums1[k]) !== -1 && res.push(nums1[k])
        k++
    }
    return res
};