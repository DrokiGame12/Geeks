// console.log('Hello world!'); - строчный коммент
/*
* rete45t
* e45te45t - блочный коммент
* 54tw45t
* */

//переменные
var name = 'Aidana';
var email = 'qwerty@ert.com';
// var email = ''
var surname = 'Bekova';
// var -!§234567

//camelCase
var nameAndSurname = 'Bekova Aidana';
console.log(email)

//типы данных
//1)string - текст
var name2 = 'Aidana';
console.log(typeof name2)
//методы string
console.log(name2.length)
console.log(name2.repeat(23))
console.log(surname + ' ' + name2 + 'gstg')  //конкатенация
console.log(typeof Number(surname))

//number - число
var number = 90
console.log(number)
console.log( typeof number.toString())

console.log('средний возраст 27-03 - ' + (14 + 15 + 17 + 15 + 16 + 19 + 21) / 7 + ' лет')

var num1 = 6
var num2 = '6'
console.log(num1 % num2)


//3) boolean - true, false
console.log(num1 < num2)
//<, >, <=, >=, ==, ===, !=, !==
console.log(num1 === num2)

//условные конструкции - if, else if, else
var userLogin = 'bekovaaidana'
var userPassword = 'qwerty123'

// var login = prompt('Enter your login').toLowerCase()
// var password = prompt('Enter your password')
// if(userLogin === login && userPassword === password){
//     alert('Привет')
// }else{
//     alert('Пока')
// }

//||-или, && - и
var nameUser = prompt('Ваше имя -') //айдана
var surnameUser = prompt('Ваше фамилие - ') //бекова
var ageUser = Number(prompt('Ваш возраст - ')) //6778965

if(ageUser <= 18){ //false
    console.log('Привет' + nameUser)
}else if(ageUser >= 19 && ageUser <= 65){
    console.log('Здравствуйте' + surnameUser + ' ' + nameUser)
}else if(ageUser >= 66 && ageUser <= 85){
    console.log('Добро пожаловать, ' + surnameUser + ' ' + nameUser)
}else{
    console.log('Произошла ошибка, возраст можно вводить только до 85!')
}



// if(month === 3 && day >= 12 || month === 'апрель' && day <= 26 && day <= 31)