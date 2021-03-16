/*
二叉树的中序遍历
输入：root = [1,null,2,3]
输出：[1,3,2]
*/

//递归
var inorderTraversal = function(root) {
    let result = []
    function pushNode (node) {
        if(node){
            pushNode(node.left)
            result.push(node.val)
            pushNode(node.right)
        }
    }
    pushNode(root)
    return result
};

//栈循环
var inorderTraversal = function(root) {
    let result = [],
        stack = []
    if(root) stack.push(root)
    while(stack.length > 0){
        let p = stack.pop()
        if(p.right !== null){
            stack.push(p.right)
        }
        if(p.left !== null){
            stack.push({val: p.val, right: null, left: null})
            stack.push(p.left)
        } else {
            result.push(p.val)
        }
    }
    return result
};