
let axios = require("axios")
let qs = require("qs")
//配置默认的基础路径
axios.defaults.baseURL = "http://39.105.108.131:6677";
axios.defaults.headers.post["Content-Type"] = "application/appliction/x-www-form-urlencoded";
axios.defaults.transformRequest = [(data)=>{
    return qs.stringify(data);
}]

//统一拦截器
axios.interceptors.response.use(function(response){
    console.log("---------拦截-------");
    return response;
},function(error){
    console.log("----------错误-----------");
    return Promise.reject(error);
});


function saveCustomer(){

    let data = {
    realname:"张胜男",
    telephone:"1234345345"
    }
    axios({
        url:"/customer/saveOrUpdate",
        method:"post",
        //headers:{
         //   "Content-Type":"appliction/x-www-form-urlencoded"
        //},
        data,
        //transformRequest:[(data)=>{
        //    return qs.stringify(data);
        //}]
    })
    .then((response)=>{
        console.log(response.data);
    })
    .catch(()=>{
        console.log("error");
    })
}
//saveCustomer();
function findCustomer(){
    axios({
        url:"/customer/findAll1",
        method:"get"
    })
        .then((response)=>{
            console.log("顾客信息：",response.data);
        })
}
findCustomer();






