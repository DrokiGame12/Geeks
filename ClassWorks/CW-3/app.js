/*		Home Work
var starbucks = {
	drinks: {
		coffee: {
			latte: 'true',
			americano: 'false'
		},
		tea: {
			black: 'false',
			green: 'true'
		}
	}
}
var order = prompt('order').toLowerCase()
if(order in starbucks.drinks.coffee || order in starbucks.drinks.tea){
	console.log('Ok');
}else{
	console.error('No');
}
*/

//	терминальные операторы
var age = prompt('Enter your age')
console.log(age >= 18 && age <= 50? 'Yes':'No')		// && - амперсанты

if(age >= 18 && age <= 50){
	console.log('Yes');
}else{
	console.log('No');
}



console.log('')
// truthy || falsy  -  выражения
// falsy  ->  0, -0, 0n, "", null, undef, NaN, false
//	!true - false			!!true - true
var elementTrue = !!'0'
var elementFalse = !0
console.log(elementTrue ? 'true':'false');
console.log(elementFalse ? 'true':'false');



console.log('')
//	переопределение переменных
var number = 90
number = 'text'
console.log(number);



console.log('')
//	array - массив
//	Json

var array = ['text', 123, null, undefined, NaN, true, false, {}, []]
console.log(array);
console.log(array.length - 1);
console.log(array[0][2]);

array[10] = 'Hello world!'
console.log(array[10]);



console.log('')
//	методы массива

var numbers = [1, 2, 3, 4, 5]
console.log(numbers);
///	1) push - добовление в конец
numbers.push(6, 7)
console.log(numbers);

/// 2) concat - соединение 
var newArr = numbers.concat(8, 9)
console.log(newArr);

/// 3) unshift - добавление в начало
numbers.unshift(-1, 0)
console.log(numbers);

/// pop - удоление с конца (толлько один)
var lastNum = numbers.pop()
console.log(numbers)
console.log(lastNum);

/// join - 
var joinNum = numbers.join(' | ')
console.log(numbers)
console.log(joinNum)
console.log(typeof joinNum)



console.log('')
// 			циклы
/// while

var count = 0
// count = count + 1
// count += 1
// count ++
while (count < 20) {
	console.log(count)
	count ++ 			
}

/// for
for(var i = 0; i <= 20; i++){
	console.log(i)
}

var names = ['1', '2', '3', '4', '5', '6']
var blacklist = ['6', '2', '4']
for(var i = 0; i < names.length; i++){
	if(blacklist.includes(names[i].toLowerCase())){
		console.warn(`${names[i]} в черном списке`)
		continue
	}
	console.log(`Добро пожаловать, ${names[i]}`)
}