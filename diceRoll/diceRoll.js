let diceClick = document.getElementById("btn");

let total = 0;
diceClick.addEventListener("click", () => {
  let result = Math.floor(Math.random() * 6) + 1; //this will generate arandom number b/n 0 and 5
  let placeHolder = document.getElementById("input"); //help to append the img element
  let imgElement = document.createElement("img");

  if (result === 1) {
    imgElement.src = "./image/dice 1.JPG"; // instead wecan use &#9856 (this is die with 1 dot face)
    total += 1;
  } else if (result === 2) {
    imgElement.src = "./image/dice 2.JPG"; // instead wecan use &#9857 (this is die with 1 dot face)
    total += 2;
  } else if (result === 3) {
    imgElement.src = "./image/dice 3.JPG"; //instead wecan use &#9858 (this is die with 1 dot face)
    total += 3;
  } else if (result === 4) {
    imgElement.src = "./image/dice 4.JPG";
    total += 4;
  } else if (result === 5) {
    imgElement.src = "./image/dice 5.JPG";
    total += 5;
  } else {
    imgElement.src = "./image/dice 6.JPG";
    total += 6;
  }
  // Clear the existing content of the placeHolder element other wise every time it appends a chiled it will not erase the previouse
  placeHolder.innerHTML = "";

  // Append the imgElement to the placeHolder element
  placeHolder.appendChild(imgElement);
  // Update the rolling total
  document.getElementById("total").textContent = `Rolling Total: ${total}`;
});
