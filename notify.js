$(function(){
	var $notice = $(".notice")
	for (var i = 0; i < $notice.length; ++i) $notice[i].onclick = function() {
		alert(this.title)
	}
})