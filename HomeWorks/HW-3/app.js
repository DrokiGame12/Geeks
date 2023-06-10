//					#1
var tegArray = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var tegQuantity = {}
for(var i = 0; i < tegArray.length; i++){
	if(tegArray[i] in tegQuantity){
		tegQuantity[tegArray[i]]++
		continue
	}
	tegQuantity[tegArray[i]] = 1
}
console.log(tegArray)
console.log(tegQuantity)


//					#2
console.log('')
var numArray = [10, 20, 30, 50, 235, 3000, 5000439857]
var numbers = []
for(var i = 0; i < numArray.length; i++){
	if(String(numArray[i])[0] === '1' || String(numArray[i])[0] === '3' || String(numArray[i])[0] === '5'){
		numbers.push(numArray[i])
	}
}
console.log(numArray)
console.log(numbers)


//					#3
console.log('')
for(var i = 20; i >= 0; i--){
	console.log(i)
}