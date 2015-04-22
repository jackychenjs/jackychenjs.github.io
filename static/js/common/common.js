(function($){
	var fuc = {
		checkPlatform : checkPlatform
	}

	/*检测客户端类型是否台式机*/
	function checkPlatform(doRedirect, redirectUrl){
		var system = {
			win: false,
			mac: false,
			linux: false/*,
			ipad: false*/
		};
		var p = navigator.platform;
		system.win = p.indexOf("Win") == 0;
		system.mac = p.indexOf("Mac") == 0;
		system.linux = (p=="X11") || (p.indexOf("Linux") == 0);
		/*system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;*/
		if(system.win || system.mac || system.linux/* || system.ipad*/){
			alert(navigator.platform);
			alert(navigator.userAgent);
			alert(navigator.appVersion);
			return true;
		}else{
			if(doRedirect){
				redirectUrl = redirectUrl || "/page/error/nomobile.html";
				window.location.href = redirectUrl;
			}
			return false;
		}
	}

	function checkMobile(doRedirect, redirectUrl){
		if(!!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/)){
			if(doRedirect){
				redirectUrl = redirectUrl || "/page/error/nomobile.html";
				window.location.href = redirectUrl;
			}
			return true;
		}
		return false
	}

	window.JCCommon = fuc;
})(jQuery);