require(["config"], function(){
	require(["jquery", "header","carousel"], function($){

//	promise
//		new Promise(function(resolve, reject){
//		$("header").load("/html/component/header.html", function(){
//				resolve();
//			});
		function Index(){
			this.loadCarousel();
		}
		$.extend(Index.prototype,{
		loadCarousel:function(){				
			$(".slider").carousel({
					imgs:[
					{href:"#",src:"/images/h.jpg"},
					{href:"#",src:"/images/b.jpg"},
					{href:"#",src:"/images/c.jpg"},
					{href:"#",src:"/images/d.png"},
					{href:"#",src:"/images/e.jpg"},
					{href:"#",src:"/images/f.png"}
				],					
				width: 1263,
				height: 490,
				duration: 1000
				});
			}
	});
		new Index();
//	});
			
		})
})