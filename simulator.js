var head = document.createElement("tr")
var failtr = document.createElement("tr")
var collapse = document.createElement("a")
;(function(){
	var tnode = document.createElement("th")
	tnode.className = "i18n"
	tnode.appendChild(document.createTextNode(getString("Name")))
	tnode.style.width = "250px"
	head.appendChild(tnode)
	tnode = document.createElement("th")
	tnode.className = "i18n"
	tnode.appendChild(document.createTextNode(getString("Percentage")))
	tnode.style.width = "50px"
	head.appendChild(tnode)
	failtr.className = "failtr"
	tnode = document.createElement("td")
	var tnode2 = document.createElement("span")
	tnode2.innerHTML = "Failed"
	tnode2.className = "i18n"
	tnode.appendChild(tnode2)
	tnode.appendChild(document.createTextNode(" "))
	collapse.href = "javascript:void(0);"
	collapse.onclick = function() {
		if (this.innerHTML == "[+]") {
			$(this.parentNode.parentNode.parentNode).find(".fail").css("display", "table-row")
			this.innerHTML = "[-]"
		} else {
			$(this.parentNode.parentNode.parentNode).find(".fail").css("display", "")
			this.innerHTML = "[+]"
		}
	}
	collapse.innerHTML = "[+]"
	tnode.appendChild(collapse)
	failtr.appendChild(tnode)
	tnode = document.createElement("td")
	failtr.appendChild(tnode)
}())

$(function(){
	$("#result")[0].appendChild(head)
	$("#simd [name='fuel']")[0].onchange = updateSim
	$("#simd [name='ammu']")[0].onchange = updateSim
	$("#simd [name='steel']")[0].onchange = updateSim
	$("#simd [name='baux']")[0].onchange = updateSim
	$("#simd [name='secretary']")[0].onchange = updateSim
	$("#simd [name='hqlevel']")[0].onchange = updateSim
	updateSim()
})

function updateSim() {
	var result = develop($("#simd [name='fuel']")[0].value, $("#simd [name='ammu']")[0].value, $("#simd [name='steel']")[0].value, $("#simd [name='baux']")[0].value, parseInt($("#simd [name='secretary']")[0].value[1]), $("#simd [name='secretary']")[0].value[0] == "1", $("#simd [name='hqlevel']")[0].value)
	var succ = result[0], fail = result[1]
	var table = $("#result")[0]
	while (table.children[1] != undefined) table.removeChild(table.children[1])
	for (var i = 0; i < succ.length; ++i) table.appendChild(succ[i].toTRNode())
	failtr.children[1].innerHTML = result[2] + "%"
	collapse.innerHTML = "[+]"
	table.appendChild(failtr)
	for (var i = 0; i < fail.length; ++i) table.appendChild(fail[i].toTRNode())
}
