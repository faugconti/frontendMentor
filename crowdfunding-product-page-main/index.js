const close_btn = document.getElementsByClassName("x")[0];
const backdrop = document.querySelector(".backdrop");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll("button");
const [, ...cards] = document.querySelectorAll(".modal .card");
const thankModal = document.querySelector(".thank");
const [...radios] = document.querySelectorAll('input[type="radio"]');
const hamburgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
cards.pop();
radios.pop();

let modalOpen = false;
let menuOpen = false;

if (window.innerWidth > 650) {
  menu.classList.remove("hidden");
  hamburgerBtn.src = "./images/icon-hamburger.svg";
}

for (let [index, radio] of radios.entries()) {
  radio.addEventListener("click", (e) => {
    clickRadio(index);
  });
}

for (let [index, val] of buttons.entries()) {
  val.addEventListener("click", (e) => {
    toggleModal(index + 1);
  });
}

hamburgerBtn.addEventListener("click", (e) => {
  toggleMenu();
});

close_btn.addEventListener("click", (e) => {
  toggleModal();
});

backdrop.addEventListener("click", (e) => {
  toggleModal();
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 650) {
    menu.classList.remove("hidden");
    hamburgerBtn.src = "./images/icon-hamburger.svg";
  } else {
    menu.classList.add("hidden");
    menuOpen = false;
  }
});

const toggleMenu = () => {
  if (menuOpen) {
    hamburgerBtn.src = "./images/icon-hamburger.svg";
    menu.classList.add("hidden");
  } else {
    hamburgerBtn.src = "./images/icon-close-menu.svg";
    menu.classList.remove("hidden");
  }
  menuOpen = !menuOpen;
};

const clickRadio = (opt = null) => {
  if (modalOpen) {
    cards.forEach((card) => {
      card.childNodes[1].childNodes[1].checked = false;
      card.classList.remove("selected");
      card.childNodes[7].classList.add("hidden");
    });
    cards[opt].classList.add("selected");
    cards[opt].childNodes[1].childNodes[1].checked = true;
    cards[opt].childNodes[7].classList.remove("hidden");
  }
};

const toggleModal = (opt = null) => {
  if (modalOpen) {
    // apagamos el modal
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
    thankModal.classList.add("hidden");
    body.classList.remove("unscroll");
  } else {
    //prendemos el modal
    modal.classList.remove("hidden");
    body.classList.add("unscroll");
    backdrop.classList.remove("hidden");
    cards.forEach((card) => {
      // console.log(card);
      card.classList.remove("selected");
      card.childNodes[7].classList.add("hidden");
      card.childNodes[1].childNodes[1].checked = false;
    });
  }
  modalOpen = !modalOpen;
  if (opt) {
    if (opt > 3) {
      // ultimo moda
      console.log("thank you");
      modal.classList.add("hidden");
      body.classList.add("unscroll");
      thankModal.classList.remove("hidden");
      backdrop.classList.remove("hidden");
      modalOpen = true;
      // console.log(opt);
      if (opt == 8) {
        thankModal.classList.add("hidden");
        backdrop.classList.add("hidden");
        body.classList.remove("unscroll");
        modalOpen = false;
      }
    } else {
      //clickeo cualquiera de los botones del modal

      opt--;
      // console.log(opt);
      cards[opt].classList.add("selected");
      cards[opt].childNodes[7].classList.remove("hidden");
      cards[opt].childNodes[1].childNodes[1].checked = true;
    }
  }
};
