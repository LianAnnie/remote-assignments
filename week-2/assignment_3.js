function avg(data){
	let totalPrice =0;
	let qty = data.size;
	for (let i = 0; i<qty; i++){
		totalPrice += data.products[i].price;
	}
	console.log(totalPrice/qty);
};

avg({
	size:3,
	products:[
		{
			name:"Product 1",
			price:100
		},
		{
			name:"Product 2",
			price:700
		},
		{
			name:"Product 3",
			price:250
		}
	]
});