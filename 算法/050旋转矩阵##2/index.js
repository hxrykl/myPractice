/*
螺旋矩阵 II
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
*/

var generateMatrix = function(n) {
  let results = [], i = n
  while(i) {
      results.push(Array(n).fill(0))
      --i
  }
  let num = 1,
      y = x = 0,
      direction = 'right'
  while(results[y]?.[x] === 0){
      results[y][x] = num
      ++num
      switch(direction){
          case 'right':
              results[y]?.[x+1] === 0 ? ++x : (direction = 'down', ++y)
              break
          case 'down':
              results[y+1]?.[x] === 0 ? ++y : (direction = 'left', --x)
              break
          case 'left':
              results[y]?.[x-1] === 0 ? --x : (direction = 'up', --y)
              break
          case 'up':
              results[y-1]?.[x] === 0 ? --y : (direction = 'right', ++x)
              break
      }
  }
  return results
};