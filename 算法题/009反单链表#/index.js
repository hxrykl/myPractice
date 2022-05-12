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
    while(cur){//终止条件为空时
        next = cur.next //对下一个缓存
        cur.next = prev //翻转指向
        prev = cur //缓存上一个
        cur = next //下一个
    }
    head = prev
    return head
};

//递归法
var rever = function(pre, cur) {
    if(!cur) return pre
    let cur2 = cur.next;
    cur.next = pre;
    return rever(cur, cur2)
}
var reverseList = function(head) {
    return rever(null, head)
};