/*
二叉树的后序遍历

*/
//一行递归
var postorderTraversal = (root) => {
  return root
    ? [root.val, ...postorderTraversal(root.left), ...postorderTraversal(root.right)]
    : [];
}

//递归
var postorderTraversal = function(root) {
    let res = []
    function pushNode(node) {
        if(node){
            pushNode(node.left)
            pushNode(node.right)
            res.push(node.val)
        }
    }
    pushNode(root)
    return res
};

//栈遍历
var postorderTraversal = function(root) {
    let res = [],
        stack = []

    if(root)stack.push(root)
    while(stack.length > 0){
        let p = stack.pop()
        if(p.left === null && p.right === null){
            res.push(p.val)
        } else {
            stack.push({val: p.val, right: null, left: null})
            p.right !== null ? stack.push(p.right) : ''
            p.left !== null ? stack.push(p.left) : ''
        }
        
    }
    return res
};