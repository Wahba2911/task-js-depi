var plusBtn = document.getElementById("plusBtn");
var minusBtn = document.getElementById("minusBtn");
var result = document.getElementById("result");

function increment() {
  var countInNum = +result.innerHTML;

  countInNum++;

  result.innerHTML = countInNum;

  result.style.color = "blue";
}

function decrement() {
  var countInNum = +result.innerHTML;

  if (countInNum > 0) {
    countInNum--;

    result.innerHTML = countInNum;
  }

  if (countInNum == 0) {
    result.style.color = "red";
  } else {
    result.style.color = "blue";
  }
}
