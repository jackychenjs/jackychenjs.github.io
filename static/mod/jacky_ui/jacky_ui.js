/*
 * Editor   jacky_cjs
 * Date     2015.04.21
 * Version  0.1
 */


(function($){
	/*视差滚动*/
	$.fn.Jparallax = function(opt){
		var option = $.extend({
			xpos : 50%,
			speedf : 0.1,
			oheight : true
		}, opt || {});

		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
			
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (opt.oheight) {
			getHeight = function(jqo) {
				return jqo.oheight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			}; 
		}
		
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedf) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	}


})(jQuery);