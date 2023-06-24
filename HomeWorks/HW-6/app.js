<<<<<<< HEAD
const input = document.querySelector('input')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('.decrement')

increment.onclick = () => input.value++
decrement.onclick = () => {
    if(0 < input.value) {
        input.value--
    }
}

const button = document.querySelectorAll('.button')
//console.log(button);
// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener('click', function(){
//         console.log('You pressed the button');
//     })
// }

button.forEach(i => i.onclick = () => console.log('You pressed the button'))
=======
const input = document.querySelector('input')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('.decrement')

increment.onclick = () => input.value++
decrement.onclick = () => {
    if(0 < input.value) {
        input.value--
    }
}

const button = document.querySelectorAll('.button')
//console.log(button);
// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener('click', function(){
//         console.log('You pressed the button');
//     })
// }

button.forEach(i => i.onclick = () => console.log('You pressed the button'))
>>>>>>> 3adfe703c9b8175930845b5cc4d065aea47570d6
