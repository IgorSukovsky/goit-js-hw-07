const refs = {
  value: document.getElementById("value"),
  increm: document.querySelector("[data-action='increment']"),
  decrem: document.querySelector("[data-action='decrement']"),
};
let counterValue = 0;
const updatValue = () => {
  refs.value.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updatValue();
};

const decrement = () => {
  counterValue -= 1;
  updatValue();
};
refs.increm.addEventListener("click", increment);
refs.decrem.addEventListener("click", decrement);
