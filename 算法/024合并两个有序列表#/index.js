/*
合并两个有序链表
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
输入：l1 = [], l2 = [0]
输出：[0]
*/

/*递归 空间复杂度为 O(n+m) 时间复杂度：O(n + m)*/ 
var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

/*迭代*/
var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode(),
        prev = newList
    
    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val){
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }

    l1 === null ? prev.next = l2 : prev.next = l1
    return newList.next
};