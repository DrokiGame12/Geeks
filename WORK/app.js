//	todo list
const input = document.querySelector('#input')
const createButton = document.querySelector('.create_button')
const todoList = document.querySelector('.todo_list')

const createTodo = () => {
	if(!input.value.trim()){
		return false
	}else{
		const div = document.querySelector('div')
		const h3 = document.querySelector('h3')
		const divButton = document.querySelector('div')
		const deleteButton = document.querySelector('button')
		const editButton = document.querySelector('button')

		div.setAttribute('class', 'block_text')
		deleteButton.setAttribute('class', 'delete_button')
		editButton.setAttribute('class', 'edit_button')
		divButton.setAttribute('class', 'div_button')

		deleteButton.innerHTML = 'delete'
		editButton.innerHTML = 'edit'
		h3.innerHTML = input.value

		divButton.append(deleteButton, editButton)
		div.append(h3, divButton)
		todoList.prepend(div)
	}
}


createButton.onclick = () => createTodo()
window.addEventListener('keydown', (key) => {
	if(key.code === 'Enter') createTodo
})