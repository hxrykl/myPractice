/*
二叉搜索树中第K小的元素
给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
二叉搜索树: 按照中序遍历排序(规定一颗二叉树上的元素拥有顺序，所有比它小的元素在它的左子树，比它大的元素在它的右子树)
输入：root = [3,1,4,null,2], k = 1
输出：1

输入：root = [5,3,6,2,4,null,null,1], k = 3
输出：3
*/

//深度优先 、 中序遍历 、 递归
var kthSmallest = function(root, k) {
	let result
	function dfs(node) {
		if(node === null || !k) return
		dfs(node.left)
		if(--k === 0) result = node.val
		dfs(node.right)
	}
	dfs(root)
	return result
};

// 中序遍历 、 栈
var kthSmallest = function(root, k) {
	let result, stack = [root]
	while(stack.length && k) {
		let pop = stack.pop()

		pop.right && stack.push(pop.right)
		
		if(pop.left) {
      stack.push({val: pop.val, right: null, left: null})//压住值
			stack.push(pop.left)
		} else {
			if(--k === 0) result = pop.val
		}
	}
	return result
};