'use strict';

var
  buy_buttons = document.querySelectorAll('.main-item-buy'),
  close_button = document.querySelector('.close'),
  cart_popup = document.querySelector('.added-to-cart'),
  map_button = document.querySelector('.about-map'),
  map_close = document.querySelector('.map-close'),
  map_popup = document.querySelector('.map-block'),
  form_button = document.querySelector('.about-link-popup'),
  form_close = document.querySelector('.form-close'),
  form_popup = document.querySelector('.popup');


if (close_button) {
  buy_buttons.forEach(function(el) {
    el.addEventListener('click', function(evt) {
      evt.preventDefault();
      cart_popup.classList.remove('added-to-cart-hidden');
    });
  });

  close_button.addEventListener('click', function(evt) {
    evt.preventDefault();
    cart_popup.classList.add('added-to-cart-hidden');
  });
}

if (map_close) {
  map_button.addEventListener('click', function(evt) {
    evt.preventDefault();
    map_popup.classList.remove('map-block-hidden');
  });

  map_close.addEventListener('click', function(evt) {
    evt.preventDefault();
    map_popup.classList.add('map-block-hidden');
  });
}


if (form_close) {
  form_button.addEventListener('click', function(evt) {
    evt.preventDefault();
    form_popup.classList.remove('popup-hidden');
  });

  form_close.addEventListener('click', function(evt) {
    evt.preventDefault();
    form_popup.classList.add('popup-hidden');
  });
}
