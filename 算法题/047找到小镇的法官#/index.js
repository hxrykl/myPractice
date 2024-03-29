/*
找到小镇的法官

在一个小镇里，按从 1 到 N 标记了 N 个人。传言称，这些人中有一个是小镇上的秘密法官。

如果小镇的法官真的存在，那么：

小镇的法官不相信任何人。
每个人（除了小镇法官外）都信任小镇的法官。
只有一个人同时满足属性 1 和属性 2 。
给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示标记为 a 的人信任标记为 b 的人。

如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的标记。否则，返回 -1。

输入：N = 2, trust = [[1,2]]
输出：2

输入：N = 3, trust = [[1,3],[2,3]]
输出：3

输入：N = 3, trust = [[1,3],[2,3],[3,1]]
输出：-1

输入：N = 3, trust = [[1,2],[2,3]]
输出：-1

输入：N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
输出：3
*/
var findJudge = function(N, trust) {
  let graph = Array(N+1).fill(0) 
  trust.forEach(([a, b]) => {
      --graph[a] //信任别人减一
      ++graph[b] //被信任加一
  })
  return graph.findIndex((node, index) => {
      return index !== 0 && node === N-1
  })
};

var findJudge = function(N, trust) {
    let attack = Array(N).fill(0) // 攻  去相信
    let accept = Array(N).fill(0) // 受  被相信
    for(let [a, b] of trust){
        attack[a - 1]++
        accept[b - 1]++
    }
    for(let i = 0; i < N; i++){
        if (attack[i] === 0 && accept[i] === N - 1) {
            return i + 1
        }
    }
    return -1
};

