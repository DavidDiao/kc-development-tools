var itemtypenames = [ "Small Caliber Main Gun",
"Medium Caliber Main Gun",
"Large Caliber Main Gun",
"Secondary Gun",
"Anti-Aircraft Gun",
"Anti-Aircraft Shell",
"Armor Piercing Shell",
"Torpedos & Submarine",
"Carrier-Based Fighter",
"Carrier-Based Torpedo Bomber",
"Carrier-Based Dive Bomber",
"Carrier-Based Reconn",
"Seaplane",
"Radar",
"Anti-submarine Warfare",
"Engine",
"Extra Armor",
"Land-Based Attack Aircraft",
"Supply Transport Container" ]

// Id, Name, Rarity, Internal Rarity, Type, Break Materials[, is AA]
var items = [
	[1, "12cm単装砲", 1, 0, 0, [0, 1, 1, 0]],
	[2, "12.7cm連装砲", 1, 0, 0, [0, 1, 2, 0]],
	[3, "10cm連装高角砲", 2, 1, 0, [0, 1, 3, 0], true],
	[4, "14cm単装砲", 1, 0, 1, [0, 2, 1, 0]],
	[5, "15.5cm三連装砲", 2, 0, 1, [0, 2, 5, 0]],
	[6, "20.3cm連装砲", 2, 0, 1, [0, 3, 4, 0]],
	[65, "15.2cm連装砲", 2, 2, 1, [0, 2, 3, 0]],
	[7, "35.6cm連装砲", 1, 0, 2, [0, 10, 15, 0]],
	[8, "41cm連装砲", 2, 1, 2, [0, 12, 20, 0]],
	[9, "46cm三連装砲", 3, 2, 2, [0, 24, 25, 0]],
	[10, "12.7cm連装高角砲", 1, 0, 3, [0, 2, 2, 0], true],
	[11, "15.2cm単装砲", 1, 0, 3, [0, 2, 2, 0]],
	[12, "15.5cm三連装副砲", 2, 1, 3, [0, 2, 5, 0]],
	[66, "8cm高角砲", 3, 3, 3, [0, 1, 2, 0], true],
	[37, "7.7mm機銃", 1, 0, 4, [0, 1, 1, 0]],
	[38, "12.7mm単装機銃", 1, 0, 4, [0, 1, 1, 0]],
	[39, "25mm連装機銃", 2, 0, 4, [0, 2, 1, 0]],
	[40, "25mm三連装機銃", 2, 1, 4, [0, 3, 1, 0]],
	[49, "25mm単装機銃", 2, 1, 4, [0, 1, 1, 0]],
	[35, "三式弾", 2, 0, 5, [0, 9, 6, 3]],
	[36, "九一式徹甲弾", 3, 1, 6, [0, 3, 9, 0]],
	[13, "61cm三連装魚雷", 1, 0, 7, [1, 1, 1, 0]],
	[14, "61cm四連装魚雷", 1, 0, 7, [1, 2, 2, 0]],
	[15, "61cm四連装(酸素)魚雷", 2, 1, 7, [2, 2, 2, 0]],
	[41, "甲標的", 1, 1, 7, [0, 7, 7, 0]],
	[19, "九六式艦戦", 1, 0, 8, [1, 1, 0, 1]],
	[20, "零式艦戦21型", 1, 0, 8, [1, 1, 0, 2]],
	[21, "零式艦戦52型", 2, 1, 8, [1, 2, 0, 3]],
	[22, "烈風", 3, 3, 8, [2, 2, 0, 9]],
	[55, "紫電改二", 3, 2, 8, [2, 2, 0, 7]],
	[181, "零式艦戦32型", 2, 3, 8, [1, 2, 0, 2]],
	[16, "九七式艦攻", 1, 0, 9, [1, 1, 0, 2]],
	[17, "天山", 2, 1, 9, [2, 4, 0, 4]],
	[18, "流星", 3, 2, 9, [2, 5, 0, 10]],
	[52, "流星改", 3, 3, 9, [2, 6, 0, 10]],
	[23, "九九式艦爆", 1, 0, 10, [1, 1, 0, 2]],
	[24, "彗星", 2, 1, 10, [2, 3, 0, 3]],
	[57, "彗星一二型甲", 3, 2, 10, [2, 3, 0, 4]],
	[60, "零式艦戦62型(爆戦)", 3, 2, 10, [1, 3, 0, 3]],
	[54, "彩雲", 3, 2, 11, [2, 0, 0, 11]],
	[61, "二式艦上偵察機", 2, 1, 11, [3, 1, 0, 13]],
	[25, "零式水上偵察機", 1, 1, 12, [1, 1, 0, 2]],
	[26, "瑞雲", 2, 1, 12, [2, 3, 0, 5]],
	[59, "零式水上観測機", 2, 1, 12, [1, 1, 0, 2]],
	[163, "Ro.43水偵", 3, 3, 12, [1, 1, 0, 2]],
	[27, "13号対空電探", 2, 1, 13, [0, 0, 10, 10]],
	[28, "22号対水上電探", 2, 1, 13, [0, 0, 15, 15]],
	[29, "33号対水上電探", 3, 2, 13, [0, 0, 20, 15]],
	[30, "21号対空電探", 2, 2, 13, [0, 0, 20, 20]],
	[31, "32号対水上電探", 3, 3, 13, [0, 0, 20, 25]],
	[32, "14号対空電探", 3, 4, 13, [0, 0, 25, 25]],
	[44, "九四式爆雷投射機", 1, 0, 14, [0, 2, 1, 1]],
	[45, "三式爆雷投射機", 3, 2, 14, [0, 3, 1, 1]],
	[46, "九三式水中聴音機", 1, 0, 14, [0, 0, 1, 1]],
	[47, "三式水中探信儀", 3, 2, 14, [0, 0, 1, 2]],
	[33, "改良型艦本式タービン", 1, 0, 15, [10, 0, 10, 0]],
	[34, "強化型艦本式缶", 2, 1, 15, [10, 0, 20, 0]],
	[72, "増設バルジ(中型艦)", 2, 2, 16, [0, 0, 12, 0]],
	[73, "増設バルジ(大型艦)", 2, 2, 16, [0, 0, 30, 0]],
	[168, "九六式陸攻", 1, 1, 17, [7, 4, 0, 12]],
	[75, "ドラム缶(輸送用)", 1, 0, 18, [0, 0, 1, 0]]
]

