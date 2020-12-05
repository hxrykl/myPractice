/*
删除链表的倒数第n个节点
示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
*/

//快慢指针加虚假节点
function remove(head, n){
	let pre = {next: head},fast = pre, low = pre
	while(n>1){
		fast = fast.next
		n--
	}
	while(fast.next && fast.next.next){
		fast = fast.next
		low = low.next
	}
	low.next = low.next.next
	return pre.next
}




//快慢指针
function remove(head, n){
	let fast = head, low = head
	while(n>1){
		fast = fast.next
		n--
	}
	if(!fast.next) return head.next
	while(fast.next.next){
		fast = fast.next
		low = low.next
	}
	low.next = low.next.next
	return head
}