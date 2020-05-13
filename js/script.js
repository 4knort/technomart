var writeUs = document.querySelector(".write-us");
var modalWriteUs = document.querySelector(".modal-write-us");
var form = modalWriteUs.querySelector(".modal-form");
var login = form.querySelector(".name .input-modal");
var email = form.querySelector(".email .input-modal");
var textarea = form.querySelector(".message textarea");
var closeWriteUs = modalWriteUs.querySelector(".modal-close");

var map = document.querySelector(".mini-map");
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".modal-close");

var products = document.querySelector(".catalog-product")
var buy = document.querySelector(".buy");
var continueShopping = document.querySelector(".button-continue-shopping");
var modalBasket = document.querySelector(".modal-basket");
var closeBasket = modalBasket.querySelector(".modal-close");

var overlay = document.querySelector(".modal-overlay");

var sliders = document.querySelector(".offer-slider");
var sliderItem = sliders.querySelectorAll(".slider-item");
var slider1 = sliders.querySelector("#slider-1");
var slider2 = sliders.querySelector("#slider-2");
var toggle1 = sliders.querySelector("#toggle-1");
var toggle2 = sliders.querySelector("#toggle-2");
var sliderPrevious = sliders.querySelector(".previous");
var sliderNext = sliders.querySelector(".next");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
  overlay.classList.add("overlay-display");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});


form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !textarea.value) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalWriteUs.classList.remove("modal-error");
  overlay.classList.remove("overlay-display");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWriteUs.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWriteUs.classList.remove("modal-show");
      modalWriteUs.classList.remove("modal-error");
      overlay.classList.remove("overlay-display");
    }
  }
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
  overlay.classList.add("overlay-display");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
  overlay.classList.remove("overlay-display");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
      overlay.classList.remove("overlay-display");
    }
  }
});

buy.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.add("modal-show");
  overlay.classList.add("overlay-display");
});

closeBasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
  overlay.classList.remove("overlay-display");
});

continueShopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
  overlay.classList.remove("overlay-display");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalMap.classList.remove("modal-show");
  modalBasket.classList.remove("modal-show");
  overlay.classList.remove("overlay-display");
});

sliderPrevious.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider1.classList.add("current");
  slider2.classList.remove("current");
  toggle1.classList.add("active");
  toggle2.classList.remove("active");
});

sliderNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider2.classList.add("current");
  slider1.classList.remove("current");
  toggle2.classList.add("active");
  toggle1.classList.remove("active");
});
