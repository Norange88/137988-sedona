// Функционал мобильной панели навигации
(function() {

	var navigation = document.querySelector(".main-navigation");
	var close_btn = document.querySelector(".main-navigation__close-btn");
	var open_btn = document.querySelector(".site-header__navigation-open-btn");

	function nav_close() {
		navigation.classList.remove("main-navigation--opened");
		navigation.classList.add("main-navigation--closed");
	}
	function nav_open() {
		navigation.classList.remove("main-navigation--closed");
		navigation.classList.add("main-navigation--opened");
	}

	close_btn.addEventListener("click", nav_close);
	open_btn.addEventListener("click", nav_open);
})();
