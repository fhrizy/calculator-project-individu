//variable yang akan menyimpan value untuk melakukan operasi perhitungan
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// Display yang diinputkan akan tampil di screen
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// Event listener untuk tombol number
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

const inputNumber = (number) => {
  if (currentNumber === "0") {
    /* Jika currentNumber = 0, maka currentNumber akan diisi dengan 
  number yang selanjutnya dari number yang peretama */
    currentNumber = number;
  } else {
    /* Jika currentNumber tidak 0, maka currentNumber akan diisi dengan
    number yang akan di inputkan */
    currentNumber += number;
  }
};

// Event listener untuk tombol operator
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    /* Jika operator yang diinputkan pertama, maka prevNumber akan
    diisi dengan currentNumber*/
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

// Event listener untuk tombol sama dengan
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", (e) => {
  calculate();
  updateScreen(currentNumber);
});

// Menentukan operator yang akan dilakukan untuk kalkulasi
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

// Event listener untuk menghapus seluruh angka yang diinputkan
const clearButton = document.querySelector(".all-clear");
clearButton.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// Event listener untuk tombol decimal
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  // Jika currentNumber tidak mengandung decimal, maka decimal akan diinputkan
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

// Event listener untuk tombol persentase
const percentageBtn = document.querySelector(".percentage");
percentageBtn.addEventListener("click", () => {
  inputPercentage(0.01);
});

inputPercentage = (percentage) => {
  //currentNumber akan di kalikan dengan 0,01 bari di kalkulasi
  currentNumber = currentNumber * percentage;
};
