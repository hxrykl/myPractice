/*
从前序与中序遍历序列构造二叉树

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
*/

//递归
function buildTree(preorder, inorder) {

	if(inorder.length === 0) return null

	let root = new TreeNode(preorder[0])

	let mid = inorder.indexOf(preorder[0])//中序遍历可区分左右
	//中序左边为0-mid，长度与前序相等
	root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
	//中序右边排除0-mid和mid，还剩mid+1-末尾，前序为左树剩余
	root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid+1))

	return root
}

//指针递归
function buildTree(preorder, inorder) {

	function pointer (pre_star, pre_end, in_star, in_end) {
		if(pre_star > pre_end) return null
		//根值
		let rootVal = preorder[pre_star]

		let root = new TreeNode(rootVal)
		//根在中序的位置
		let mid = inorder.indexOf(rootVal)
		//左长度
		let leftNum = mid - in_star
		//指针位置对应
		root.left = pointer(pre_star + 1, pre_star + leftNum, in_star, mid - 1)
		
		root.right = pointer(pre_star + leftNum + 1, pre_end, mid + 1, in_end)

		return root
	}
	return pointer(0, preorder.length - 1, 0, inorder.length - 1)
}

//优化indexof,牺牲内存换时间
function buildTree(preorder, inorder){

	let map = new Map()
	inorder.map((item, index) => {
		map.set(item, index)
	})

	function child(pre_star, pre_end, in_star, in_end){
		if(pre_end < pre_star) return null

		let rootVal = preorder[pre_star]

		let root = new TreeNode(rootVal)

		let mid = map.get(rootVal)

		let l = mid - in_star

		root.left = child(pre_star + 1, pre_star + l, in_star, in_star + l - 1) //pre_star + 1 + l - 1

		root.right = child(pre_star + 1 + l, pre_end, in_star + l + 1, in_end)
		
		return root
	}
	return child(0, preorder.length - 1, 0, inorder.length - 1)
}