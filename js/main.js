// Функционал мобильной панели навигации-----------
(function() {

	var navigation = document.querySelector(".main-navigation");
	var close_btn = document.querySelector(".main-navigation__close-btn");
	var open_btn = document.querySelector(".site-header__navigation-open-btn");

	function nav_close() {
		navigation.classList.remove("main-navigation--opened");
		navigation.classList.add("main-navigation--closed");
		open_btn.style.display = "";
		open_btn.style.display = "";
	}
	function nav_open() {
		navigation.classList.remove("main-navigation--closed");
		navigation.classList.add("main-navigation--opened");
		open_btn.style.display = "none";
		close_btn.style.display = "";
	}

	close_btn.addEventListener("click", nav_close);
	open_btn.addEventListener("click", nav_open);

	// Закрытие меню при загрузке страницы
	nav_close();
	// После загрузки и моментального закрытия вешается transition для красоты
	navigation.style.transition = "max-height 0.6s linear";
})();


// Google карта------------------------------------
function initMap() {
	var sedona = {lat: 34.868881, lng: -111.762009};
	var map = new google.maps.Map(document.querySelector(".map__wrap"), {
		zoom: 10,
		center: sedona
	});
	var marker = new google.maps.Marker({
		position: sedona,
		map: map
	});
}
