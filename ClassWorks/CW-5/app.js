// function getCoffee() {
// 	var drinkName = prompt('What do you want?').toLowerCase()
// 	if(drinkName === 'coffee'){
// 		var coffee = prompt('How do you want coffee?').toLowerCase()
// 		switch(coffee) {
// 			case 'black':
// 				alert('One black coffee coming up!')
// 				break;
// 			case 'with milk':
// 				alert('One coffee with milk coming up!')
// 				break;
// 			default:
// 				alert('Sorry, we do not have ' + coffee + '!');
// 				break;
// 		}
// 	}else{
// 		console.error('Sorry, we do not have ' + drinkName + '!');
// 	}
// }
//getCoffee()


//	ES6+
//console.log(name1);			// можно
var name1 = 'name 1' 		// hoitsting, можно использовать до создания переменной
console.log(name1);

//console.log(name2);		  	// нельзя
let name2 = 'name 2'		// let, нельзя использовать до создания переменной
console.log(name2);

const name3 = 'name 3'
console.log(name3);
//name3 = []					// нельзя, т.к. он зафиксирован (constantent)


// rest - параметры, arguments 
function getAllSum1(){
	console.log(arguments);
	let sum = Array.from(arguments).reduce((n1, n2) => n1 += n2)
	console.log(sum);
}
getAllSum1(2, 3)

//	(...) - spred, бесконечное количество переменных, выводится как массив []
function getAllSum2(...numbers) {
	let sum = numbers.reduce((n1, n2) => n1 += n2) / arguments.length
	console.log(sum);
}
getAllSum2(1, 3, 5)


function converUSD(usd, ...som){
	console.log(usd, som);
	return som.map(i => i / usd)
}
console.log(converUSD(87, 87, 870, 87000, 8700000));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [n1, n2, n3, n4, ...others] = numbers
console.log(n1, n2, n3, n4, others);


const el1 = [1, 2, 3]
const el2 = [4, 5, 6]
const el3 = [...el1, ...el2]
console.log(el3);


//	this - функция в объекте
var objectUser = {
	name: 'Aidana',
	surname: 'Bakova',
	number: 123456,
	address: null,
	isMarried: false,
	object: {
		undef: undefined
	},
	showInfo(){
		console.log(`${this.name} is ${objectUser.object.undef}`);
	},
	showInfo2(){
		function info() {
			console.log(`${this.name} ${this.surname} and other information`); 	// (undefined) смотрит на родительский объект
		}
		info()
	}
}
objectUser.showInfo()
objectUser.showInfo2()


//	default - params
let arr = [1, 1, 1]
let newArr = arr.join()
console.log(newArr);

function joinArray(array, separator = ',') {
	let result = '' 
	for(let i = 0; i < array.length; i++){
		const el = array[i]
		result += el + (i === array.length - 1 ? '' : separator)
	}
	return result
}

console.log(joinArray([1, 1, 2, 3, 4], '/'))