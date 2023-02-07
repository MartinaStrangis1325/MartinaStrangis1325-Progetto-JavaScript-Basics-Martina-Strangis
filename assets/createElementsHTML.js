// assets/app.js
const counter = document.getElementById("counter");
const display = document.createElement("div");
const incrementBtn = document.createElement("button");
const decrementBtn = document.createElement("button");

let count = 0;

const displayCounter = () => {
  display.innerHTML = count;
};

const handleIncrement = () => {
  count++;
  displayCounter();
};

const handleDecrement = () => {
  count--;
  displayCounter();
};

display.id = "counter-display";
incrementBtn.id = "increment-btn";
decrementBtn.id = "decrement-btn";

incrementBtn.innerHTML = "+";
decrementBtn.innerHTML = "-";

incrementBtn.addEventListener("click", handleIncrement);
decrementBtn.addEventListener("click", handleDecrement);

counter.appendChild(display);
counter.appendChild(incrementBtn);
counter.appendChild(decrementBtn);

displayCounter();

