


var str ="sdasddfgfd:http://123.34.323.56:8080/lianjia,:svn://231.232.46.33/wdas2/fsd4,ftp://231.27.86.44:44/";

var pat =/([a-z]{3,5}):\/\/([a-z0-9.]*):?(\d{0,6})(\/?[\w\/]*)/ig;

var re;

while((re =pat.exec(str)) != null){
    console.log(re);
}




































