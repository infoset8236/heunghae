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
						en: 'parking lot',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
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
						en: 'music hall',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '02',
					title: {
						kr: '어린이자료실',
						en: "Children's Archives",
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '03',
					title: {
						kr: '유아자료실',
						en: "infant's Archives",
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '04',
					title: {
						kr: '이야기방',
						en: 'story room',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '05',
					title: {
						kr: '수유실',
						en: 'feeding room',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '06',
					title: {
						kr: '무인반납실',
						en: 'reception room',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
			],
		},
		{
			floor: '2F',
			image: '/resources/ict/img/map2F.svg',
			duration: 100000,
			slides: [
				{
					index: '01',
					title: { kr: '프로그램실1', en: 'program room 1' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '02',
					title: { kr: '프로그램실2', en: 'program room 2' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '03',
					title: { kr: '프로그램실3', en: 'program room 3' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '04',
					title: { kr: '작곡실', en: 'composition room' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '05',
					title: { kr: '연주실', en: 'performance room' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '06',
					title: { kr: '오디오룸', en: 'Audio Room' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '07',
					title: { kr: '스마트라운', en: 'Smart lounge' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '08',
					title: { kr: '음악자료실', en: 'music archives' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '09',
					title: { kr: '연속간행물실', en: 'continuous publication room' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '10',
					title: { kr: '예술자료실', en: 'art archives' },
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
			],
		},
		{
			floor: '3F',
			image: '/resources/ict/img/map3F.svg',
			duration: 60000,
			slides: [
				{
					index: '01',
					title: {
						kr: '휴게실',
						en: 'retiring room',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '02',
					title: {
						kr: '자원봉사자실',
						en: "volunteer's room",
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '03',
					title: {
						kr: '작가실',
						en: "writer's room",
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '04',
					title: {
						kr: '문학자료실',
						en: 'literary archives',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '05',
					title: {
						kr: '일반자료실',
						en: 'general data room',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '06',
					title: {
						kr: '하모니스텝',
						en: 'Harmony Step',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
			],
		},
		{
			floor: '4F',
			image: '/resources/ict/img/map4F.svg',
			duration: 20000,
			slides: [
				{
					index: '01',
					title: {
						kr: '도서관사무실',
						en: 'Office',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
				},
				{
					index: '02',
					title: {
						kr: '지역창업센터',
						en: 'Regional Start-up Center',
					},
					image: '/resources/ict/img/dummy.svg',
					list: [
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
						'관람가능시간 : 주말은 자원봉사자로 운영되므로 관람가능 시간이 변경될 수 있습니다.(이용문의: 053-810-9918)',
					],
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

		const $swiperWrapper = $('.swiper-wrapper');
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
