const faqs = document.querySelectorAll(".faq");
const form = document.querySelector("form");
const options = document.querySelectorAll(".features__options--option");
const optionImg = document.querySelector(".features__container--image img");
const text = document.querySelector(".features__info");

// FAQ TOGGLE
faqs.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.classList.toggle("active");
  });
});

// FORM HANDLING

form.addEventListener("submit", (e) => {
  if (!e.target.email.value) {
    e.preventDefault();
    console.log("empty string");
    form.dispatchEvent(new Event("invalid"));
    return;
  }
  console.log(e.target.email.value);
});

form.addEventListener(
  "invalid",
  (e) => {
    e.preventDefault();
    form.children[0].classList.add("error");
  },
  true
);

// FEATURE HANDLING

const features = [
  {
    id: 0,
    title: "Bookmark in one click",
    info: `Organize your bookmarks however you like. 
    Our simple drag-and-drop interface gives you complete 
    control over how you manage your favourite sites `,
    img: "./images/illustration-features-tab-1.svg",
  },
  {
    id: 1,
    title: "Intelligent Search",
    info: `Our powerful search feature will help you find saved sites in not time at all.
     No need to trawl through all of your bookmarks. `,
    img: "./images/illustration-features-tab-2.svg",
  },
  {
    id: 2,
    title: "Share your bookmarks",
    info: `Easily share your bookmarks and collections with others.Create a shareable 
    link that you can send at the click of a button. `,
    img: "./images/illustration-features-tab-3.svg",
  },
];
let currentOption = 0;

// OPTIONS handler

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    const clickedOption = option.dataset.ref;
    if (clickedOption !== currentOption) {
      options[currentOption].classList.remove("active");
      option.classList.add("active");
      currentOption = clickedOption;

      optionImg.setAttribute("src", features[clickedOption].img);
      text.children[0].innerHTML = features[clickedOption].title;
      text.children[1].innerHTML = features[clickedOption].info;
    }
  });
});
