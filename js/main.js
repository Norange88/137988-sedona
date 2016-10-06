// Функционал мобильной панели навигации-----------
(function() {

	var navigation = document.querySelector(".main-navigation");
	var close_btn = document.querySelector(".main-navigation__close-btn");
	var open_btn = document.querySelector(".site-header__navigation-open-btn");

	function nav_close() {
		navigation.classList.remove("main-navigation--opened");
		navigation.classList.add("main-navigation--closed");
		open_btn.style.display = "";
	}
	function nav_open() {
		navigation.classList.remove("main-navigation--closed");
		navigation.classList.add("main-navigation--opened");
		open_btn.style.display = "none";
	}

	close_btn.addEventListener("click", nav_close);
	open_btn.addEventListener("click", nav_open);
})();


// Google карта------------------------------------
function initMap() {
  var cedona = {lat: 34.868881, lng: -111.762009};
  var map = new google.maps.Map(document.querySelector(".map__wrap"), {
    zoom: 10,
    center: cedona
  });
  var marker = new google.maps.Marker({
    position: cedona,
    map: map
  });
}
    

