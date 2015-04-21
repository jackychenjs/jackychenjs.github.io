(function($){
	var fuc = {
		
		checkMobile : checkMobile,
		isMobile : checkMobile(true)
	}

	/*判断是否手机浏览*/
	function checkMobile(support, url){
		url = url || '/page/abc.html';
		if(navigator.platform.indexOf('Win32') == -1){ 
			if(!support){
				location.href = url;
			}
     		return true;
     	}
    	return false;
	}

	window.JCCommon = fuc;
})(jQuery);