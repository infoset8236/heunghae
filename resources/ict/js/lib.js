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
		const swiper = new Swiper(".lib_notice_selected_item_swiper", {
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
					spaceBetween: 124
				},
				1080: {
					spaceBetween: 62
				}
			}
		});
	}

	LibNoticeSelectedItemSwiper();

	function LibNoticeSwiper() {
		const swiper = new Swiper(".lib_notice_swiper .swiper", {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			slidesPerView: 5,
			breakpoints: {
				2160: {
					spaceBetween: 24
				},
				1080: {
					spaceBetween: 62
				}
			},
			pagination: {
				el: '.lib_notice_swiper .swiper-pagination',
				type: 'bullets',
			},
		});
	}

	LibNoticeSwiper()

});
