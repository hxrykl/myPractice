let arr = [{
    name:"te",
    gender:"male"
},{
    name:"la",
    gender:"male"
},{
    name:"vivi",
    genser:"famale"
}]
//筛选出男生方法一
let result = arr.filter(function(item){
    return item.gender === "male";
})

//方法二，
let result2 = arr.filter(item=>item.gender === "male")
console.log(result,result2);





















