/*
 *  Editor        jacky_cjs
 *  Created       2015.04.21
 *  Version       0.1
 *  LastModified  2015.04.21
 *  ModifiedTips

 */

(function($){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	/*视差滚动*/
	$.fn.JCparallax = function(opt){
		var option = $.extend({
			xpos : '50%',
			speedf : 0.1
		}, opt || {});

		var $this = $(this),
			firstTop = $this.offset().top;
		
		function updatePos(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this),
					top = $element.offset().top,
					height = $element.height();

				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$element.css('backgroundPosition', option.xpos + " " + Math.round((firstTop - pos) * option.speedf) + "px");
			});
		}		

		$window.on('scroll', updatePos).resize(updatePos);
		updatePos();
	}

})(jQuery);