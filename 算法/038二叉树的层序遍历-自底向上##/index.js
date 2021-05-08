/*
二叉树的层序遍历 II
给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

[3,9,20,null,null,15,7],

[
  [15,7],
  [9,20],
  [3]
]
*/

//广度优先
var levelOrderBottom = function(root) {
    if(!root) return []
	let result = [], stack = [root]
	while(stack.length) {
		let res = [], sta = []
		while(stack.length) {
			let pop = stack.pop()
			res.push(pop.val)
            pop.left && sta.unshift(pop.left)
			pop.right && sta.unshift(pop.right)
		}
		result.unshift(res)
		stack = sta
	}
	return result
};
//深度优先
var levelOrderBottom = function(root) {
	let result = []
	function deep(node, deepth) {
		if(node === null) return
		result[deepth] = result[deepth] || []
		result[deepth].push(node.val)
		deep(node.left, deepth+1)
		deep(node.right, deepth+1)
	}
	deep(root, 0)
	return result.reverse()
};