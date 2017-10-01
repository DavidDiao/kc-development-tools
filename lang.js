(function(){
	var lang = window.location.search.substr(1)
	if (["en","zh","ja"].indexOf(lang) < 0) {
		lang = navigator.browserLanguage ? navigator.browserLanguage : navigator.language
		if (lang.indexOf("zh") >= 0) lang = "zh"
		else if (lang.indexOf("ja") >= 0) lang = "ja"
		else lang = "en"
	}
	if (lang != "en") $.getScript("lang_" + lang + ".js")
	$(function(){
		// $("#lang").find(`[value=${lang}]`)[0].selected = true
		$("#lang").find("[value=" + lang + "]")[0].selected = true
		$("#lang")[0].onchange = function() {
			location.href = "?" + $("#lang")[0].selectedOptions[0].value
		}
	})
}())
dict = undefined
function getString(src) {
	if (dict == undefined) return src
	if (dict[src] == undefined) return src
	return dict[src]
}