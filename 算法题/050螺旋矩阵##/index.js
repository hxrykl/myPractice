/*
 螺旋矩阵

 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素

 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
*/

var spiralOrder = function(matrix) {
  let y = x = 0,
      result = [],
      direction = 'right' 
  while(matrix[y]?.[x] !== undefined){
    result.push(matrix[y][x])
    matrix[y][x] = undefined
    switch(direction) {
      case 'right': matrix[y]?.[x+1] !== undefined ? ++x : (direction = 'down', ++y)
        break
      case 'down': matrix[y+1]?.[x] !== undefined ? ++y : (direction = 'left', --x)
        break
      case 'left': matrix[y]?.[x-1] !== undefined ? --x : (direction = 'up', --y)
        break
      case 'up': matrix[y-1]?.[x] !== undefined ? --y : (direction = 'right', ++x)
        break
    }
  }
  return result
};