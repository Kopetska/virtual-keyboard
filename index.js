/* eslint-disable comma-dangle */
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
const backsBtn = children[13];

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
    if (
      value.classList.contains("active") &&
      value.textContent !== "Backspace" &&
      value.textContent !== "ArrowRight" &&
      value.textContent !== "ArrowLeft" &&
      value.textContent !== "ArrowUp" &&
      value.textContent !== "ArrowDown"
    ) {
      markup = value.textContent;
    }
  }

  textInput.insertAdjacentHTML("beforeend", markup);
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

  textInput.insertAdjacentHTML("beforeend", markup);
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

window.addEventListener("keydown", (event) => {
  if (event.key === "CapsLock") {
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
  }

  if (capsBtn.classList.contains("active")) {
    window.addEventListener("keydown", (event) => {
      if (event.key === "CapsLock") {
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
      }
    });
  }
});

backsBtn.addEventListener("click", () => {
  const string = textInput.textContent;
  const arr = [];

  for (const letter of string) {
    arr.push(letter);
  }

  textInput.textContent = arr.splice(1, arr.length - 1).join("");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    const string = textInput.textContent;
    const arr = [];

    for (const letter of string) {
      arr.push(letter);
    }

    textInput.textContent = arr.splice(1, arr.length - 1).join("");
  }
});

const arrowRight = keyboard.children[51];

arrowRight.addEventListener("click", () => {
  textInput.insertAdjacentHTML(
    "beforeend",
    '<svg width="30"><use href="./sprite.svg#icon-arrow-right"></use></svg>'
  );
});

const arrowDown = keyboard.children[52];

arrowDown.addEventListener("click", () => {
  textInput.insertAdjacentHTML(
    "beforeend",
    '<svg width="30"><use href="./sprite.svg#icon-arrow-down"></use></svg>'
  );
});

const arrowUp = keyboard.children[53];

arrowUp.addEventListener("click", () => {
  textInput.insertAdjacentHTML(
    "beforeend",
    '<svg width="30"><use href="./sprite.svg#icon-arrow-up"></use></svg>'
  );
});

const arrowLeft = keyboard.children[54];

arrowLeft.addEventListener("click", () => {
  textInput.insertAdjacentHTML(
    "beforeend",
    '<svg width="30"><use href="./sprite.svg#icon-arrow-left"></use></svg>'
  );
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    textInput.insertAdjacentHTML(
      "beforeend",
      '<svg width="30"><use href="./sprite.svg#icon-arrow-right"></use></svg>'
    );
  } else if (event.key === "ArrowLeft") {
    textInput.insertAdjacentHTML(
      "beforeend",
      '<svg width="30"><use href="./sprite.svg#icon-arrow-left"></use></svg>'
    );
  } else if (event.key === "ArrowDown") {
    textInput.insertAdjacentHTML(
      "beforeend",
      '<svg width="30"><use href="./sprite.svg#icon-arrow-down"></use></svg>'
    );
  } else if (event.key === "ArrowUp") {
    textInput.insertAdjacentHTML(
      "beforeend",
      '<svg width="30"><use href="./sprite.svg#icon-arrow-up"></use></svg>'
    );
  }
});
