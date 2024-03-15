let diceClick = document.getElementById("btn");
let diceArr = [1, 2, 3, 4, 5, 6];
let total = 0;
diceClick.addEventListener("click", () => {
  let result = Math.floor(Math.random() * diceArr.length); //this will generate arandom number b/n 0 and 5
  let placeHolder = document.getElementById("input"); //help to append the img element
  let imgElement = document.createElement("img");

  if (result === 1) {
    imgElement.src = "./images/dice 1.JPG";
    total += 1;
  } else if (result === 2) {
    imgElement.src = "./images/dice 2.JPG";
    total += 2;
  } else if (result === 3) {
    imgElement.src = "./images/dice 3.JPG";
    total += 3;
  } else if (result === 4) {
    imgElement.src = "./images/dice 4.JPG";
    total += 4;
  } else if (result === 5) {
    imgElement.src = "./images/dice 5.JPG";
    total += 5;
  } else {
    imgElement.src = "./images/dice 6.JPG";
    total += 6;
  }
  // Clear the existing content of the placeHolder element other wise every time it appends a chiled it will not erase the previouse
  placeHolder.innerHTML = "";

  // Append the imgElement to the placeHolder element
  placeHolder.appendChild(imgElement);
  // Update the rolling total
  document.getElementById("total").textContent = `Rolling Total: ${total}`;
});
