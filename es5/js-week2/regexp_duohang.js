var str ="1helloworld\nhello2 world2\n1sdgdf.234d\n2dfsgsgf93df\nrjgufhd2";
console.log(str);

var pat=/^[0-9].*[a-z]$/igm;

//var re2 =pat.exec(str);
//console.log(re2);
console.log("==============");

var re;
while((re = pat.exec(str)) != null){
    console.log(re);
}





























