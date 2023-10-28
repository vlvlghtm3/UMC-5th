const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
    const num = parseInt(number.innerText, 10);
    number.innerText = num + 1;
};

decrease.onclick = () => {
    const num = parseInt(number.innerText, 10);
    number.innerText = num - 1;
};
