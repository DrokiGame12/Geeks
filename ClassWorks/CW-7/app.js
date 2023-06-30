//	Функции высшего порядка
//	callback - функция обратного вызова
//	codeWars - задачки в гугле (практика)

function buttonClick() {
	return console.log('click')
}
let button = document.querySelector('.button')
button.addEventListener('click', buttonClick)	//addEventListener - Функции высшего порядка, функция вызывает функцию



function getMath(...numbers) {
	let newArr = []
	for(let i = 0; i < numbers.length; i++){
		newArr.push(numbers[i] ** 2)
	}
	return newArr
}
console.log(getMath(2, 4, 6, 8, 10))


function someMath(array, todo){
	let newArr = []
	for(let i = 0; i < array.length; i++){
		newArr.push(todo(array[i]))
	}
	return newArr
}

function math1(num){
	return num - 2
}
function math2(num){
	return num * 2
}

console.log(someMath([2, 4, 6, 8, 10], math1))
console.log(someMath([2, 4, 6, 8, 10], math2))