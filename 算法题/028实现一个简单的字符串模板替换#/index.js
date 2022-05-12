/*
实现简单的模板字符串替换

var obj = {name:"二月",age:"15"};

var str = "{{name}}很厉害，才{{age}}岁";

输出：二月很厉害，才15岁。
*/


function render(obj, str) {
	//分组匹配获取
	let pat = /\{\{(.*?)\}\}/g 
    let result  = str
    do{
		let res = pat.exec(str)
        if(res){
          	result = result.replace(res[0], obj[res[1].trim()])
        }
	} 
    while (pat.lastIndex != 0)
    return result
}


//利用replace第二个参数
function render(obj ,str) {

  return str.replace(/\{\{(.*?)\}\}/g, (match, key) => obj[key.trim()]);

}

