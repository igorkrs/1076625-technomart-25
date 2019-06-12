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
