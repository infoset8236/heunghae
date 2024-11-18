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
});
