// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明：

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

var merge = function(nums1, m, nums2, n) {//倒序
    nums1.length = m;
    nums2.length = n;
    let i = m-- + --n
    while(n >= 0){
        nums1[i--] = m>=0 && nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
    }
};

var merge2 = function(nums1, m, nums2, n) {//
    nums1.length = m;
    nums2.length = n;
    nums1.push(...nums2)
    nums1.sort((a,b) => {
        if (a<b) {
            return -1
        } else {
            return 1
        }
    })
    
};
var merge3 = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    let arr = [...nums1]
    let k=0,j=0,i=0;
    while(k<m && j<n){
        if(arr[k] <= nums2[j]) {
            nums1[i] = arr[k]
            k++
        } else {
            nums1[i] = nums2[j]
            j++
        }
        i++
    }
    while(k<m){
        nums1[i] = arr[k]
        i++
        k++
    }
    while(j<n){
        nums1[i] = nums2[j]
        i++
        j++
    }
};