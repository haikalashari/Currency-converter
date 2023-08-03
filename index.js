const fromCur = document.querySelector('.from select');
const toCur = document.querySelector('.to select');
const getBtn = document.querySelector('form button');
const exIcon = document.querySelector('form .reverse');
const amount = document.querySelector('form input');
const exRateTxt = document.querySelector('form .result');


[fromCur, toCur].forEach((select, i) => {
    for(let curCode in countries){
        const selected = (i == 0 && curCode == "USD") || (i == 1 && curCode == "GBP") ? "selected" : "";
        select.insertAdjacentHTML("beforeend", `<option value="${curCode}" ${selected}>${curCode}</option>`);
    }
})