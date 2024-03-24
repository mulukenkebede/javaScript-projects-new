let input = document.getElementById("input");
let result = document.querySelector("span");

input.addEventListener(
  "input",

  function (event) {
    let inputValue = parseFloat(event.target.value);
    if (inputValue <= 0 || isNaN(inputValue)) {
      alert("Please enter a valid number");
      clearTimeout(
        setTimeout(() => {
          inputValue = "";
          result.innerText = "";
        }, 1000)
      );
    } else {
      result.innerText = Math.floor(inputValue * 0.453592);
      clearTimeout(
        setTimeout(() => {
          inputValue = "";
          result.innerText = "";
        }, 1000)
      );
    }
  }
);
