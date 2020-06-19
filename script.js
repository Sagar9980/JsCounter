let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let counter = document.querySelector(".counter-number");

reset.addEventListener("click", function () {
    counter.textContent = 0;
    counter.style.color = "#000";
});

increase.addEventListener("click", function () {
    let value = counter.innerHTML;
    counter.innerHTML = ++value;
    if (counter.textContent > 0) {
        counter.style.color = "rgb(0, 67, 155)";
    } else if (counter.textContent < 0) {
        counter.style.color = "rgb(110, 12, 12)";
    }
});
decrease.addEventListener("click", function () {
    let value = counter.innerHTML;
    counter.innerHTML = --value;
    if (counter.textContent > 0) {
        counter.style.color = "rgb(0, 67, 155)";
    } else if (counter.textContent < 0) {
        counter.style.color = "rgb(110, 12, 12)";
    }
});



