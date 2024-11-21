$(document).ready(function () {
	function updateDateTime() {
		const now = new Date();
		const formattedTime = now.toTimeString().slice(0, 5);
		const formattedDate = `${now.getFullYear()}. ${(now.getMonth() + 1).toString().padStart(2, '0')}. ${now.getDate().toString().padStart(2, '0')}. ${'일월화수목금토'[now.getDay()]}요일`;

		$('.lib_main_time').text(formattedTime);
		$('.lib_main_date').text(formattedDate);
	}

	updateDateTime();
	setInterval(updateDateTime, 60000);

	function LibNoticeSelectedItemSwiper() {
		const swiper = new Swiper('.lib_notice_selected_item_swiper', {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			breakpoints: {
				2160: {
					spaceBetween: 124,
				},
				1080: {
					spaceBetween: 62,
				},
			},
		});
	}

	LibNoticeSelectedItemSwiper();

	function LibNoticeSwiper() {
		const swiper = new Swiper('.lib_notice_swiper .swiper', {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			slidesPerView: 5,
			breakpoints: {
				2160: {
					spaceBetween: 24,
				},
				1080: {
					spaceBetween: 12,
				},
			},
			pagination: {
				el: '.lib_notice_swiper .swiper-pagination',
				type: 'bullets',
			},
		});
	}

	LibNoticeSwiper();

	function LibNewSelectedItemSwiper() {
		const swiper = new Swiper('.lib_new_selected_item_swiper', {
			loop: true,
			autoplay: {
				delay: 9900,
				disableOnInteraction: false,
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			pagination: {
				el: '.lib_new_content .swiper-pagination',
				type: 'bullets',
			},
		});
	}

	LibNewSelectedItemSwiper();

	function LibNewSwiper() {
		const swiper = new Swiper('.lib_new_swiper', {
			loop: true,
			direction: 'vertical',
			slidesPerView: 6,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			breakpoints: {
				2160: {
					spaceBetween: 146,
				},
				1080: {
					spaceBetween: 73,
				},
			},
		});
	}

	LibNewSwiper();

	function LibEventSwiper() {
		const swiper = new Swiper('.lib_event_swiper .swiper', {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			pagination: {
				el: '.lib_event_swiper .swiper-pagination',
				type: 'bullets',
			},
		});
	}

	LibEventSwiper();
});
