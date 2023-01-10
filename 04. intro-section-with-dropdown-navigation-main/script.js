"use strict";

const floating = document.querySelector(".floating-list-features");

const drop = document.querySelector(".drop-up");
const dropdowns = document.querySelector(".dropdowns");

console.log(floating);

const hideShow = () => {
  if (
    floating.classList.contains("hidden") &&
    drop.classList.contains("hidden")
  ) {
    floating.classList.remove("hidden");
    drop.classList.remove("hidden");
    dropdowns.classList.add("hidden");
  } else {
    floating.classList.add("hidden");
    drop.classList.add("hidden");
    dropdowns.classList.remove("hidden");
  }
};

for (let i = 0; i < dropdowns.length; i++)
  dropdowns[i].addEventListener("click", hideShow);

for (let i = 0; i < drop.length; i++)
  drop[i].addEventListener("click", hideShow);
