
/*
给定一个“扁平”字典对象，其键以点分隔。 例如，{ ‘A’: 1, ‘B.A’: 2, ‘B.B’: 3, ‘CC.D.E’: 4, ‘CC.D.F’: 5}
实现将其转换为“嵌套”字典对象的功能。 在上述情况下，嵌套版本如下：
{
 ‘A’: 1,
 ‘B’: {
   ‘A’: 2,
   ‘B’: 3
 },
 ‘CC’: {
   ‘D’: {
     ‘E’: 4,
     ‘F’: 5
   }
 }
}
*/

function flatten(obj) {
  let newObj = {}
	for(let k in obj){
    	let arr = k.split('.')
      let that = newObj
      arr.map((item, index) => {
        if (index === arr.length-1) {
        	that[item] = obj[k]
        } else {
        	that[item] = that[item] || {}
        	that = that[item]
        }
      })
    }
  return newObj
}