questions = document.querySelectorAll(".question");
last = 0;

questions.forEach((q) =>
  q.addEventListener("click", (event) => {
    if (last) {
      last.childNodes[5].className = "hidden";
      last.childNodes[1].style.fontWeight = 500;
    }
    if (last === q) {
      last = null;
      q.childNodes[5].className = "hidden";
      q.childNodes[1].style.fontWeight = 500;
      return;
    }
    if (q.childNodes[5].className == "hidden") {
      q.childNodes[5].className = "show";
      q.childNodes[1].style.fontWeight = 700;
      last = q;
    } else {
      q.childNodes[5].className = "hidden";
    }
  })
);
