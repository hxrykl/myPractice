/**
 * 翻转二叉树
 * 
 */

//深度优先 、 递归
var invertTree = function(root) {
  if(root === null) return null
  let left = invertTree(root.left)
  let right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
};

//栈
var invertTree = function(root) {
  let stack = [root]
  while(stack.length) {
    let pop = stack.pop()
    if(pop === null) continue
    [pop.left, pop.right] = [pop.right, pop.left]
    if(pop.left) stack.push(pop.left)
    if(pop.right) stack.push(pop.right)
  }
  return root
};