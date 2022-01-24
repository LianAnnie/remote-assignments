function ajax(src){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			const products = JSON.parse(xhr.responseText);
			for (let i = 0; i< products.length; i ++){
				const ul = document.getElementById('list');
				const newLi = document.createElement('li');
				let newText = document.createTextNode(`${products[i].name}  -$${products[i].price}.  ${products[i].description}`);
				newLi.appendChild(newText);
				ul.insertBefore(newLi,ul.childNodes[i]);
			}
		}
	};
	xhr.open('GET',src);
	xhr.send();
}

ajax('products.json'); 
// you should get product information in JSON format and render data in the page