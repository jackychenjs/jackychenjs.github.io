$(function(){
	var para = {
    	'verticalCentered': false,
    	'css3': false
    }
    var a = document.createElement("div");
	if('transform' in a.style|| 'msTransform' in a.style|| 'webkitTransform' in a.style){
		para.css3 = true;
	}
    $('#fullpage').fullpage(para);
});