/*
前K个高频单词

给一非空的单词列表，返回前 k 个出现次数最多的单词。

返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
输出: ["i", "love"]
解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
    注意，按字母顺序 "i" 在 "love" 之前。

输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
输出: ["the", "is", "sunny", "day"]
解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
    出现次数依次为 4, 3, 2 和 1 次。

*/
//哈希+堆
var topKFrequent = function(words, k) {
  words.sort()
  let map = new Map()
  words.forEach(item =>{
    map.has(item) ? map.set(item, map.get(item) + 1) :  map.set(item, 1)
  })
  let arr = []
  map.forEach((item,index) => {
    arr.push({
      name: index,
      value: item
    })
  })
  arr.sort((a, b) => b.value - a.value)
  return arr.slice(0, k).map( item => item.name)
};


var topKFrequent = function(words, k) {
  const map = {};
  words.forEach(v => map[v] = (map[v] || 0) + 1);
  const keys = Object.keys(map).sort((a, b) => map[b] - map[a] || a.localeCompare(b))
  return keys.slice(0, k);
};