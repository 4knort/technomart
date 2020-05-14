var products = document.querySelector(".catalog-product")
var buy = document.querySelectorAll(".buy");
var modalBasket = document.querySelector(".modal-basket");
var continueShopping = modalBasket.querySelector(".button-continue-shopping");
var closeBasket = modalBasket.querySelector(".modal-close");

var overlay = document.querySelector(".modal-overlay");

for (var i = 0; i < buy.length; i ++) {
  buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.add("modal-show");
    overlay.classList.add("overlay-display");
  });
}

closeBasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
  overlay.classList.remove("overlay-display");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalBasket.classList.contains("modal-show")) {
      modalBasket.classList.remove("modal-show");
      overlay.classList.remove("overlay-display");
    }
  }
});

continueShopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
  overlay.classList.remove("overlay-display");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
  overlay.classList.remove("overlay-display");
});
