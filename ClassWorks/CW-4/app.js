// // console.log('f')
//
// var htmlTeg = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
// console.log(typeof htmlTeg)
// var tagsCounter = {}
// for(var i = 0; i < htmlTeg.length; i++){
//     var element = htmlTeg[i]
//     if(tagsCounter.hasOwnProperty(element)){
//         tagsCounter[element] += 1
//     }else{
//         tagsCounter[element] = 1
//     }
// }
// console.log(tagsCounter)
// doCalc()

//for..of
// var array = [1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 78, 8, 6, 9]
// var newArray = []
// for(var i of array){
//     if(newArray.includes(i)) continue;
//     newArray.push(i)
// }
// console.log(array)
// console.log(newArray)
//
// var newArray = Array.from(new Set(array))
// console.log(newArray)

//function - функции
//function-declaration
// function doCalc(num1, num2) {
//     console.log(num1 + num2)
// }
// doCalc(34, 34)
//function-expression
// var printStr = function (str) {
//     console.log(str)
// }
// printStr(prompt('enter text'))
getAllSum([9, 9])
//методы массива
//filter
var users = [
    {name: 'Adam', age: 34},
    {name: 'Aidar', age: 14},
    {name: 'AnnA', age: 23},
    {name: 'Jack', age: 30},
    {name: 'Olivia', age: 18},
    {name: 'OLiver', age: 22},
    {name: 'Olya', age: 12},
]
var name2 = users.filter(user => user.name.toLowerCase().includes('a'))
console.log(name2)

var age = users.filter(i => i.age >= 18)
console.log(age)

//map
var soms = [50000000000, 78000, 98000000, 67000000]
var result = soms.map(i => i / 87)
var result2 = result.map(i => i.toFixed())
console.log(result2)

// var dollars = []
// for(var i = 0; i< soms.length; i++){
//     dollars[i] = soms[i] / 87
// }
// console.log(dollars)

function getAllSum(array) {
    var sum = 0
    for(var i = 0; i < array.length; i++){
        sum += array[i]
    }
    console.log(sum)
}
getAllSum([3, 3])

//forEach
var numbers = [33, 33, 44, 56, 78, 90]
numbers.forEach(i => {
    var result = i * 2
    console.log(`${i} - ${result}`)
})
console.log(numbers)

var newNumbers = numbers.map(i => i * 2)
console.log(numbers)
console.log(newNumbers)


var names = ['John', 'Tim', 'Jack']
for(var i of names) {
    console.log(i)
}
names.forEach(i => console.log(i))

//for..in
var object = {
    name: 'Aidana'
}
console.log(Object.values(object))
 for(var i in object){
     console.log(i)
 }