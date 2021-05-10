/*
二叉树的最近公共祖先
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。

*/

//深度优先
var lowestCommonAncestor = function(root, p, q) {
	let result
	function chain(node) {
		if(node === null) return false
		let left = chain(node.left)
		let right = chain(node.right)
		//两个都为true或同一条路径
		if((left && right) || (left || right) && (node === p || node === q)){
			result = node
		}
		//一旦找到节点相同返回true
		return left || right || node === p || node === q
	}
	chain(root)
	return result
}

var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    let pArr = [], qArr = []
    function chain(root) {
        let who = []
        if(p === root) {
            pArr.unshift(root)
            return ['pArr']
        }
        if(q === root) {
            qArr.unshift(root)
            return ['qArr']
        }
        if(root.left){
            who = [...chain(root.left),...who]
        }
        if(root.right){
            who = [...chain(root.right),...who]
        }
        if(root.left || root.right) {
            who.includes('pArr') && pArr.unshift(root)
            who.includes('qArr') && qArr.unshift(root)
        }
        return who
    }
    chain(root)
    if(pArr.length === 0) return qArr[qArr.length - 1]
    if(qArr.length === 0) return pArr[pArr.length - 1]
    let minLength = Math.min(pArr.length, qArr.length) - 1
    while(pArr[minLength] !== qArr[minLength]){
        minLength--
    }
    return pArr[minLength]
};

