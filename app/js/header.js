define(["jquery"],function($){
	function Header(){
		this.load();
	}
	Header.prototype={
		constructor:Header,
		load:function(){
			$.get("/html/component/header.html",$.proxy(this.headerHandle,this));
			$("footer").load("/html/component/footer.html")
		},
		headerHandle:function(data){
			$("header").html(data);
//			this.loadLoginUser();
		}
//		loadLoginUser:function(){
//			$.cookie.json = true;
//			var user = $.cookie("login-user");
//			if(user)
//				$("#login").parent("#lo-re").html(`<a href="#">${user.userphone}</a><a href="#" id="logout">退出</a>`);
//		}
	}
	new Header();
});