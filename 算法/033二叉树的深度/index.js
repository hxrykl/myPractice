/*
二叉树的最大深度
*/

//递归
function maxDepth(root) {
    if(root === null) return 0
	let result = 0
	function recursive(root, length) {
        length += 1
		if(root.left || root.right) {
			root.left && recursive(root.left, length)
			root.right && recursive(root.right, length)
		} else {
			result = Math.max(result, length)
		}
	}
	recursive(root, result)
	return result
}

function maxDepth(root) {
    return root ? Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1) : 0
}

//栈
function maxDepth(root) {
    if(root === null) return 0
	let result = 0
	let stack = [[root, 0]]
	while(stack.length) {
		let [rootNew, num] = stack.shift()
		result = Math.max(result, num+1)
		rootNew.left && stack.unshift([rootNew.left, num+1])
		rootNew.right && stack.unshift([rootNew.right, num+1])
	}
	return result
}



