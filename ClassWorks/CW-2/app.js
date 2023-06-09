//var example = +prompt()           переход в число

/*
var inn = '10810100107800'
var firstNum = Number(inn[0]) 
if((firstNum === 1 || firstNum === 2 || firstNum === 0) && inn.length === 14){
	console.log('ИНН найден')
}else{
	console.error('ИНН не найден')
}

*/
//				switch && case
var day = '';
switch(new Date().getDay()){
	case 1:
		day = 'понидельник'
		break
	case 2:
		day = 'вторник'
		break
	case 3:
		day = 'среда'
		break
	case 4:
		day = 'четверг'
		break
	case 5:
		day = 'пятница'
		break
	case 6:
		day = 'суббота'
		break
	case 7:
		day = 'воскресение'
		break
	default:
		console.log('error')
}
console.log(day)

// 	switch 
//	case

var euSize = 'M'
switch(euSize){
	case 'S':
		console.log('Size: 42')
		break

	case 'M':
		console.log('Size: 44')
		break

	case 'L':
	case 'l':		// сквоздные ветки
		console.log('Size: 46')
		break
	default:
		console.log('unknow size')
}

//	null
var address = null
console.log(typeof address)	// выводит object - это БАГ

//	underfined
let name
console.log(typeof name)	// выводит undefined

//	object
var objectUser = {
	name: 'Aidana',
	surname: 'Bakova',
	number: 123456,
	address: null,
	isMarried: false,
	object: {
		undef: undefined
	}
}

console.log(objectUser)
console.log(objectUser.number)
console.log(objectUser.object.undef)

objectUser.course = 'GEEKS'
console.log('Новый ключ: ' + objectUser.course)

objectUser['number'] = 89
console.log('Новый ключ: ' + objectUser.number)

delete objectUser.number
console.log('Удаление ключа: ' + objectUser.number)

console.log('Все ключи: ' + Object.keys(objectUser))
console.log('Все значения ключей: ' + Object.values(objectUser))
console.log(Object.entries(objectUser))	// 
//console.log('Ключ в объекте найден: 'objectUser.hasOwnProperty(v:'name'))  // True  или  False

//	bigint
var int = 78n
console.log(typeof int)

//	symbol


//	NaN (Not A Number)
var num = 100
var text = 'text'
console.log(num / text)

result = num / text
console.log(result)	// NaN - подраздел nubmer