require(["config"], function(){
	require(["jquery","header" ,"template"], function($,header,template){
		new Promise(function(resolve,reject){
	            resolve();
			}).then(function(){
			$.ajax({
				method: "get",
				url:"http://rap2api.taobao.org/app/mock/116903/products",
				success: function(res){
					console.log(res);
					var html = template("pro-template",{products: res.products});
					console.log(html);
					$("#proList").html(html);
				}

			})
		})
		
	})
})