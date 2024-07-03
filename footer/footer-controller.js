export function footerController() {
  const footerContainer = document.querySelector("footer");
  footerContainer.classList.add("flex-row", "center");
  footerContainer.textContent = "Copyright © 2024";
}
