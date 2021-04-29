const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("input", onInputText);
const lens = inputEl.getAttribute("data-length");
function onInputText() {
  console.log("a:" + inputEl.value.length);
  console.log("d:" + inputEl.value.length == lens);

  if (inputEl.value.length === Number(lens)) {
    updateClasse("valid", "invalid");
    console.log("c: ");
  } else {
    updateClasse("invalid", "valid");
  }
}
function updateClasse(addClass, remClass) {
  inputEl.classList.add(addClass);
  inputEl.classList.remove(remClass);
}
