$(document).ready(function () {
	const groupSize = 9;

	$('.l_books_swiper').each(function () {
		const $tab = $(this);
		const $lists = $tab.find('.slide-item');
		const $swiperWrapper = $tab.find('.swiper-wrapper');

		$lists.hide();

		for (let i = 0; i < $lists.length; i += groupSize) {
			const $swiperSlide = $('<div class="swiper-slide"></div>');

			$lists.slice(i, i + groupSize).each(function () {
				$swiperSlide.append($(this).show());
			});

			$swiperWrapper.append($swiperSlide);
		}

		new Swiper($tab.find('.swiper')[0], {
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: $tab.find('.swiper-pagination')[0],
				clickable: true,
			},
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
		});
	});
});

$(document).ready(function () {
	function updateDateTime() {
		const now = new Date();
		const formattedTime = now.toTimeString().slice(0, 5);
		const formattedDate = `${now.getFullYear()}. ${(now.getMonth() + 1).toString().padStart(2, '0')}. ${now.getDate().toString().padStart(2, '0')}. ${'일월화수목금토'[now.getDay()]}요일`;

		$('.lib_main_time').text(formattedTime);
		$('.lib_main_date').text(formattedDate);
		$('.lib_living_date').text(formattedDate);
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
					spaceBetween: 70,
				},
				1080: {
					spaceBetween: 35,
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

	function LibLibrarianSwiper() {
		const swiper = new Swiper('.lib_librarian_swiper .swiper', {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			slidesPerView: 3,
			slidesPerColumn: 3,
			grid: {
				rows: 3,
			},
			slidesPerGroup: 3,
			pagination: {
				el: '.lib_librarian_swiper .swiper-pagination',
				type: 'bullets',
			},
			breakpoints: {
				2160: {
					spaceBetween: 120,
				},
				1080: {
					spaceBetween: 60,
				},
			},
		});
	}

	LibLibrarianSwiper();

	function LibBestSwiper() {
		const swiper = new Swiper('.lib_best_container .swiper', {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.lib_best_container .swiper-pagination',
				type: 'bullets',
			},
		});
	}

	LibBestSwiper();

	function LibNewsSwiper() {
		const swiper = new Swiper('.lib_living_news_list_swiper', {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			slidesPerView: 3,
			direction: 'vertical',
		});
	}

	LibNewsSwiper();
});

