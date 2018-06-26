(function(){
	var lang = window.location.search.substr(1)
	if (["en","zh","zh-tw","ja"].indexOf(lang) < 0) {
		lang = (navigator.browserLanguage ? navigator.browserLanguage : navigator.language).toLowerCase()
		if (lang.indexOf("zh-tw") >= 0) lang = "zh-tw"
		else if (lang.indexOf("zh") >= 0) lang = "zh"
		else if (lang.indexOf("ja") >= 0) lang = "ja"
		else if (navigator.languages != undefined) { 
			for (var i = 0; i < navigator.languages.length; ++i) {
				if (navigator.languages[i].toLowerCase().indexOf("zh-tw") >= 0) {
					lang = "zh-tw"
					break
				}
				if (navigator.languages[i].indexOf("zh") >= 0) {
					lang = "zh"
					break
				}
				if (navigator.languages[i].indexOf("ja") >= 0) {
					lang = "ja"
					break
				}
				if (navigator.languages[i].indexOf("en") >= 0) break
			}
			if ((lang != "zh") && (lang != "ja")) lang = "en"
		}
	}
	if (lang == "zh") {
document.title = "舰队Collection 开发工具"
$(function(){document.body.lang = "zh"})
dict = { "KanColle Development Tools": "舰队Collection 开发工具",
"Development Simulator & Recipe Generator": "开发模拟器 & 复合公式生成器",
"Development Simulator": "开发模拟器",
"Recipe Generator": "复合公式生成器",
"Probability Table": "概率一览表",
"Fuel": "油",
"Ammunition": "弹",
"Ammu": "弹",
"Steel": "钢",
"Bauxite": "铝",
"Dev. Mat.": "开发资材",
"Secretary": "秘书舰",
"HQ Level": "提督等级",
"Torpedo Family": "水雷系",
"Gunboat Family": "炮舰系",
"Carrier Family": "航母系",
"Require": "需要",
"Min ": "最低",
"No Result": "无结果",
"Details": "详细",
"Expected Resource Consumption": "期望出货消耗",
"Get Target": "出货",
"Develop": "开发",
"Success Rate": "成功率",
"Failure Rate": "失败率",
"Name": "名称",
"Percentage": "概率",
"Failed": "失败",
"Internal": "内部",
"Rarity": "稀有度",
"(\\d{1,2}%) when (.*?) is available": "$2 加入列表时为 $1",
"Only available when\r?\nmaterial is greater than\r?\n([0-9\\/]*)": "仅资源投入达到\n$1\n时加入列表",
" ?Italian Flagship": "意舰旗舰",
"No records for Luigi Torelli and Aquila": "Luigi Torelli、Aquila 无出货记录",
"Project Homepage": "项目页面",
"Feedback": "反馈",
"Data Source\\(Chinese\\)": "数据来源" }

itemtypenames = [ "小口径主炮",
"中口径主炮",
"大口径主炮",
"副炮",
"机枪",
"对空强化弹",
"穿甲弹",
"鱼雷 & 微型潜艇",
"舰载战斗机",
"舰载鱼雷机",
"舰载轰炸机",
"舰载侦查机",
"水上机",
"电探",
"对潜装备",
"引擎",
"增设装甲板",
"陆基攻击机",
"简易运输桶" ]
	} else if (lang == "zh-tw") {
document.title = "艦隊Collection 開發工具"
$(function(){document.body.lang = "zh-tw"})
dict = { "KanColle Development Tools": "艦隊Collection 開發工具",
"Development Simulator & Recipe Generator": "開發模擬器 & 複合公式生成器",
"Development Simulator": "開發模擬器",
"Recipe Generator": "複合公式生成器",
"Probability Table": "概率一覽表",
"Fuel": "油",
"Ammunition": "彈",
"Ammu": "彈",
"Steel": "鋼",
"Bauxite": "鋁",
"Dev. Mat.": "開發資材",
"Secretary": "秘書艦",
"HQ Level": "提督等級",
"Torpedo Family": "水雷系",
"Gunboat Family": "炮艦系",
"Carrier Family": "航母系",
"Require": "需要",
"Min ": "最低",
"No Result": "無結果",
"Details": "詳細",
"Expected Resource Consumption": "期望出貨消耗",
"Get Target": "出貨",
"Develop": "開發",
"Success Rate": "成功率",
"Failure Rate": "失敗率",
"Name": "名稱",
"Percentage": "概率",
"Failed": "失敗",
"Internal": "内部",
"Rarity": "稀有度",
"(\\d{1,2}%) when (.*?) is available": "$2 加入列表時為 $1",
"Only available when\r?\nmaterial is greater than\r?\n([0-9\\/]*)": "僅資源投入達到\n$1\n時加入列表",
" ?Italian Flagship": "意艦旗艦",
"No records for Luigi Torelli and Aquila": "Luigi Torelli、Aquila 無出貨記錄",
"Project Homepage": "項目頁面",
"Feedback": "反饋",
"Data Source\\(Chinese\\)": "數據來源" }

itemtypenames = [ "小口徑主砲",
"中口徑主砲",
"大口徑主砲",
"副砲",
"機槍",
"對空強化彈",
"穿甲彈",
"魚雷 & 微型潛艇",
"艦載戰鬥機",
"艦載魚雷機",
"艦載轟炸機",
"艦載偵查機",
"水上機",
"電探",
"對潛裝備",
"引擎",
"增設裝甲板",
"陸基攻擊機",
"簡易運輸桶" ]
	} else if (lang == "ja") {
document.title = "艦これ　装備開発ツール"
$(function(){document.body.lang = "ja"})
dict = { "KanColle Development Tools": "艦これ　装備開発ツール",
"Development Simulator & Recipe Generator": "開発シミュレータ&複合レシピジェネレータ",
"Development Simulator": "開発シミュレータ",
"Recipe Generator": "複合レシピジェネレータ",
"Probability Table": "確率一覧表",
"Fuel": "燃料",
"Ammunition": "弾薬",
"Ammu": "弾薬",
"Steel": "鋼材",
"Bauxite": "ボーキ",
"Dev. Mat.": "開発資材",
"Secretary": "秘書艦",
"HQ Level": "司令部LV",
"Torpedo Family": "水雷系",
"Gunboat Family": "砲戦系",
"Carrier Family": "空母系",
"Min ": "最低",
"No Result": "結果がない",
"Details": "詳細",
"Expected Resource Consumption": "予想した資源の使用量",
"Get Target": "目安を入手",
"Develop": "開発",
"Success Rate": "成功率",
"Failure Rate": "失敗率",
"Name": "名称",
"Percentage": "確率",
"Failed": "失敗",
"Internal": "内部の",
"Rarity": "レア度",
"(\\d{1,2}%) when (.*?) is available": "$2 が出る時の確率は $1",
"Only available when\r?\nmaterial is greater than\r?\n([0-9\\/]*)": "材料使用量が\n$1\n以上の場合のみ",
"Require Italian Flagship": "イタリア艦を秘書艦に\n任命する必要があります",
"Require(\\r?\\n| )([\\w\\W]*)": "$2$1を必要とする",
"Italian Flagship": "イタリア艦を秘書艦に任命する",
"No records for Luigi Torelli and Aquila": "Luigi Torelli と Aquila に関する記録はありません",
"Project Homepage": "ホームページへ",
"Feedback": "フィードバック",
"Data Source\\(Chinese\\)": "データのソース（中国語）" }

itemtypenames = [ "小口径主砲",
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
"増設バルジ",
"陸上攻撃機",
"簡易輸送部材" ]
	} else $(function(){document.body.lang = "en"})
	$(function(){
		var $cs = $(".i18n")
		for (var i = 0; i < $cs.length; ++i) $cs[i].innerText = getString($cs[i].innerText)
		$cs = $(".notice")
		for (var i = 0; i < $cs.length; ++i) $cs[i].title = getString($cs[i].title)

		$("#lang").find("[value=" + lang + "]")[0].selected = true
		$("#lang")[0].onchange = function() {
			location.href = "?" + $("#lang")[0].selectedOptions[0].value + window.location.hash
		}
	})
}())
var dict
function getString(src) {
	if (dict == undefined) return src
	for (var name in dict) {
		src = src.replace(new RegExp(name, "g"), dict[name])
	}
	return src
}