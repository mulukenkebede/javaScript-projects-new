let btn = document.getElementById("btn");
let input = document.getElementById("input");
btn.addEventListener("click", () => {
  let birthdate = input.value;
  var currentDate = new Date(); // Get the current date
  var birthdateObj = new Date(birthdate); // Convert the birthdate string to a Date object
  // Calculate the difference in milliseconds between the current date and the birthdate
  var ageInMillis = currentDate - birthdateObj;

  // Convert the milliseconds to years
  var ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365));

  // Display the calculated age
  document.getElementById(
    "result"
  ).innerText = `Your are ${ageInYears} years old`;
});
