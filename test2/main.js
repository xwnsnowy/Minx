const error = document.getElementById("error");
const result = document.getElementById("result");

document.getElementById("number").addEventListener("blur", function () {
  validateInput();
});

function validateInput() {
  const number = Number(document.getElementById("number").value);

  if (isNaN(number) || number < 1 || number > 10) {
    error.innerHTML = `Vui lòng nhập số nguyên trong khoảng từ 1 đến 10!`;
    result.innerHTML = "";
  } else {
    error.innerHTML = "";
    numberOneTriangle(number);
  }
}

function numberOneTriangle(numberInput) {
  let print = "";
  for (let i = 1; i <= numberInput; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    print += row + "<br>";
  }

  result.innerHTML = print;
}
