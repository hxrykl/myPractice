/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 要求：时间复杂度O(nlogn) 空间复杂度O(n)
输入：head = [4,2,1,3]
输出：[1,2,3,4]

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//
const merge = function (head1, head2) {
	const dummyHead = new ListNode(0);
	let 
}
const toSortList = function (head, tail) {
	if(head === null) return head;
	if(head.next === tail) {
		head.next = null;
		return head;
	}
	
	let slow = head, fast = head;
	while(fast !== tail) {
		slow = slow.next;
		fast = fast.next;
		if(fast !== tail) fast = fast.next;
	}
	
	const mid = slow;
	return merge(toSortList(head, mid), toSortList(mid, tail));
}
const sortList = function (hand) {
	return toSortList(head, null);
}