var materialNames = ["Fuel", "Ammunition", "Steel", "Bauxite"]

function developResult(id, percentage, materials, hqlevel) {
	this.id = id
	this.percentage = percentage
	this.successful = true
	for (var i = 0; i < 4; ++i) {
		if (items[id][5][i] * 10 > materials[i]) {
			this.successful = false
			break
		}
	}
	if (items[id][3] * 10 > hqlevel) this.successful = false

	this.toTRNode = function() {
		var node = document.createElement("tr")
		if (this.successful) node.className = "success"
		else {
			node.className = "fail"
			var title = "Require"
			for (var i = 0; i < 4; ++i) {
				if (items[id][5][i] * 10 > materials[i]) {
					title += "\n" + getString(materialNames[i]) + " ≥ " + (items[id][5][i] * 10)
				}
			}
			if (items[id][3] * 10 > hqlevel) {
				title += "\n" + getString("HQ Level") + " ≥ " + (items[id][3] * 10)
			}
			node.title = getString(title)
		}
		var tdnode = document.createElement("td")
		tdnode.className = "type" + (items[id][6] ? 4 : items[id][4])
		tdnode.appendChild(document.createTextNode(items[id][1]))
		node.appendChild(tdnode)
		tdnode = document.createElement("td")
		tdnode.appendChild(document.createTextNode(percentage + "%"))
		node.appendChild(tdnode)
		return node
	}
}