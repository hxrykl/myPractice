/*
对称二叉树

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。、
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
输入：root = [1,2,2,3,4,4,3]
输出：true
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
输入：root = [1,2,2,null,3,null,3]
输出：false
*/

//递归
var isSymmetric = function(root) {
	if(root === null) return true
	function check(left, right) {
		if(!left && !right) return true
		if(!left || !right) return false
		if(left.val !== right.val) return false
		return check(left.left, right.right) && check(left.right, right.left)
	}
	return check(root.left, root.right)
};

//迭代
var isSymmetric = function(root) {
	if(root === null) return true
	let stack = [root.left, root.right]

	while(stack.length) {
		let left = stack.shift()
		let right = stack.shift()
		if(left && right){
			if(left.val !== right.val) return false
			stack.push(left.left)
			stack.push(right.right)
			stack.push(left.right)
			stack.push(right.left)
		} else if(left || right){
            return false
        }
	}
	return true
};