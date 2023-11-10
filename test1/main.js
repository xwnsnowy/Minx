const error = document.getElementById("error");
const result = document.getElementById("result");

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function calculatePrimeSum() {
  const numberA = Number(document.getElementById("numberA").value);
  const numberB = Number(document.getElementById("numberB").value);
  let primeNumbers = [];

  let sum = 0;
  // console.log(typeof numberA);
  if (isNaN(numberA) || isNaN(numberB) || numberA >= numberB) {
    error.innerHTML = "Vui lòng nhập a < b!";
    return;
  }

  for (let i = numberA; i <= numberB; i++) {
    if (isPrime(i)) {
      sum += i;
      primeNumbers.push(i);
    }
  }

  let listPrimeNumbers = primeNumbers.join(", ");

  result.innerHTML = `
  Các số nguyên tố trong khoảng từ ${numberA} đến ${numberB} là: ${listPrimeNumbers}<br><br>
  Tổng các số trong khoảng là: ${sum}`;
}
