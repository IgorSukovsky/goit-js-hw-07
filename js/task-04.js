const buttons = {
  increm: document.querySelector("[data-action='increment']"),
  decrem: document.querySelector("[data-action='decrement']"),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
buttons.increm.addEventListener("click", increment);
buttons.decrem.addEventListener("click", decrement);
