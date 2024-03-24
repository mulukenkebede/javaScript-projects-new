// document.body.append("hiiiiiihuyftew");

// const myp = document.createElement("p");

// document.body.appendChild(myp);
// myp.innerText = "wala";
const lable = document.createElement("label");

const input = document.createElement("input");
input.placeholder = "]y6to";
lable.innerText = "To do list:";
document.body.appendChild(lable);
document.body.appendChild(input);

const button = document.createElement("button");
button.innerText = "ADD";
document.body.appendChild(button);
button.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = input.value;
  document.body.appendChild(div);
});

setTimeout(wakeUpUser, 1000);
function wakeUpUser() {
  alert("Are you going to stare at this boring page forever?");
}
