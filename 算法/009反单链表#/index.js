/*
反一个单链表
例：
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

[1,2,3,4,5]
[5,4,3,2,1]
*/

//迭代法
var reverseList = function(head) {
    let prev = null, next, cur = head
    while(cur){
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    head = prev
    return head
};