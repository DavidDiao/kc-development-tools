$(function(){
	function select() {
		var $ptab = $(this.parentElement.parentElement)
		var $lis = $ptab.find("li,a")
		for (var i = 0; i < $lis.length; ++i) {
			if (i == this.index) $lis[i].classList.add("selected")
			else $lis[i].classList.remove("selected")
		}
		var $divs = $ptab.find("> div")
		for (var i = 0; i < $divs.length; ++i) {
			if (i == this.index) $divs[i].classList.remove("hidden")
			else $divs[i].classList.add("hidden")
		}
	}
	var $tabs = $(".tab")
	var hash = window.location.hash.substr(1)
	for (var i = 0; i < $tabs.length; ++i) {
		var tab = $tabs[i]
		var $tab = $(tab)
		var $lis = $tab.find("li,a")
		for (var j = 0; j < $lis.length; ++j) {
			$lis[j].index = j
			$lis[j].onclick = select
		}
		if (hash != "") {
			hash += "d"
			var $divs = $(tab).find("> div")
			for (var j = 0; j < $divs.length; ++j) {
				if ($divs[j].id == hash) {
					for (var k = 0; k < $lis.length; ++k) $lis[k].classList.remove("selected")
					for (var k = 0; k < $divs.length; ++k) $divs[k].classList.add("hidden")
					$lis[j].classList.add("selected")
					$divs[j].classList.remove("hidden")
					break
				}
			}
		}
	}
})