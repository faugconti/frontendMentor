const faqs = document.querySelectorAll(".faq");

console.log(faqs);

faqs.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.classList.toggle("active");
  });
});
