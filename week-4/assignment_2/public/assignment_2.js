function ajax(src,callback){
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);
			callback(data);
		}
	};
	xhr.open('GET',src);
	xhr.send();
}

function render(data){
	for (let i = 0; i< data.length; i ++){
		const ul = document.getElementById('list');
		const newLi = document.createElement('li');
		let newText = document.createTextNode(`${data[i].name}  -$${data[i].price}.  ${data[i].description}`);
		newLi.appendChild(newText);
		ul.insertBefore(newLi,ul.childNodes[i]);
	}
}
ajax(
	"https://appworks-school.github.io/Remote-Aassigiment-Data/products",
	function(response){
		render(response);
	}
); 
// you should get product information in JSON format and render data in the page