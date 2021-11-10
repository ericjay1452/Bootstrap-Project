"use strict"

const Bug = document.querySelector("#Bug");
const burgerLine = document.querySelector(".burgerLine");
const mobileUl = document.querySelector(".mobileUl");
const navMenu = document.querySelector("#navmenu");
const xClose = document.querySelector(".x-close");

Bug.addEventListener("click", hamburgerEffect);

function hamburgerEffect() {
    burgerLine.classList.toggle("slideIn");
}

