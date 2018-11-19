require(["config"], function(){
	require(["jquery","header","tools","cookie"], function($){
		str = $.cookie("register");
		var json = JSON.parse(str);
		var password = [];
		for(var key in json[0]){
			password+=json[0][key]+","
		} 
		var arr = password.split(",");
		console.log(arr[0]);
		$("#submit").click(function(){
			var $username=$("#user").val();
			var $pass=$("#password").val();

			if($username == arr[0]){
	            if($pass !== arr[2]){
	                    alert("密码错误");
	            }else{
	            	alert("登录成功"); 
	            	    window.location.href= "/index.html";
	            }
	         
	        }else{
	            alert("用户名错误");
	        }
		})
  		$(".regist").click(function(){
			window.location.href = "zhuce.html"; 
		})	
		return false;
	})

})
