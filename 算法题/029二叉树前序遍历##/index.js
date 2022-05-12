/*
二叉树的前序遍历
输入：root = [1,null,2,3]
输出：[1,2,3]

*/

//递归实现
var preorderTraversal = (root) => {
	let result = []
	function pushNode (node) {
		if(node){
			result.push(node.val)
			pushNode(node.left)
			pushNode(node.right)
		}
	}
	pushNode(root)
	return result
}

//遍历实现
var preorderTraversal = (root) => {
    let result = []
    let stack = []
    if(root) stack.push(root)
    while(stack.length > 0){
        let p = stack.pop()
        result.push(p.val)
        if(p.right !== null){
            stack.push(p.right)
        }
        if(p.left !== null){
            stack.push(p.left)
        }
    }
    return result
};

