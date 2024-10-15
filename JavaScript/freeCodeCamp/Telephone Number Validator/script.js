const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkBtn.addEventListener("click", function () {
  const input = document.getElementById("user-input");
  const unfilteredArray = input.value.split("");
  const validInput = input.value.replace(/\D/g, "");
  const filteredArray = validInput.split("");

  // if no input
  if (input.value === "") {
    alert("Please provide a phone number");
  }

  // if there is input
  else {
    // if filtered is 11 chars
    if (filteredArray.length === 11) {
      // if first index is 1
      if (Number(unfilteredArray[0]) === 1) {
        // if char after first index is " "
        if (unfilteredArray[1] === " ") {
          unfilteredArray.shift();
          unfilteredArray.shift();

          check10Chars(unfilteredArray, input.value);
        }

        // 10 CHARS HERE

        // if char after first index is not "(" or " "
        else {
          unfilteredArray.shift();

          check10Chars(unfilteredArray, input.value);
        }
      }
      // if first index is not 1
      else {
        results.innerText += invalidOutput(input.value);
      }
    }
    // if filtered is 10 chars
    else if (filteredArray.length === 10) {
      check10Chars(unfilteredArray, input.value);
    } else {
      results.innerText += invalidOutput(input.value);
    }
  }
});

clearBtn.addEventListener("click", function () {
  const input = document.getElementById("user-input");
  results.innerText = "";
  input.value = "";
});

function invalidOutput(input) {
  return `Invalid US number: ${input}
  `;
}

function validOutput(input) {
  return `Valid US number: ${input}
  `;
}

function check10Chars(arr, input) {
  if (arr.includes("(") || arr.includes(")")) {
    results.innerText += bracketChecker(arr, input);
  } else {
    // (555) 555-5555
    if (arr[0] === "(") {
      // if 4th index is ")"
      if (arr[4] === ")") {
        // if 5th index is " "
        if (arr[5] === " ") {
          arr.splice(5, 1);

          if (arr[8] == "-" || arr[8] == " ") {
            check4EndDigits(arr, input, 9);
          } else if (typeof arr[8] == "number") {
            check4EndDigits(arr, input, 8);
          } else {
            results.innerText += invalidOutput(input);
          }
        } else if (typeof Number(arr[8]) == "number") {
          if (arr[8] === "-" || arr[8] === " ") {
            check4EndDigits(arr, input, 9);
          } else if (typeof arr[8] == "number") {
            check4EndDigits(arr, input, 8);
          } else {
            results.innerText += invalidOutput(input);
          }
        } else {
          results.innerText += invalidOutput(input);
        }
      } else {
        results.innerText += invalidOutput(input);
      }
    } else if (typeof Number(arr[0]) == "number") {
      if (arr[3] === " " || arr[3] === "-") {
        // if conjunction is "-" or " "
        if (arr[7] === "-" || arr[7] === " ") {
          results.innerText += validOutput(input);
        }
        // if conjunction is not "-" or " "
        else {
          results.innerText += invalidOutput(input);
        }

        // 5555555555
      } else if (typeof Number(arr[3]) == "number") {
        if (!/^\d+$/.test(arr[arr.length - 2])) {
          results.innerText += invalidOutput(input);
        } else if (typeof Number(arr[6]) == "number") {
          check4EndDigits(arr, input, 6);
        } else {
          results.innerText += invalidOutput(input);
        }
      } else {
        results.innerText += invalidOutput(input);
      }
    } else {
      results.innerText += invalidOutput(input);
    }
  }
}

function check4EndDigits(arr, input, x) {
  let char = true;
  for (let i = x; i < arr.length; i++) {
    if (typeof Number(arr[i]) == "number") {
      char = true;
    } else {
      char = false;
    }
  }

  if (char) {
    results.innerText += validOutput(input);
  } else {
    results.innerText += invalidOutput(input);
  }
}

function bracketChecker(arr, input) {
  if (arr[0] === "(" && arr[arr.length - 1] === ")") {
    return invalidOutput(input);
  } else {
    const bracketStack = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
        bracketStack.push(arr[i]);
      } else if (arr[i] === ")") {
        if (bracketStack.length === 0) {
          return invalidOutput(input);
        } else {
          bracketStack.push(arr[i]);
        }
      } else {
        continue;
      }
    }

    if (bracketStack.length % 2 !== 0) {
      return invalidOutput(input);
    } else {
      if (bracketStack.length > 2) {
        return invalidOutput(input);
      } else {
        return validOutput(input);
      }
    }
  }
}
