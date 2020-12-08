// colors to show randomly
const colors = ["green", "red", "purple", "grey", "aquamarine", "blue", "burlywood", "brown", "cadetblue", "chocolate", "coral", "cyan", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // apply colors on body background
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}