//	arrow - function
const sayHello = (text, name) => {
	return console.log(text, name + '!');
}
sayHello('Hello', 'User');

//	lambda - лямбда функция
const sayBye= text => console.log(text);
sayBye('Bye!');

const getMax = (n1, n2) => console.log('Max:', n1 > n2 ? n1:n2);
getMax(4, 7)

const printSome = message => {
	let num = 18
	return message + num
}
console.log(printSome('age - '));



const groups = ['24-03', '25-03', '26-03', '27-03']
const allGroup1 = groups.map(i => `group: ${i}`)
console.log(allGroup1);

const allGroup2 = groups.map(function(i){
	return `group: ${i}`
})
console.log(allGroup2);



//	замыкание в функциях
function createPlayer(name) {
	let score = 0
	return function scoreCount() {
		score++
		return `${name} - ${score} score`
	}
}
const player1 = createPlayer('P1')
const player2 = 'P2'

//	область видимости
//	1) глабальная		——	все что внутри данного файла	——	conth num = 0
//	2) функциональная	——	все что внутри данной функции	——	function f(){conth num = 0}
//	3) локальная		——	все что внутри кривых скобкок	——	{conth num = 0}



//	DOM - элементы
document.querySelector('.button')	//	class
document.querySelector('#button')	//	ID

const button = document.querySelector('.button').addEventListener('click', function(){	//	анонимная функция
	console.log('clicked');																//	нету названия функции
})

const button2 = document.querySelectorAll('.button')


//	создание элементов
const div = document.createElement('div')
div.classList.add('wrapper')

const body = document.body
body.appendChild(div)

const header = document.createElement('h1')
header.textContent = 'Frontend 27-03'
body.appendChild(header)


const ul = `
<ul>
	<li>one</li>
	<li>two</li>
	<li>three</li>
</ul>
`
div.innerHTML = ul


const input = document.querySelector('input')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('.decrement')

increment.onclick = () => {
	input.value++
}

decrement.onclick = () => {
	input.value--
}