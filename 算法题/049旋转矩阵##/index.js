/*
旋转矩阵
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

*/

//对于矩阵中第 y 行的第 x 个元素，在旋转后，它出现在倒数第 y 列的第 x 个位置。
//[y][x] > [x][n-y-1] > [n-y-1][n-x-1] > [n-x-1][y] > [y][x]
var rotate = function(matrix) {
  const n = matrix.length;
  let x = 0, y = 0,
      yMax = Math.floor(n/2),
      xMax = Math.floor((n+1)/2)
  while(y < yMax) {
    x = 0
    while(x < xMax) {
      let temp = matrix[y][x]
      matrix[y][x] = matrix[n-x-1][y]
      matrix[n-x-1][y] = matrix[n-y-1][n-x-1]
      matrix[n-y-1][n-x-1] = matrix[x][n-y-1]
      matrix[x][n-y-1] = temp
      ++x
    }
    ++y
  }
};



var rotate = function(matrix) {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n; j++) {
          [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
      }
  }
  // 主对角线翻转
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
  }
};