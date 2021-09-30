const number = document.getElementById("number");
const buttons = document.querySelectorAll("button");
const [increase, decrease] = buttons;

increase.onclick = () => {
    const current = parseInt(number.innerText,10);
    number.innerText = current +10;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText,10);
    number.innerText = current -10;
}