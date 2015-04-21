$(function(){
	var fuc = {
		init: function(){

			$('.section').height($(window).height());
			//this.initFullpage();
			this.bindEvent();
			this.abc();
		},
		initMask : function(){
			$('<div id="divprogressbar" style="position: fixed; width: 100%; height: 100%; left: 0; top: 0; background-color: #fff; opacity:1.0; filter: alpha (opacity = 100); z-index: 9999"><div class="loading-wrap"><img src="static/images/loading.gif"></img><p class="css677e3e9e4bdae38e0b9e1aa6b6fa8f73">玩命加载中……</p><p id="hint" class="css677e3e9e4bdae38e0b9e1aa6b6fa8f73" style="display:none;">载入成功……</p></div></div>').appendTo($('body'));
		},
		initFullpage: function(){
			var that = this;
			var para = {
		    	'verticalCentered': false,
		    	'anchors': ['page1', 'page2', 'page3', 'page4'],
		    	'css3': false,
		    	'navigation': true,
		    	'afterRender': function(anchor){
		    		that.initMask();
		    	}
		    }
		    var ex = document.createElement("div");
			if('transform' in ex.style|| 'msTransform' in ex.style|| 'webkitTransform' in ex.style|| 'oTransform' in ex.style){
				para.css3 = true;
			}
		    $('#fullpage').fullpage(para);
		},
		bindEvent: function(){
	        this.loadingMask();

		},
		loadingMask: function(){
			//$.fn.fullpage.setAutoScrolling(false);
	        /*$('html, body').css({
				'overflow' : 'hidden',
				'height' : '100%'
			});*/
	        window.onload = function(){
	        	$("#hint").fadeIn();
	        	setTimeout(function(){
	        		//$.fn.fullpage.setAutoScrolling(true);
	        		document.getElementById('divprogressbar').style.display='none';
	        	},3000);
	        };
		},
		abc: function(){

			var movementStrength = 15;
			var height = movementStrength / $(window).height();
			var width = movementStrength / $(window).width();
			$("html").mousemove(function(e){
	          	var pageX = e.pageX - ($(window).width() / 2);
	          	var pageY = e.pageY - ($(window).height() / 2);
	          	var newvalueX = width * pageX * -1;
	          	var newvalueY = height * pageY * -1;
	          	$('.section').css("background-position", newvalueX+"px "+newvalueY+"px");
			});

		}
	};
	fuc.init();
});