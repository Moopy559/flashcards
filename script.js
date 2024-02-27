const compZero = document.getElementById("0");
const compOne = document.getElementById("1");
const compTwo = document.getElementById("2");
const compThree = document.getElementById("3");
const compFour = document.getElementById("4");
const compFive = document.getElementById("5");
const compSix = document.getElementById("6");
const compSeven = document.getElementById("7");
const compEight = document.getElementById("8");

const btnZero = compZero.querySelector("button");
const btnOne = compOne.querySelector("button");
const btnTwo = compTwo.querySelector("button");
const btnThree = compThree.querySelector("button");
const btnFour = compFour.querySelector("button");
const btnFive = compFive.querySelector("button");
const btnSix = compSix.querySelector("button");
const btnSeven = compSeven.querySelector("button");
const btnEight = compEight.querySelector("button");

const nextBtn = document.getElementById("nextBtn");

const btnArray = [
  btnZero,
  btnOne,
  btnTwo,
  btnThree,
  btnFour,
  btnFive,
  btnSix,
  btnSeven,
  btnEight,
];

const compArray = [
  compZero,
  compOne,
  compTwo,
  compThree,
  compFour,
  compFive,
  compSix,
  compSeven,
  compEight,
];

function toggleHide(comp) {
  comp.children[1].classList.toggle("hide");
}

btnArray.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    toggleHide(parent);
  });
});

// on click of next button, set all components to hide.
nextBtn.addEventListener("click", () => {
  compArray.forEach((comp) => {
    comp.classList.add("hide");
  });
  // Then set all answers to hide.
  btnArray.forEach((btn) => {
    const parent = btn.parentElement;
    parent.children[1].classList.add("hide");
  });
  // Then draw random number between 0 and 8.
  let randomNumber = Math.floor(Math.random() * 9);
  // Then set chosen comp to display
  compArray[randomNumber].classList.toggle("hide");
});
