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

var itemtypenames = [ "小口径主砲",
"中口径主砲",
"大口径主砲",
"副砲",
"対空機銃",
"対空強化弾",
"対艦強化弾",
"魚雷 & 特殊潜航艇",
"艦上戦闘機",
"艦上攻撃機",
"艦上爆撃機",
"艦上偵察機",
"水上機",
"レーダー",
"ソナー & 爆雷",
"機関部強化",
"追加装甲",
"陸上攻撃機",
"簡易輸送部材" ]

$(function(){
	var $cs = $(".i18n")
	for (var i = 0; i < $cs.length; ++i) {
		var t = dict[$cs[i].textContent]
		if (t != null) $cs[i].textContent = t
	}
})