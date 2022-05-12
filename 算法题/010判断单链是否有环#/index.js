/*
判断一个单链是否有环
*/

//标记法 O(n) O(n)
function hasRing(head) {
	while(head){
		if(head.point) return true
		head.point = true
		head = head.next
	}
	return false
}

//利用JSON.stringify()不能序列化含有循环的结构 O(n) O(n)
function hasRing(head) {
	try{
		JSON.stringify(head)
		return false
	}
	catch{
		return true
	}
}

//双指针法 O(n) O(1)

function hasRing(head) {
	let fast = head.next.next,low = head.next
	while(fast !== low){
		if(!fast || !fast.next) return false
		fast = fast.next.next
		low = low.next
	}
	return true
}