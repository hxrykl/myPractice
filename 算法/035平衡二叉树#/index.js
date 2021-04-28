/*
平衡二叉树
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
给定二叉树 [3,9,20,null,null,15,7]
返回 true 。

给定二叉树 [1,2,2,3,3,null,null,4,4]
返回 false 。
*/

//自上而下迭代
var isBalanced = function(root) {
    if(root === null) return true
    function deep(root) {
        if(root === null) return 0
        return Math.max(deep(root.left) + 1 , deep(root.right) + 1)
    }
    //判断当前树是否平衡同时判断左右子数是否平衡
    return !(Math.abs(deep(root.left) - deep(root.right)) > 1) && isBalanced(root.left) && isBalanced(root.right)
};