
const btn = document.getElementById('btn');
let total2 = document.getElementById('total2');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let dolarSign = document.getElementById("dolar")
dolarSign.style.display = "none";
btn.addEventListener('click', ()=>{
    let text3 = text1.value;
    let text4 = text2.value;
    let finalResult = text3 + text3 * (text4/100);
    dolarSign.style.display = 'block';
    finalResult = parseInt(finalResult)
    total2.innerText = finalResult.toFixed(2);
})

