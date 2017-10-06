(function(){
	var lang = window.location.search.substr(1)
	if (["en","zh","ja"].indexOf(lang) < 0) {
		lang = navigator.browserLanguage ? navigator.browserLanguage : navigator.language
		if (lang.indexOf("zh") >= 0) lang = "zh"
		else if (lang.indexOf("ja") >= 0) lang = "ja"
		else lang = "en"
	}
	if (lang != "en") $.getScript("lang_" + lang + ".js", function(){
		$(function(){
			var $cs = $(".i18n")
			for (var i = 0; i < $cs.length; ++i) $cs[i].innerText = getString($cs[i].innerText)
			$cs = $(".notice")
			for (var i = 0; i < $cs.length; ++i) $cs[i].title = getString($cs[i].title)
			createList()
			updateSim()
		})
	})
	$(function(){
		$("#lang").find("[value=" + lang + "]")[0].selected = true
		$("#lang")[0].onchange = function() {
			location.href = "?" + $("#lang")[0].selectedOptions[0].value + window.location.hash
		}
	})
}())
dict = undefined
function getString(src) {
	if (dict == undefined) return src
	for (var name in dict) {
		src = src.replace(new RegExp(name, "g"), dict[name])
	}
	return src
}