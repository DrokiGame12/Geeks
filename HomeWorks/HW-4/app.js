//			#1
var numArray = [1, 2, 3, 4, 5]

function arithmetic(numbers){
	var num = 0
	for(var i of numbers){
		num += i
	}
	console.log(num / numbers.length);
}

//			#2
function typeOf(argument){
	console.log(typeof argument);
}

arithmetic(numArray)
typeOf(numArray)