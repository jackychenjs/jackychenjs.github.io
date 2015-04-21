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

		var $this = $(this);
		
		function updatePos(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $ele = $(this),
					top = $ele.offset().top,
					height = $ele.height();

				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$ele.css('backgroundPosition', option.xpos + " " + (top - pos) * option.speedf + "px");
			});
		}		

		$window.on('scroll', updatePos).resize(updatePos);
		updatePos();
	}

})(jQuery);