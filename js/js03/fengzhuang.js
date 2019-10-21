var $ ={

	//get请求
	get:function(url,handler){//handler形参引用匿名函数
			//1实例化对象
			var xhr = new XMLHttpRequest();
			//2设置请求行
			xhr.open("get",url);
			//3设置请求头(Content-Type)
			xhr.responseType = "json"; //设置响应的信息为json
			//4设置请求体，并且发送
			xhr.send();
			//5监听响应
			xhr.onreadystatechange = function(){
				if(this.readyState === 4){
					if(this.status === 200){
						var response = this.response;
						//console.log(this.response);
						handler.call(this,response);

					}

				}
			}
	},
	//post提交
	post:function(url,data,handler,type){
			//1实例化对象
			var xhr = new XMLHttpRequest();
			//2设置请求行
			xhr.open("post",url);
			//3设置请求头(Content-Type)
			xhr.responseType = "json"; //设置响应的信息为json
			if(!type){
				type = "application/x-www-form-urlencoded";
			}
			xhr.setRequestHeader("Content-Type",type);
			//4设置请求体，并且发送
			xhr.send(data);
			//5监听响应
			xhr.onreadystatechange = function(){
				if(this.readyState === 4){
					if(this.status === 200){
						var response = this.response;
						handler.call(this,response);
					}

				}
			}
	}
}

var o = {
	add:function(){

	},
	del:function(){

	}
}