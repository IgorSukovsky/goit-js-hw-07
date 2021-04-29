let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
  let text = "незнакомец";
  if (input.value) text = input.value;
  nameOutput.innerHTML = text;
};
