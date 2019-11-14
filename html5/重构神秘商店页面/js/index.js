$(function() {
    //定义点击领取按钮改变样式方法
    function but_c() {
    	//获取样式
    	let show_b = but_gf.css('background-position')
    	if(show_b == '-8px -82px'){
    		alert('已经领取')
    	}else{
    		alert('成功领取')
    	}
    	
    	//修改样式
    	but_gf.css('background-position','-8px -82px')
    }
    //定义折扣按钮改变样式方法
    function but_d() {
    	//获取样式
    	let show_d = but_dis.css('background-position')
    	if(show_d == '-8px -78px'){
    		alert('已有折扣')
    	}else{
    		alert('获取成功')
    	}
    	
    	//修改样式
    	but_dis.css('background-position','-8px -78px')

    }
    //定义购买按钮方法
    function but_b() {
    	//获取点击的按钮的样式
    	let but_this = $(this);
        let but_css = but_this.css('background-position')
        console.log(but_css);
    	//判断
    	if(but_css == '-58px -60px'){
    		alert('购买成功')
    	}else{
    		alert('只能购买一次')
    	}
    	//修改样式
    	but_this.css('background-position','-58px -104px')
    	
    }
    //获取一键领取按钮
    let but_gf = $("#gfb")
    //获取折扣按钮
    let but_dis = $("#dis")
    //获取购买按钮
    let but_buy = $(".discount li button")
    //点击按钮触发领取事件
    but_gf.click(but_c)
    //点击触发折扣事件
    but_dis.click(but_d)
    //点击购买按钮触发事件
    but_buy.click(but_b)

})