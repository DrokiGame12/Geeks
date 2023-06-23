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