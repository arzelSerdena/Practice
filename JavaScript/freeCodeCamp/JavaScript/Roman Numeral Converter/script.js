const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

function converter(number) {
  let str = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      number -= romanNumerals[i].value;
      str += romanNumerals[i].symbol;
      console.log(number, str);
    }
  }
  return str;
}

btn.addEventListener("click", function () {
  const inputValue = document.getElementById("number").value;
  const number = Number(inputValue);

  if (inputValue === "") {
    output.innerText = "Please enter a valid number";
  } else if (number < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = converter(number);
  }
});
