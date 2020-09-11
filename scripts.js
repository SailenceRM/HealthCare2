

let burger = document.querySelector('.header__burger')
let navigator1 = document.querySelector('.header__nav')

burger.addEventListener('click',() => {
	burger.classList.toggle('active');
	navigator1.classList.toggle('active');
});

console.log(burger)