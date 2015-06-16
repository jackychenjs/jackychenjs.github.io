$(function(){
	var fuc = {
		init: function(){
			//JCCommon.checkPlatform(true);
			JCCommon.checkMobile(true);
			//this.initFullpage();
			this.initMask();
			this.bindEvent();
			this.doParallax();
		},
		initMask : function(){
			$('<div id="divprogressbar" style="position: fixed; width: 100%; height: 100%; left: 0; top: 0; background-color: #fff; opacity:1.0; filter: alpha (opacity = 100); z-index: 9999"><div class="loading_wrap"><img src="static/images/index/loading.gif"></img><p class="css677e3e9e4bdae38e0b9e1aa6b6fa8f73">玩命加载中……</p><p id="hint" class="css677e3e9e4bdae38e0b9e1aa6b6fa8f73" style="display:none;">载入成功……</p></div></div>').appendTo($('body'));
			this.loadingMask();
		},
		bindEvent: function(){

		},
		loadingMask: function(){
			//$.fn.fullpage.setAutoScrolling(false);
	        $('body').css({
				'overflow' : 'hidden'
			});
	        window.onload = function(){
	        	$("#hint").fadeIn();
	        	setTimeout(function(){
	        		//$.fn.fullpage.setAutoScrolling(true);
	        		document.getElementById('divprogressbar').style.display='none';
	        		$('body').css({
						'overflow' : 'auto'
					});
	        	},3000);
	        };
		},
		doParallax: function(){
			$('.fp').jcParallax({speedf: 0.05});
		}


		/*initFullpage: function(){
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
		},*/
		/*abc: function(){

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

		}*/
	};
	fuc.init();
});