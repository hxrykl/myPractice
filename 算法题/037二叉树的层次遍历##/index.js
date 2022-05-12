/*
二叉树的层序遍历
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],
返回其层序遍历结果
[
  [3],
  [9,20],
  [15,7]
]
**/
//深度优先
var levelOrder = function(root) {
	let result = []
	function deep(node, deepth) {
		if(node === null) return
		result[deepth] = result[deepth] || []
		result[deepth].push(node.val)
		deep(node.left, deepth+1)
		deep(node.right, deepth+1)
	}
	deep(root, 0)
	return result
};


//广度优先
var levelOrder = function(root) {
    if(!root) return []
	let result = [], stack = [root]
	while(stack.length) {
		let res = [], sta = []
		while(stack.length) {
			let pop = stack.pop()
			res.push(pop.val)
			pop.right && sta.push(pop.right)
            pop.left && sta.push(pop.left)
		}
		result.push(res)
		stack = sta
	}
	return result
};