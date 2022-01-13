let h1 = document.querySelector('h1');
let menu = document.querySelector('.menu-icon');
let nav = document.querySelector('.nav-item');
let a = document.querySelector('.xicon');
let ul = document.querySelector('ul');
let button = document.querySelector('button');
let extend = document.querySelector('.extend');

h1.addEventListener('click',()=>{
	if(h1.textContent == `Have a Good Time!`){
		h1.innerHTML = `Welcome Message`;
	}else{
		h1.innerHTML = `Have a Good Time!`;
	}
});

menu.addEventListener('click',()=>{
	if(menu.scr=`src=img/menu_icon.png`){
		nav.insertAdjacentHTML(
			'afterbegin',
			`<li style='text-align: right' ><img class='xicon' src=img/x_icon.png></li>`
		);
		nav.style.textAlign = 'left';
		nav.style.width = '200px';
		nav.style.height = '100vh';
		nav.style.display = 'flex';
		nav.style.background = 'white';
		nav.style.justifyConten = 'flex-end';	
		nav.style.position = 'fixed';
		nav.style.right = '0px';
		nav.style.flexDirection = 'column';		
	}
});

ul.addEventListener('click',()=>{
	nav.style.display = 'none';
	nav.querySelector('li:first-child').remove();
})

button.addEventListener('click',()=>{
	if(extend.style.display !== 'flex'){
		extend.style.display = 'flex';
		button.textContent = 'Hide List';
	}else{
		extend.style.display = 'none';
		button.textContent = 'Show More';
	}
})


