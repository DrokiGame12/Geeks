function filter(word, ...books) {
    let trueArray = []
	let falseArray = []
    for(let book of books){
		//let len = 1
		// for(let n of i.toLowerCase()){
		// 	switch(n){	
		// 		case word.toLowerCase():
		// 			trueArray.push(i)
		// 			break
		// 		default:
		// 			if(len === i.length){
		// 				falseArray.push(i)
		// 			}else{
		// 				len++
		// 				break
		// 			}
		// 	}
		// }

		for(let n = 0; n < book.length+1; n++){
			if(n === book.length){
				falseArray.push(book)
				break
			}else if(book[n].toLowerCase() === word.toLowerCase()){
				trueArray.push(book)
				break
			}
		}
	}
    console.log('True:', trueArray);
	console.log('False: ', falseArray);
}

filter('у', 'Властелин', 'Звук', 'Мастер и Маргарита', 'Триумфальная арка', 'Двенадцать стульев', 'Отверженные', 'Дворянское гнездо')