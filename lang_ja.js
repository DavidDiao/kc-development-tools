document.title = "艦これ　装備開発ツール"
document.body.lang = "ja"
var dict = { "KanColle Development Tools": "艦これ　装備開発ツール",
"Development Simulator & Recipe Generator": "開発シミュレータ&複合レシピジェネレータ",
"Development Simulator": "開発シミュレータ",
"Recipe Generator": "複合レシピジェネレータ",
"Fuel": "燃料",
"Ammunition": "弾薬",
"Steel": "鋼材",
"Bauxite": "ボーキ",
"Secretary": "秘書艦",
"HQ Level": "司令部LV",
"Torpedo Family": "水雷系",
"Gunboat Family": "砲戦系",
"Carrier Family": "空母系",
"Name": "名称",
"Percentage": "確率",
"Failed": "失敗",
"Project Homepage": "ホームページへ",
"Feedback": "フィードバック",
"Data Source(Chinese)": "データのソース（中国語）" }
$(function(){
	var $cs = $(".i18n")
	for (var i = 0; i < $cs.length; ++i) {
		var t = dict[$cs[i].textContent]
		if (t != null) $cs[i].textContent = t
	}
})