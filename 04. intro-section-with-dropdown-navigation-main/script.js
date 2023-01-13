"use strict";

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

// else {
//   dropdowns[0].classList.remove("hidden");
//   dropUp[0].classList.add("hidden");
//   floating.classList.add("hidden");
// }
// console.log(drop);

// const hideShow = () => {
//   if (
//     (floating.classList.contains("hidden") &&
//       drop.classList.contains("hidden")) ||
//     comp.classList.contains("hidden")
//   ) {
//     floating.classList.remove("hidden");
//     drop.classList.remove("hidden");
//     dropdowns.classList.add("hidden");
//     comp.classList.remove("hidden");
//   } else {
//     floating.classList.add("hidden");
//     comp.classList.add("hidden");
//     drop.classList.add("hidden");
//     dropdowns.classList.remove("hidden");
//   }
// };

// drop.addEventListener("click", hideShow);
// dropdowns.addEventListener("click", hideShow);
// drop1.addEventListener("click", hideShow);
// dropdowns1.addEventListener("click", hideShow);

// dropdowns.onclick()

// for (let i = 0; i < dropdowns.length; i++)
//   dropdowns[i].addEventListener("click", hideShow);

// for (let i = 0; i < drop.length; i++)
//   drop[i].addEventListener("click", hideShow);
