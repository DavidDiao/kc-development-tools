$(function(){
	function select() {
		var $ptab = $(this.parentElement.parentElement)
		var $lis = $ptab.find("li")
		for (var i = 0; i < $lis.length; ++i) {
			if (i == this.index) $lis[i].className = "selected"
			else $lis[i].className = ""
		}
		var $divs = $ptab.find("div")
		for (var i = 0; i < $divs.length; ++i) {
			if (i == this.index) $divs[i].className = ""
			else $divs[i].className = "hidden"
		}
	}
	var $tabs = $(".tab")
	for (var i = 0; i < $tabs.length; ++i) {
		var tab = $tabs[i]
		var $tab = $(tab)
		var $lis = $tab.find("li")
		for (var j = 0; j < $lis.length; ++j) {
			$lis[j].index = j
			$lis[j].onclick = select
		}
	}
})