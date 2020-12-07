/*
输入两个链表，找出它们的第一个公共节点。
*/

//双指针法 O(n) O(1)
var getIntersectionNode = function(headA, headB) {
    let A = headA, B = headB
    while(A || B){
        if(A === B) return A
        A = A ? A.next : headB
        B = B ? B.next : headA
    }
    return null
};


//傻瓜写法
var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB,n = {n:0, boo: false}, skip,skip2
    while(a !== null|| b !== null){
        if(a === null || b === null) {
            n.n++
            if(a) n.boo = true
        }
        if(a) a = a.next
        if(b) b = b.next
    }
    if(n.boo) {
        skip = headA
        skip2 = headB
    }else{
        skip = headB
        skip2 = headA
    }
    while(n.n) {
        skip = skip.next
        n.n--
    }
    while(skip){
        if(skip === skip2) return skip
        skip2 = skip2.next
        skip = skip.next
    }
    return null
};