require(["config"], function(){
	require(["jquery","header","template","cookie"], function($,header,template){
		var ul = $("#demo");
		var str = $.cookie("cart");
			console.log(str);
			var json = JSON.parse(str);
			for(var i =0;i<json.length;i++){
				var li =document.createElement("li");
				li.innerHTML="<span>"+json[i].name+"</span><span>"+json[i].no+"</span><span>"+json[i].price+"</span>"
				ul.append(li)
				
				
			}
		$("body").on("click","#btn",function(){
			var allprice =0;
			
		
		})
			
	})
})