export function createButton(type, text, action) {
  const button = document.createElement("button");
  button.setAttribute("data-js", `button-${type}`);
  button.classList.add("button", `button--${type}`);
  button.textContent = text;
  button.addEventListener("click", action);
  return button;
}
