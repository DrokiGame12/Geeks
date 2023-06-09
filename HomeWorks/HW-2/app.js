var order = prompt('What would you like to order?', 'coffee / tea')
var beverages = {
	coffee: {
		cappuccino: true,
		latte: true,
		americano: true,
		frappe: false
	},
	tea: {
		green: false,
		black: true,
		herbal: false,
		flavored: true 
	}
}
if(order === 'coffee'){
	var order = prompt('what kind of coffee do you want?', 'cappuccino / latte / americano / frappe')
	if((order === 'cappuccino' && beverages.coffee.cappuccino === true) || 
		(order === 'latte' && beverages.coffee.latte === true)  || 
		(order === 'americano' && beverages.coffee.americano === true) ||
		(order === 'frappe' && beverages.coffee.frappe === true)){
			console.log('Order is accepted - 1 ' + order + ' coffee.')
	}else if(order === ''){
		console.error('Write something you want.')
	}else{
		console.error("Sorry, we don't have " + order + " coffee now.")
	}
}else if(order === 'tea'){
	var order = prompt('what kind of tea do you want?', 'green / black / herbal / flavored')
	if((order === 'green' && beverages.tea.green === true) || 
		(order === 'black' && beverages.tea.black === true)  || 
		(order === 'herbal' && beverages.tea.herbal === true) ||
		(order === 'flavored' && beverages.tea.flavored === true)){
			console.log('Order is accepted - 1 ' + order + ' tea.')
	}else if(order === ''){
		console.error('Write something you want.')
	}else{
		console.error("Sorry, we don't have " + order + " tea now.")
	}
}else if(order === ''){
	console.error('Write something you want.')
}else{
	console.error("Sorry, we don't have " + order + ".")
}