$(function(){
	$("#simd [name='fuel']")[0].onchange = update
	$("#simd [name='ammu']")[0].onchange = update
	$("#simd [name='steel']")[0].onchange = update
	$("#simd [name='baux']")[0].onchange = update
	$("#simd [name='secretary']")[0].onchange = update
	$("#simd [name='hqlevel']")[0].onchange = update
	update()
})

function update() {
	develop($("#simd [name='fuel']")[0].value, $("#simd [name='ammu']")[0].value, $("#simd [name='steel']")[0].value, $("#simd [name='baux']")[0].value, parseInt($("#simd [name='secretary']")[0].value[1]), $("#simd [name='secretary']")[0].value[0] == "1", $("#simd [name='hqlevel']")[0].value)
}