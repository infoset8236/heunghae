//main
document.addEventListener('DOMContentLoaded', () => {
	const bars = document.querySelectorAll('.bar');

	function animateBars() {
		bars.forEach(bar => {
			const scaleY = Math.random() * 1.5 + 0.5;
			bar.style.transform = `scaleY(${scaleY})`;
		});
	}

	setInterval(animateBars, 100);
});

$(document).ready(function () {
	const navLinks = $('.navbox li a');

	const activeLink = localStorage.getItem('activeLink');
	if (activeLink) {
		$(`a[href="${activeLink}"]`).addClass('on');
	}

	navLinks.click(function (event) {
		event.preventDefault();

		navLinks.removeClass('on');

		$(this).addClass('on');

		localStorage.setItem('activeLink', $(this).attr('href'));
	});
});

//AI 도서추천
$(function () {
	$('.reco_tab a').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.reco_tab a').removeClass('active');
		$('.tab_content').removeClass('active');

		$(this).addClass('active');
		$('#' + tab_id).addClass('active');
	});
});

$(function () {
	// 게시판
	$('.recom_tab a').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.recom_tab a').removeClass('active');
		$('.tab_contentt').removeClass('active');

		$(this).addClass('active');
		$('#' + tab_id).addClass('active');
	});
});

$(function () {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});

//도서검색 목록
$(function () {
	$('.info_fold').hide();

	$('.list_btn').on('click', function () {
		$('.info_fold')
			.not($('.' + $(this).attr('id')))
			.hide();
		$('.' + $(this).attr('id')).slideToggle(1000);
	});
});

//나의 서재
$(document).ready(function () {
	$('.mylib_wrap .my_tab a').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.mylib_wrap .my_tab a').removeClass('active');
		$('.mylib_wrap .tab_content').removeClass('active');

		$(this).addClass('active');
		$('#' + tab_id).addClass('active');
	});
});
