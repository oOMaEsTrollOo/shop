"use strict";

let headerButton = document.querySelector(".header__button");
let headerMenu = document.querySelector(".header__navigation");
let brandBlack = document.querySelector(".brand__black");
let productBlack1 = document.querySelector(".products__product-black1")
let productItem1 = document.querySelector(".products__item-1")
let productBlack2 = document.querySelector(".products__product-black2")
let productItem2 = document.querySelector(".products__item-2")
let productBlack3 = document.querySelector(".products__product-black3")
let productItem3 = document.querySelector(".products__item-3")
let productBlack4 = document.querySelector(".products__product-black4")
let productItem4 = document.querySelector(".products__item-4")
let productBlack5 = document.querySelector(".products__product-black5")
let productItem5 = document.querySelector(".products__item-5")
let productBlack6 = document.querySelector(".products__product-black6")
let productItem6 = document.querySelector(".products__item-6")
let gostButton1 = document.querySelector(".products__ghost-button-1")
let gostButton2 = document.querySelector(".products__ghost-button-2")
let gostButton3 = document.querySelector(".products__ghost-button-3")
let gostButton4 = document.querySelector(".products__ghost-button-4")
let gostButton5 = document.querySelector(".products__ghost-button-5")
let gostButton6 = document.querySelector(".products__ghost-button-6")

headerButton.addEventListener('click', () => {
    if (headerMenu.style.display == "block")
        headerMenu.style.display = "none", brandBlack.style.display = "none"
    else headerMenu.style.display = "block", brandBlack.style.display = "block"
});

productItem1.addEventListener('mouseover', () => {
    productBlack1.style.display = "block"
    gostButton1.style.display = "block"
});

productItem1.addEventListener('mouseout', () => {
    productBlack1.style.display = "none"
    gostButton1.style.display = "none"
});

productItem2.addEventListener('mouseover', () => {
    productBlack2.style.display = "block"
    gostButton2.style.display = "block"
});

productItem2.addEventListener('mouseout', () => {
    productBlack2.style.display = "none"
    gostButton2.style.display = "none"
});

productItem3.addEventListener('mouseover', () => {
    productBlack3.style.display = "block"
    gostButton3.style.display = "block"
});

productItem3.addEventListener('mouseout', () => {
    productBlack3.style.display = "none"
    gostButton3.style.display = "none"
});

productItem4.addEventListener('mouseover', () => {
    productBlack4.style.display = "block"
    gostButton4.style.display = "block"
});

productItem4.addEventListener('mouseout', () => {
    productBlack4.style.display = "none"
    gostButton4.style.display = "none"
});

productItem5.addEventListener('mouseover', () => {
    productBlack5.style.display = "block"
    gostButton5.style.display = "block"
});

productItem5.addEventListener('mouseout', () => {
    productBlack5.style.display = "none"
    gostButton5.style.display = "none"
});

productItem6.addEventListener('mouseover', () => {
    productBlack6.style.display = "block"
    gostButton6.style.display = "block"
});

productItem6.addEventListener('mouseout', () => {
    productBlack6.style.display = "none"
    gostButton6.style.display = "none"
});