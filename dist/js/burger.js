"use strict";
'use string';

var burgerIcon = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');
var body = document.body;
if (menuBody && burgerIcon) {
  burgerIcon.addEventListener('click', function () {
    menuBody.classList.toggle('active');
    burgerIcon.classList.toggle('but');
    body.classList.toggle('lock');
  });
}