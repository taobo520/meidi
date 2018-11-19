require(["config"], function(){
	require(["jquery","header","template","zoom","cookie"], function($,header,template,zoom,cookie){
		
				var str = location.search.slice(1);
				var arr = str.split("=");
				var obj ={};
				obj[arr[0]] = arr[1];
			$.ajax({
				url:"http://localhost/projectserver/api/detail.php",
				method: "POST",
				data: obj,
				dataType:"json",
				success: function(res){
					if(res.code ===1){
					var html = template("detail-template",{product: res.product});
					$("#detail").html(html);
						
					}
				}
                  
			})
			
	})
})