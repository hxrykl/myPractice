/*
路径总和
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true

输入：root = [1,2,3], targetSum = 5
输出：false

输入：root = [1,2], targetSum = 0
输出：false
*/

//深度优先遍历
var hasPathSum = function(root, targetSum) {
	if(root === null) return false
	if(root.left === null && root.right === null) return root.val === targetSum
	let newNum = targetSum - root.val
	return hasPathSum(root.left, newNum) || hasPathSum(root.right, newNum)
};