// console.log("mul");
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

document.getElementById("btnn");
let result = document.querySelector(".container").innerText;
btnn.addEventListener("click", () => {
  fetch("./data.json")
    .then((resp) => resp.json())
    .then((data) => {
      result = data;
      console.log(result);
    });
});
