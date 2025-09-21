const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInput);

function handleInput(event) {
  const value = event.target.value.trim();
  if (value) {
    spanEl.textContent = value;
  } else {
    spanEl.textContent = "Anonymous";
  }
}