$(document).ready(function () {
	const floorData = [
		{
			floor: 'B1',
			image: '/resources/ict/img/mapB1.svg',
			duration: 10000,
			slides: [
				{
					index: '01',
					title: {
						kr: '주차장',
						en: 'PARKING GARAGE',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['주차장 주차면수 : 일반 70대, 경차 5대, 장애인 3대 / 총78대'],
				},
			],
		},
		{
			floor: '1F',
			image: '/resources/ict/img/map1F.svg',
			duration: 60000,
			slides: [
				{
					index: '01',
					title: {
						kr: '음악강당',
						en: 'MUSIC HALL',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00', '행사 운영시에만 개방'],
				},
				{
					index: '02',
					title: {
						kr: '어린이자료실',
						en: 'CHILDREN LIBRARY',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00', '소장자료 : 어린이도서 000 총류~900 역사  '],
				},
				{
					index: '03',
					title: {
						kr: '유아자료실',
						en: 'INFANT LIBRARY',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00', '소장자료 : 유아도서 000 총류~900 역사\n'],
				},
				{
					index: '04',
					title: {
						kr: '이야기방',
						en: 'STORY ROOM',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00', '유아 프로그램 운영\n'],
				},
				{
					index: '05',
					title: {
						kr: '수유실',
						en: 'NURSING ROOM',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00'],
				},
				{
					index: '06',
					title: {
						kr: '무인반납실',
						en: 'SELF RETURN ROOM',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 휴관일 & 개관일 18:00~익일 09:00 까지'],
				},
			],
		},
		{
			floor: '2F',
			image: '/resources/ict/img/map2F.svg',
			duration: 90000,
			slides: [
				{
					index: '01',
					title: { kr: '멀티 음악자료실', en: 'MULTIMEDIA MUSIC LIBRARY' },
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~22:00', '소장자료 : 음악관련 CD, DVD, LP, 악보 등'],
				},
				{
					index: '02',
					title: { kr: '음악자료실', en: 'MUSIC LIBRARY' },
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~22:00', '소장자료 : 음악관련 도서'],
				},
				{
					index: '03',
					title: { kr: '정기간행물실', en: 'PERIODICALS LIBRARY' },
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~22:00 ', '소장자료 : 잡지, 신문 등'],
				},
				{
					index: '04',
					title: { kr: '프로그램실 1', en: 'PROGRAM ROOM 1' },
					image: '/resources/ict/img/dummy.svg',
					list: [' 이용시간 : 09:00~18:00 ', '프로그램 운영시에만 개방'],
				},
				{
					index: '05',
					title: { kr: '프로그램실 2', en: 'PROGRAM ROOM 2' },
					image: '/resources/ict/img/dummy.svg',
					list: [' 이용시간 : 09:00~18:00 ', '프로그램 운영시에만 개방'],
				},
				{
					index: '06',
					title: { kr: '프로그램실 3', en: 'PROGRAM ROOM 3' },
					image: '/resources/ict/img/dummy.svg',
					list: [' 이용시간 : 09:00~18:00 ', '프로그램 운영시에만 개방'],
				},
				{
					index: '07',
					title: { kr: '음악감상실', en: 'LISTENING ROOM' },
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00', '이용방법 : 홈페이지 사전예약'],
				},
				{
					index: '08',
					title: { kr: '연주실', en: 'PRACTICE ROOM' },
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00', '이용방법 : 홈페이지 사전예약'],
				},
				{
					index: '09',
					title: { kr: '작곡실', en: 'COMPOSITION ROOM' },
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00', '이용방법 : 홈페이지 사전예약'],
				},
			],
		},
		{
			floor: '3F',
			image: '/resources/ict/img/map03.svg',
			duration: 60000,
			slides: [
				{
					index: '01',
					title: {
						kr: '일반자료실',
						en: 'GENERAL LIBRARY',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~22:00', '소장자료 : 000 총류~900 역사(800 제외)'],
				},
				{
					index: '02',
					title: {
						kr: '문학자료실',
						en: 'LITERATURE LIBRARY',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~22:00', '소장자료 : 800 문학'],
				},
				{
					index: '03',
					title: {
						kr: '휴게실',
						en: 'RESTROOM',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~22:00'],
				},
				{
					index: '04',
					title: {
						kr: '작가실 ',
						en: 'AUTHOR ROOM',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00'],
				},
				{
					index: '05',
					title: {
						kr: '자원봉사자실',
						en: 'VOLUNTEER ROOM',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~18:00'],
				},
				{
					index: '06',
					title: {
						kr: '하모니스텝',
						en: 'HARMONY STEP',
					},
					image: '/resources/ict/img/dummy.svg',
					list: ['이용시간 : 09:00~22:00'],
				},
			],
		},
	];

	let currentIndex = 0;

	function updateFloor() {
		const currentFloor = floorData[currentIndex];
		const nextIndex = (currentIndex + 1) % floorData.length;

		$('.lib_facility_map img').attr('src', currentFloor.image);
		$('.lib_facility_map div').text(currentFloor.floor);

		$('.lib_facility_switch').removeClass('active');
		$('.lib_facility_switch').eq(currentIndex).addClass('active');

		const $swiperWrapper = $('.lib_facility_swiper .swiper-wrapper');
		$swiperWrapper.empty();

		currentFloor.slides.forEach(slide => {
			const slideHtml = `
        <div class="swiper-slide">
          <div class="lib_facility_header">
            <div class="lib_facility_header_index">${slide.index}</div>
            <div class="lib_facility_title">
              <div class="lib_facility_title_kr">${slide.title.kr}</div>
              <div class="lib_facility_title_en">${slide.title.en}</div>
            </div>
          </div>
          <img alt="" class="lib_facility_img" src="${slide.image}" />
          <div class="lib_facility_list">
            ${slide.list
							?.map(
								item => `
              <div class="lib_facility_list_item">
                <img alt="" src="/resources/ict/img/check.svg" />
                <div>${item}</div>
              </div>
            `
							)
							.join('')}
          </div>
        </div>
      `;
			$swiperWrapper.append(slideHtml);
		});

		new Swiper('.lib_facility_swiper .swiper', {
			autoplay: {
				delay: 9790,
				disableOnInteraction: false,
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			pagination: {
				el: '.lib_facility_swiper .swiper-pagination',
				type: 'bullets',
			},
		});

		setTimeout(() => {
			currentIndex = nextIndex;
			updateFloor();
		}, currentFloor.duration);
	}

	updateFloor();
});
