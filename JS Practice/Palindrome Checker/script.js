const text = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result").querySelector("span");

const validateInput = (inputText) => {
  if (inputText.trim() === "") {
    alert("Please input a value");
    return false;
  }
  return true;
};

const isPalindrome = (inputText) => {
  const formattedText = inputText.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedText = formattedText.split("").reverse().join("");
  return formattedText === reversedText;
};

checkButton.addEventListener("click", () => {
  const inputText = text.value;
  if (validateInput(inputText)) {
    if (isPalindrome(inputText)) {
      resultText.innerText = `${inputText} is a palindrome!`;
    } else {
      resultText.innerText = `${inputText} is not a palindrome.`;
    }
  }
});
