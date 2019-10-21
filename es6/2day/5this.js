let obj = {
    data:{
        name:"one",
        list:[1,4,3,2]
    },
    foo(){
        //通过方法遍历打印出外部的值，方法1
        //let o =this;
        //this.data.list.forEach(function(item,index){
          //  console.log(o.data.name)
       // })
        //方法2
        this.data.list.forEach((item)=>{
            console.log(this.data.name);
        })
}}

obj.foo();























