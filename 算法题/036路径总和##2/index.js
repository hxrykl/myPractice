/*
路径总和 III

给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

输入：
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

返回 3。和等于 8 的路径有:
1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
*/

var pathSum = function(root, targetSum) {
	let result = 0
	function deep(node, arr) {
		if(node === null) return
        arr.push(node.val)
        arr = arr.map( (item, index) => {
            if(index !== arr.length - 1) item = item + node.val
            item === targetSum ? result+=1 : ''
            return item
		})
		deep(node.left, [...arr])
		deep(node.right, [...arr])
	}
	deep(root, [])
	return result
};

//前缀和
var pathSum = function(root, targetSum) {
    let map = new Map()
    let ans = 0
    function dfs(root, presum){
        if(!root) return 
        //存每一个节点前缀值,如果有相同节点就叠加
        map.set(presum, (map.get(presum) || 0) + 1)

        let target = presum + root.val
        ans += (map.get(target - targetSum) || 0)//寻找至当前节点总和为targetSum的上一个节点 a+b+c+d - s = a+b ;  s = c+d

        dfs(root.left, target)
        dfs(root.right, target)
        //减少
        map.set(presum, map.get(presum)-1)
    }
    dfs(root, 0)
    return ans
};