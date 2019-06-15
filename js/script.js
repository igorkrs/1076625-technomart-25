'use strict';

var
  buy_buttons = document.querySelectorAll(".main-item-buy"),
  close_button = document.querySelector(".close"),
  cart_popup = document.querySelector(".added-to-cart");


buy_buttons.forEach(function(el) {
  el.addEventListener("click", function(evt) {
    evt.preventDefault();
    cart_popup.classList.remove("added-to-cart-hidden");
  });
});

close_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  cart_popup.classList.add("added-to-cart-hidden");
});


// var
//   map_button = document.querySelector(".about-map"),
//   close_button = document.querySelector(".map-close"),
//   map_popup = document.querySelector(".map-block");

// map_button.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   map_popup.classList.remove("map-block-hidden");
// });

// close_button.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   map_popup.classList.add("map-block-hidden");
// });
