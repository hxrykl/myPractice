/*
求链表的中间节点，如果有两个中间节点，返回第二个
*/

//双指针 O(n) O(1)
function middle(head) {
	if(!head.next) return head
	let two = head.next.next, one = head.next
	while(two) {
		two = two.next.next
		one = one.next
	}
	return one
}
