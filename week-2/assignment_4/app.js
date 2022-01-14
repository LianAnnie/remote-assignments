let h1 = document.querySelector('h1');
let menu = document.querySelector('.menu-icon');
let nav = document.querySelector('.nav-item');
let a = document.querySelector('.xicon');
let button = document.querySelector('button');
let extend = document.querySelector('.extend');
let li = document.querySelectorAll('li');
let xicon = document.querySelector('.xicon');

h1.addEventListener('click',()=>{
	if(h1.textContent == `Have a Good Time!`){
		h1.innerHTML = `Welcome Message`;
	}else{
		h1.innerHTML = `Have a Good Time!`;
	}
});

menu.addEventListener('click',()=>{
	if(nav.style.display === ''){
		nav.style.textAlign = 'left';
		nav.style.width = '200px';
		nav.style.height = '100vh';
		nav.style.display = 'flex';
		nav.style.background = 'white';
		nav.style.justifyConten = 'flex-end';	
		nav.style.position = 'fixed';
		nav.style.right = '0px';
		nav.style.flexDirection = 'column';
		for(let i=1; i<li.length; i++){
			li[i].style.position = 'relative';
			li[i].style.top = '-30px';
			li[i].style.left = '-20px';
			li[i].style.paddingBottom ='30px';
			li[i].style.width = '50px'
		}
	}
});

xicon.addEventListener('click',()=>{
	nav.removeAttribute('style');
	menu.src = `img/menu_icon.png`;	
	for(let i=1; i<li.length; i++){
		li[i].removeAttribute('style');
	}
});




button.addEventListener('click',()=>{
	if(extend.style.display !== 'flex'){
		extend.style.display = 'flex';
		button.textContent = 'Hide List';
	}else{
		extend.style.display = 'none';
		button.textContent = 'Show More';
	}
})

window.onresize = () =>{
	if(document.documentElement.clientWidth >= 800){
		nav.removeAttribute('style');
		menu.removeAttribute('style');
		menu.src = `img/menu_icon.png`;	
		for(let i=1; i<li.length; i++){
			li[i].removeAttribute('style');
		}
	}
}

