const inputUser = document.getElementById("input__num");
const clearBtn = document.getElementById("clear");
const plusMinus = document.getElementById("plusMinus");
const procent = document.getElementById("procent");
const dot = document.getElementById("dot");
const nein = document.getElementById("nein");
const eight = document.getElementById("eight");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");
const divide = document.getElementById("divide");
const multiplay = document.getElementById("multiplay");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const sum = document.getElementById("sum");

let result = [];
let secondResult = [];
let tempNum = 0;
let operations;
let temp;
let resultSum;

// clear input
clearBtn.addEventListener("click", () => {
  inputUser.value = [];
  result = [];
  temp;
  tempNum;
});

// plusMinus
plusMinus.addEventListener("click", () => {
  if (temp > 0) {
    temp = temp * -1;
    inputUser.value = temp;
  } else {
    temp = temp * -1;
    inputUser.value = temp;
  }
});

// procent
procent.addEventListener("click", () => {
  temp = result.join("") / 100;
  inputUser.value = temp;
  result = [];
});

// divide
divide.addEventListener("click", () => {
  divide.classList.toggle("active");
  tempNum = temp;
  result = [];
  inputUser.value = result;
  operations = divide;
});

// multiplay
multiplay.addEventListener("click", () => {
  multiplay.classList.toggle("active");
  tempNum = temp;
  result = [];
  inputUser.value = result;
  operations = multiplay;
});

// minus
minus.addEventListener("click", () => {
  minus.classList.toggle("active");
  tempNum = temp;
  result = [];
  inputUser.value = result;
  operations = minus;
});

// plus
plus.addEventListener("click", () => {
  plus.classList.toggle("active");
  tempNum = temp;
  result = [];
  inputUser.value = result;
  operations = plus;
});

// sum
sum.addEventListener("click", () => {
  switch (operations) {
    case divide:
      resultSum = tempNum / temp;
      temp = resultSum;
      inputUser.value = resultSum;
      divide.classList.toggle("active");
      break;
    case multiplay:
      resultSum = tempNum * temp;
      temp = resultSum;
      inputUser.value = resultSum;
      multiplay.classList.toggle("active");
      break;
    case minus:
      resultSum = tempNum - temp;
      temp = resultSum;
      inputUser.value = resultSum;
      minus.classList.toggle("active");
      break;
    case plus:
      resultSum = +tempNum + +temp;
      temp = resultSum;
      inputUser.value = resultSum;
      plus.classList.toggle("active");
      break;
  }
});

// dot
dot.addEventListener("click", () => {
  result.push(".");

  temp = result.join("");
  inputUser.value = temp;
});

// 9
nein.addEventListener("click", () => {
  if (result === "9") {
    result.push(9);
  } else {
    result.push(9);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 8
eight.addEventListener("click", () => {
  if (result === "8") {
    result.push(8);
  } else {
    result.push(8);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 7
seven.addEventListener("click", () => {
  if (result === "7") {
    result.push(7);
  } else {
    result.push(7);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 6
six.addEventListener("click", () => {
  if (result === "6") {
    result.push(6);
  } else {
    result.push(6);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 5
five.addEventListener("click", () => {
  if (result === "5") {
    result.push(5);
  } else {
    result.push(5);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 4
four.addEventListener("click", () => {
  if (result === "4") {
    result.push(4);
  } else {
    result.push(4);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 3
three.addEventListener("click", () => {
  if (result === "3") {
    result.push(3);
  } else {
    result.push(3);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 2
two.addEventListener("click", () => {
  if (result === "2") {
    result.push(2);
  } else {
    result.push(2);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 1
one.addEventListener("click", () => {
  if (result === "1") {
    result.push(1);
  } else {
    result.push(1);

    temp = result.join("");
    inputUser.value = temp;
  }
});

// 0
zero.addEventListener("click", () => {
  if (result === "0") {
    result.push(0);
  } else {
    result.push(0);

    temp = result.join("");
    inputUser.value = temp;
  }
});
