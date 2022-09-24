let number = document.querySelectorAll(".number");
let result = document.getElementById("result");
let equal = document.getElementById("equal");
let deleteOne = document.getElementById("delete");
let deleteAll = document.getElementById("clear");
let percentage = document.getElementById("percent");


let font = 4;
function displayOnScreen(event) {
  if (result.textContent == "0" && event.target.textContent == "0") {
    return;
  }
  if (result.textContent.split("")[0] == "0" && result.textContent.split("")[result.textContent.split("").length - 1] == "0") {
    result.textContent = "";
  }


  font -= 0.15;

  result.style.fontSize = `${font}rem`;
  let lastEntry =
    result.textContent.split("")[result.textContent.split("").length - 1];
  console.log(lastEntry);
  if (
    (lastEntry === "x" ||
      lastEntry === "÷" ||
      lastEntry === "-" ||
      lastEntry === "+") &&
    (event.target.textContent === "x" ||
      event.target.textContent === "÷" ||
      event.target.textContent === "-" ||
      event.target.textContent === "+")
  ) {
    let newList = Array.from(result.textContent);
    newList.pop();
    let string = newList.join("") + event.target.textContent;
    result.textContent = string;
    return;
  }
  result.textContent += event.target.textContent;
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
  result.innerText = myresult;
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
    }
  }
  numberList.splice(index,1)
  let num = Number(numberList.join('')) / 100;
  result.textContent = num;
}
percentage.addEventListener("click", percent);
