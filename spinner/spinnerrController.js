import { buildSpinnerView } from "./spinner-view.js";

export function showSpinner(node) {
  node.innerHTML = buildSpinnerView();
  const spinnerWrapper = document.querySelector("#spinner-wrapper");
  spinnerWrapper.classList.remove("hidden");
}

export function hiddenSpinner(node) {
  node.innerHTML = "";
  const spinnerWrapper = document.querySelector("#spinner-wrapper");
  spinnerWrapper.classList.add("hidden");
}
