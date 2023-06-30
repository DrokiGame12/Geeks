const buttons = document.querySelectorAll('button')
for(let i = 0; i < buttons.length; i++){
	const button = buttons[i]
	button.onclick = function(){
		button.innerHTML = button.innerHTML === 'показать ответ' ? 'скрыть ответ':'показать ответ'
		document.querySelectorAll('.hide_answer')[i].classList.toggle('answer')
	}
}