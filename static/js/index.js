$(function(){
	var fuc = {
		init: function(){
			this.initFullpage();
			this.initEvent();
		},
		initMask : function(){
			$('<div id="divprogressbar" style="position: fixed; width: 100%; height: 100%; left: 0px; top: 0px; background-color: #fff; opacity:1.0; filter: alpha (opacity = 100); z-index: 9999"><div class="loading-wrap"><img src="static/images/loading.gif"></img><p class="css0fba4a22b5f662176bba6345ce42eb2b">玩命加载中……</p><p id="hint" class="css0fba4a22b5f662176bba6345ce42eb2b" style="display:none;">载入成功……</p></div></div>').appendTo($('body'));
		},
		initFullpage: function(){
			var that = this;
			var para = {
		    	'verticalCentered': false,
		    	'anchors': ['page1', 'page2', 'page3', 'page4'],
		    	'css3': false,
		    	'navigation': true,
		    	'afterRender': function(){
		    		that.initMask();
		    	}
		    }
		    var ex = document.createElement("div");
			if('transform' in ex.style|| 'msTransform' in ex.style|| 'webkitTransform' in ex.style|| 'oTransform' in ex.style){
				para.css3 = true;
			}
		    $('#fullpage').fullpage(para);
		},
		initEvent: function(){
			/*document.onreadystatechange = function () {   
	            if(document.readyState=="complete") {
	            	$("#hint").fadeIn();
	            	setTimeout(function(){
	            		document.getElementById('divprogressbar').style.display='none';
	            	},5000)
	            } 
	        };*/
	        window.onload = function(){
            	$("#hint").fadeIn();
            	setTimeout(function(){
            		//document.getElementById('divprogressbar').style.display='none';
            	},3000)
	        };
		}
	};
	fuc.init();
});