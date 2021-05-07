/**
路径总和 II
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]

输入：root = [1,2,3], targetSum = 5
输出：[]

输入：root = [1,2], targetSum = 0
输出：[]
*/


var pathSum = function(root, targetSum) {
	let results = []
	function deep(node, num, arr) {
		if(node === null) return 
        arr.push(node.val)
		if(node.left === null && node.right === null) {
			node.val === num && results.push(arr)
			return
		}
		deep(node.left, num - node.val, [...arr])
		deep(node.right, num - node.val, [...arr])
	}
	deep(root, targetSum, [])
	return results
};
