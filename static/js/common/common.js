(function($){
	var fuc = {
		checkPlatform : checkPlatform,
		isPC : checkPlatform(false)
	}

	/*检测客户端类型是否台式机*/
	function checkPlatform(doRedirect, redirectUrl){
		var system = {
			win: false,
			//mac: false,
			linux: false,
			ipad: false
		};
		var p = navigator.platform;
		system.win = p.indexOf("Win") == 0;
		//system.mac = p.indexOf("Mac") == 0;
		system.linux = (p=="X11") || (p.indexOf("Linux") == 0);
		if(system.win || system.mac || system.linux/* || system.ipad*/){
			return true;
		}else{
			if(doRedirect){
				redirectUrl = redirectUrl || "/page/error/nomobile.html";
				window.location.href = redirectUrl;
			}
			return false;
		}
	}

	window.JCCommon = fuc;
})(jQuery);