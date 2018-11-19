require.config({
	baseUrl: "/",
	paths: {
		"header": "js/header",
		"jquery": "libs/jquery/jquery-1.11.3",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"carousel":"libs/jquery-plus/jquery.carousel",
		"tools": "libs/tools",
		"template":"libs/template-web",
		"cookie":"libs/jquery-plus/jquery.cookie",
		"zoom":"libs/jquery-plus/jquery.elevatezoom",
	},
	//垫片
	shim:{
		"bootstrap": {
			deps: ["jquery"]
		},
		"zoom":{
			deps:["jquery"]
		}
	}
})