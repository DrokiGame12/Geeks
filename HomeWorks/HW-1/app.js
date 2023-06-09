var birthMonth = Number(prompt('Enter your month of birth'))
var birthDay = Number(prompt('Enter your day of birth'))

if((birthMonth === 'январь' && birthDay >= 21 && birthDay <= 31) || (birthMonth === 2 && birthDay <= 18 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Водолей')

}else if((birthMonth === 2 && birthDay >= 19 && birthDay <= 28) || (birthMonth === 3 && birthDay <= 20 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Рыбы')

}else if((birthMonth === 3 && birthDay >= 21 && birthDay <= 31) || (birthMonth === 4 && birthDay <= 20 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Овен')

}else if((birthMonth === 4 && birthDay >= 21 && birthDay <= 30) || (birthMonth === 5 && birthDay <= 21 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Телец')

}else if((birthMonth === 5 && birthDay >= 22 && birthDay <= 31) || (birthMonth === 6 && birthDay <= 21 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Близнецы')

}else if((birthMonth === 6 && birthDay >= 22 && birthDay <= 30) || (birthMonth === 7 && birthDay <= 22 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Рак')

}else if((birthMonth === 7 && birthDay >= 23 && birthDay <= 31) || (birthMonth === 8 && birthDay <= 23 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Лев')

}else if((birthMonth === 8 && birthDay >= 24 && birthDay <= 31) || (birthMonth === 9 && birthDay <= 22 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Дева')

}else if((birthMonth === 9 && birthDay >= 23 && birthDay <= 30) || (birthMonth === 10 && birthDay <= 23 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Весы')

}else if((birthMonth === 10 && birthDay >= 24 && birthDay <= 31) || (birthMonth === 11 && birthDay <= 22 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Скорпион')

}else if((birthMonth === 11 && birthDay >= 23 && birthDay <= 30) || (birthMonth === 12 && birthDay <= 21 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Стрелец')

}else if((birthMonth === 12 && birthDay >= 22 && birthDay <= 31) || (birthMonth === 1 && birthDay <= 20 && birthDay >= 1)){
    console.log('Ваш знак зодиака - Козерог')

}else{
    console.log('Ваш знак зодиака не известен')
}