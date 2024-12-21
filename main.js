

var errorEl = document.getElementById('error')
var formm =document.getElementById('form')
var name = document.getElementById('name')
var pass = document.getElementById('Pass')
/*
formm.addEventListener('submit',function(event){
	let error = [];
	if(name.value === '' || name == null) {
	error.push('nnnn')
})

if(textPass.value.length < 6) {
push.error(كلمة المرور يجب أن تكون أكثر من 6 أحرف)
}
if(textPass.value.length > 10) {
push.error(كلمة المرور يجب أن تكون أقل من 10 أحرف)
}
if(error.length > 0){
event.preventDefault();
errorEl.innerHTML = error.join('<br>')
}
})
*/

const dark = document.getElementById("dark")
const body = document.getElementById("body")

dark.addEventListener("click",(eo)=>{
	body.classlist.add("dark")
})