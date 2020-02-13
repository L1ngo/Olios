import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'


let doc = document;

window.$ = $;

$(doc).ready(function () {
	topSlider();
	openNav();
});

function topSlider() {
	let swiper = new Swiper('.top-slider', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

function openNav() {
	let burger = doc.querySelector('.main__burger');
	let burger_line = doc.querySelector('.main__burger_menu');
	let nav = doc.querySelector('.main__nav');
	let list = doc.querySelector('.main__nav-list');
	let link = doc.querySelector('.main__categories-link');

	if (burger) {
		burger.addEventListener('click', function () {
			burger.classList.toggle('main__burger_open');
			burger_line.classList.toggle('main__burger_menu_active');
			nav.classList.toggle('main__nav_open');
			list.classList.toggle('main__nav-list_active');
			link.classList.toggle('main__categories-link_active');
		});
	}
}
