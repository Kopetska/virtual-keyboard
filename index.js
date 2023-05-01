/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
const array1 = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "+",
  "Backspace",
];

const array2 = [
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
];

const array3 = [
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
];

const array4 = ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", "."];

const array5 = [
  "Arrow<br>Right",
  "Arrow<br>Down",
  "Arrow<br>Up",
  "Arrow<br>Left",
  "Alt",
  "Meta",
  " ",
  "Cont<br>rol",
  "Lang",
];

const array = [...array1, ...array2, ...array3, ...array4, ...array5];

document.body.innerHTML = `<h1 class="title">Virtual Keyboard</h1>
<div class="text-input"></div>
<div class="keyboard">${array
  .map((value) => `<button class="key-btn">${value}</button>`)
  .join("")}</div>`;

const keyboard = document.querySelector(".keyboard");
const textInput = document.querySelector(".text-input");
const children = [...keyboard.children];

const deleteBtn = keyboard.children[13];
deleteBtn.classList.add("delete-btn");

const tabBtn = keyboard.children[14];
tabBtn.classList.add("tab-btn");

const returnBtn = keyboard.children[40];
returnBtn.classList.add("return-btn");

const shiftBtn = keyboard.children[41];
shiftBtn.classList.add("shift-btn");

const gapBtn = keyboard.children[57];
gapBtn.classList.add("gap-btn");

const capsBtn = keyboard.children[28];
capsBtn.classList.add("caps-btn");

const langBtn = keyboard.lastElementChild;

const activeEffectOnScreenClick = function (event) {
  for (const value of children) {
    if (value.classList.contains("active")) {
      value.classList.remove("active");
    }
  }
  if (event.target.classList.contains("key-btn")) {
    event.target.classList.add("active");
  }
};

const activeEffectOnKeyboardClick = function (event) {
  for (const value of children) {
    if (value.classList.contains("active")) {
      value.classList.remove("active");
    } else if (
      value.textContent.toLowerCase() === event.key ||
      value.textContent === event.key ||
      value.textContent.toUpperCase() === event.key
    ) {
      value.classList.add("active");
    }
  }
};

const printLettersFromScreen = function () {
  let markup = "";

  for (const value of children) {
    if (value.classList.contains("active")) {
      markup = value.textContent;
    }
  }

  textInput.insertAdjacentHTML("afterbegin", markup);
};

const printLettersFromKeyboard = function (event) {
  let markup = "";

  for (const value of children) {
    if (
      value.textContent.toLowerCase() === event.key ||
      value.textContent.toUpperCase() === event.key
    ) {
      markup = event.key;
    }
  }

  textInput.insertAdjacentHTML("afterbegin", markup);
};

keyboard.addEventListener("click", activeEffectOnScreenClick);
window.addEventListener("keydown", activeEffectOnKeyboardClick);
keyboard.addEventListener("click", printLettersFromScreen);
window.addEventListener("keydown", printLettersFromKeyboard);

langBtn.addEventListener("click", () => {
  const arrayRus = [
    ...array1,
    "Tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "[",
    "]",
    "\\",
    "CapsLock",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    ";",
    "'",
    "Enter",
    "Shift",
    "я",
    "ч",
    "с",
    "м",
    "і",
    "т",
    "ь",
    ",",
    ".",
    ...array5,
  ];

  document.body.innerHTML = `<h1 class="title">Virtual Keyboard</h1>
<div class="text-input"></div>
<div class="keyboard">${arrayRus
    .map((value) => `<button class="key-btn">${value}</button>`)
    .join("")}</div>`;

  const keyboard = document.querySelector(".keyboard");

  const deleteBtn = keyboard.children[13];
  deleteBtn.classList.add("delete-btn");

  const tabBtn = keyboard.children[14];
  tabBtn.classList.add("tab-btn");

  const returnBtn = keyboard.children[40];
  returnBtn.classList.add("return-btn");

  const shiftBtn = keyboard.children[41];
  shiftBtn.classList.add("shift-btn");

  const gapBtn = keyboard.children[57];
  gapBtn.classList.add("gap-btn");

  const capsBtn = keyboard.children[28];
  capsBtn.classList.add("caps-btn");

  const langBtn = keyboard.lastElementChild;
  langBtn.classList.add("active");

  langBtn.addEventListener("click", () => {
    langBtn.classList.remove("active");
    document.body.innerHTML = `<h1 class="title">Virtual Keyboard</h1>
<div class="text-input"></div>
<div class="keyboard">${array
      .map((value) => `<button class="key-btn">${value}</button>`)
      .join("")}</div>`;

    const keyboard = document.querySelector(".keyboard");

    const deleteBtn = keyboard.children[13];
    deleteBtn.classList.add("delete-btn");

    const tabBtn = keyboard.children[14];
    tabBtn.classList.add("tab-btn");

    const returnBtn = keyboard.children[40];
    returnBtn.classList.add("return-btn");

    const shiftBtn = keyboard.children[41];
    shiftBtn.classList.add("shift-btn");

    const gapBtn = keyboard.children[57];
    gapBtn.classList.add("gap-btn");

    const capsBtn = keyboard.children[28];
    capsBtn.classList.add("caps-btn");
  });
});

capsBtn.addEventListener("click", () => {
  document.body.innerHTML = `<h1 class="title">Virtual Keyboard</h1>
<div class="text-input"></div>
<div class="keyboard">${array
    .map((value) => `<button class="key-btn">${value.toUpperCase()}</button>`)
    .join("")}</div>`;

  const keyboard = document.querySelector(".keyboard");

  const deleteBtn = keyboard.children[13];
  deleteBtn.classList.add("delete-btn");

  const tabBtn = keyboard.children[14];
  tabBtn.classList.add("tab-btn");

  const returnBtn = keyboard.children[40];
  returnBtn.classList.add("return-btn");

  const shiftBtn = keyboard.children[41];
  shiftBtn.classList.add("shift-btn");

  const gapBtn = keyboard.children[57];
  gapBtn.classList.add("gap-btn");

  const capsBtn = keyboard.children[28];
  capsBtn.classList.add("caps-btn");

  capsBtn.classList.add("active");

  capsBtn.addEventListener("click", () => {
    document.body.innerHTML = `<h1 class="title">Virtual Keyboard</h1>
<div class="text-input"></div>
<div class="keyboard">${array
      .map((value) => `<button class="key-btn">${value}</button>`)
      .join("")}</div>`;

    const keyboard = document.querySelector(".keyboard");

    const deleteBtn = keyboard.children[13];
    deleteBtn.classList.add("delete-btn");

    const tabBtn = keyboard.children[14];
    tabBtn.classList.add("tab-btn");

    const returnBtn = keyboard.children[40];
    returnBtn.classList.add("return-btn");

    const shiftBtn = keyboard.children[41];
    shiftBtn.classList.add("shift-btn");

    const gapBtn = keyboard.children[57];
    gapBtn.classList.add("gap-btn");

    const capsBtn = keyboard.children[28];
    capsBtn.classList.add("caps-btn");

    capsBtn.classList.remove("active");
  });
});
