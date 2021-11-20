console.log("hi");

const toggle = document.querySelector(".selector");
const body = document.querySelector("body");

toggle.addEventListener("click", (e) => {
  console.log("toggle clicked");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    toggle.classList.add("left");
  } else {
    body.classList.remove("light");
    toggle.classList.remove("left");

    body.classList.add("dark");
  }
});
