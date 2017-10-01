$(function(){
	$("#simulator [name='fuel']")[0].onchange = update
	$("#simulator [name='ammu']")[0].onchange = update
	$("#simulator [name='steel']")[0].onchange = update
	$("#simulator [name='baux']")[0].onchange = update
	$("#simulator [name='secretary']")[0].onchange = update
	$("#simulator [name='hqlevel']")[0].onchange = update
	update()
})

function update() {
	develop($("#simulator [name='fuel']")[0].value, $("#simulator [name='ammu']")[0].value, $("#simulator [name='steel']")[0].value, $("#simulator [name='baux']")[0].value, parseInt($("#simulator [name='secretary']")[0].value[1]), $("#simulator [name='secretary']")[0].value[0] == "1", $("#simulator [name='hqlevel']")[0].value)
}