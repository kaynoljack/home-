'use strict'
const burgerIcon=document.querySelector('.menu__icon');
const menuBody=document.querySelector('.menu__body');
const body = document.body;
if(menuBody && burgerIcon){
    burgerIcon.addEventListener('click', () => {
        menuBody.classList.toggle('active');
        burgerIcon.classList.toggle('but');
        body.classList.toggle('lock')
    })
}
