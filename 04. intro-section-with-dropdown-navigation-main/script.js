"use strict";

/*
! fialed attampts
// const drop = document.querySelectorAll(".drop-up")[0];
// const drop1 = document.querySelectorAll(".drop-up")[1];
// const dropdowns0 = document.querySelectorAll(".dropdowns")[0];
// const dropdowns1 = document.querySelectorAll(".dropdowns")[1];
const floating = document.querySelector(".floating-list-features");
const comp = document.querySelector(".floating-list-company");

const dropUp = document.querySelectorAll(".drop-up");

const dropdowns = document.querySelectorAll(".dropdowns");

function hideShow() {
  if (dropdowns[0].classList.contains("hidden")) {
    dropdowns[0].classList.remove("hidden");
    dropUp[0].classList.add("hidden");
    floating.classList.add("hidden");
  } else if (!dropdowns[0].classList.contains("hidden")) {
    dropdowns[0].classList.add("hidden");
    dropUp[0].classList.remove("hidden");
    floating.classList.remove("hidden");
  }
}

function toggleClass() {
  dropdowns[0].classList.toggle("hidden");
  dropUp[0].classList.toggle("hidden");
  floating.classList.toggle("hidden");
}

dropdowns[0].addEventListener("click", toggleClass);
dropUp[0].addEventListener("click", toggleClass);
dropdowns[1].addEventListener("click", toggleClass);
dropUp[1].addEventListener("click", toggleClass);
*/

// console.log(navbutton[1]);
// const dropUp = document.querySelectorAll(".drop-up");
// const dropDowns = document.querySelectorAll(".dropdowns");

// console.log(dropUp[1], dropDowns);
// function toggleClas(itemHide) {
//   for (let i = 0; i < itemHide.length; i++) {
//     // add listner to each event
//     itemHide[i].addEventListener("click", function () {
//       //lets find menu to open based on 3rd class on the navbar
//       itemHide.classlist.add("hidden");

//       if (itemHide[i] === 0) {
//         const floating = document.querySelector(".floating-list-feature");
//         floating.classList.toggle("hidden");
//       } else {
//         const floating = document.querySelector(".floating-list-company");
//         floating.classList.toggle("hidden");
//       }
//     });
//   }
// }
const navbutton = document.getElementsByClassName("nav-links");

for (const x of navbutton) {
  x.addEventListener("click", function () {
    const menuToOpen = document.querySelector(`#${x.classList[1]}`);

    menuToOpen.classList.toggle("hidden");
  });
}
