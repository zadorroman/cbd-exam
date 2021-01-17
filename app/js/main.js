'use strict';

(function ($) {
	$(document).ready(function () {
		// Code
		$(window).scroll(() => {
			if ($(window).scrollTop() > 1) {
				$('.header__navigation').addClass('header__back');
			}
			else {
				$('.header__navigation').removeClass('header__back');
			}
		});


		//carousel
		$('.carousel').carousel({
			interval: 3500
		})



		//slick slider
		$('.slider-p__wrap').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: `<div class="slider-prev"><i class="icon-arrow"></i></div>`, //custom arrow
			nextArrow: `<div class="slider-next"><i class="icon-arrow"></i></div>`, // custom arrow
			appendArrows: $('.slider-p__arrows'), //стрелки в другом месте разместить
			slidesToShow: 1, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			autoplay: true, //auto play on
			autoplaySpeed: 4000, // скорость прокрутки в автоплей
			swipe: true, // отключает включает свап
			//centerMode: true,
			focusOnSelect: false,
			infinite: true,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						variableWidth: true,
					}
				}]
		});
	});
})(jQuery);
