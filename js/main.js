/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
navbar  menu
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let check = document.querySelector(".check");
let nav = document.querySelector(".main-nav");
let menue_icon = document.querySelector(".menue_icon");
let header = document.querySelector(".header");
check.addEventListener("click", (ele) => {
  if (check.checked) {
    nav.style.cssText = "right:0";
    menue_icon.classList.add("active", "open");
  } else {
    nav.style.cssText = "right:-100%";
    menue_icon.classList.remove("active", "open");
  }
});
window.onscroll = () => {
  if (window.scrollY >= 550) {
    header.style.cssText = "background-color : #1B1B1B";
  } else {
    header.style.cssText = "background-color : transparent";
  }
};
/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
stats
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let stats_number = document.querySelectorAll(".stats-number");
let number = [...stats_number];
for (let i = 0; i < number.length; i++) {
  let data = +number[i].innerHTML;
  let counter = setInterval(function stats() {
    number[i].innerHTML = data;
    data += 1;
    if (data == number[i].dataset.count) {
      clearInterval(counter);
    }
  }, 1);
}
