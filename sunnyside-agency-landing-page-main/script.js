const btn = document.querySelector(".menuBtn");
const menu = document.querySelector("aside");
let toggle = false;

btn.addEventListener("click", (event) => {
  toggle = !toggle;
  if (toggle) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
