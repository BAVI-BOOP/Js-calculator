let number = document.querySelectorAll(".number");
let result = document.getElementById("result");
let equal = document.getElementById("equal");
let deleteOne = document.getElementById("delete");
let deleteAll = document.getElementById("clear");
let percentage = document.getElementById("percent");

let font = 4;

// && !result.textContent.split('').includes('.')

function displayOnScreen(event) {
  if (event.target.textContent === "." && result.textContent == "0") {
    result.textContent = "0.";
  }
  if (
    result.textContent == "0" &&
    event.target.textContent == "0" &&
    !result.textContent == "0."
  ) {
    return;
  }
  if (
    result.textContent.split("")[0] == "0" &&
    result.textContent.split("")[result.textContent.split("").length - 1] ==
      "0" &&
    result.textContent.split("")[1] !== "."
  ) {
    result.textContent = "";
  }

  let lastEntry =
    result.textContent.split("")[result.textContent.split("").length - 1];
  console.log(lastEntry);
  if (
    (lastEntry === "x" ||
      lastEntry === "÷" ||
      lastEntry === "-" ||
      lastEntry === "+" ||
      lastEntry === ".") &&
    (event.target.textContent === "x" ||
      event.target.textContent === "÷" ||
      event.target.textContent === "-" ||
      event.target.textContent === "+" ||
      event.target.textContent === ".")
  ) {
    let newList = Array.from(result.textContent);
    newList.pop();
    let string = newList.join("") + event.target.textContent;
    result.textContent = string;
    return;
  }
  result.textContent += event.target.textContent;
  font -= 0.15;
  if (font < 1.4) {
    font += 0.15;
  }
  result.style.fontSize = `${font}rem`;
}

number.forEach((numBtn) => numBtn.addEventListener("click", displayOnScreen));

function operate() {
  let list = result.innerText.split("");
  for (i in list) {
    if (list[i] === "x") {
      list[i] = "*";
    } else if (list[i] === "÷") {
      list[i] = "/";
    }
  }

  let string = list.join("");

  let myresult = Function("return " + string)();
  if (myresult % 1 == 0) {
    result.innerText = myresult;
  } else {
    result.innerText = myresult.toFixed(2);
  }
}

equal.addEventListener("click", operate);

function del() {
  let newList = Array.from(result.textContent);
  newList.pop();
  let string = newList.join("");
  result.textContent = string;
  return;
}

deleteOne.addEventListener("click", del);

function clear() {
  result.textContent = "0";
  font = 4;
}

deleteAll.addEventListener("click", clear);

function percent() {
  let numberList = result.textContent.split("");
  let index;
  for (i in numberList) {
    if (
      numberList[i] === "x" ||
      numberList[i] === "÷" ||
      numberList[i] === "-" ||
      numberList[i] === "+"
    ) {
      index = i;
      numberList.splice(index, 1);
    }
  }

  let num = Number(numberList.join("")).toFixed(2) / 100;
  result.textContent = num;
}
percentage.addEventListener("click", percent);

// TİME

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
