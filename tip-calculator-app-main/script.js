const interest_btn = document.querySelectorAll(".options__buttons button");
const person_input = document.querySelectorAll("input")[2];
const total_element = document.querySelector("#total");
const personElement = document.querySelector("#person");
const resetBtn = document.querySelectorAll("button")[5];
const bill_input = document.querySelector("input");

const interest = {
  element: document.querySelector(".active"),
  value: 0.15,
};
let people = person_input.value;
let bill = document.querySelector("input").value;

function calculate(bill, people, interest) {
  tip_person = (bill * interest) / people;
  tip_person = +("" + tip_person).slice(0, 4);
  total = bill / people + tip_person;
  person.innerHTML = "$" + tip_person;
  total_element.innerHTML = "$" + ("" + total).slice(0, 4);
  //   console.log(tip_person);
}

bill_input.addEventListener("input", (e) => {
  bill_input.value = bill_input.value.replace(/\d+?\.\d+/);
  bill = bill_input.value;
  calculate(bill, people, interest.value);
});

resetBtn.addEventListener("click", () => {
  people = 5;
  bill = 142.55;
  interest.value = 0.15;
  interest.element = document.querySelectorAll(".options__buttons button")[2];
  document.querySelectorAll(".options__buttons button").forEach((element) => {
    element.classList.remove("active");
  });
  interest.element.classList.add("active");
  bill_input.value = bill;
  calculate(bill, people, interest.value);
});

person_input.addEventListener("input", (e) => {
  person_input.value = person_input.value.replace(/[^0-9]/g, "");
  if (person_input.value > 100) person_input.value = 100;
  people = person_input.value;
  console.log(people);
  calculate(bill, people, interest.value);
});

interest_btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element != interest.element) {
      interest.element.classList.remove("active");
      element.classList.add("active");
      interest.element = element;
      interest.value = element.innerHTML.slice(0, -1) / 100;
    }
    console.log("changed button ", bill, people, interest.value);
    calculate(bill, people, interest.value);
  });
});
calculate(bill, people, interest.value);
