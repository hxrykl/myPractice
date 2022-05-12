/*
给定一个二叉树，求指定两点的最短距离

*/
function shortDistance(root, p, q) {
	if(root === null) return 0
	let result = 0
	function check(node) {
		if(node === null) return false
		let left = check(node.left)
		let right = check(node.right)
		//找到的节点路径添加
		if(left || right) result += node.val
		//找到最近公共节点即停止添加
		if((left && right) || (left || right) && (node.val === p || node.val === q) ) return false
		//一旦找到节点，立即返回true
		return left || right || node.val === p || node.val === q
	}
	check(root)
	return result
}