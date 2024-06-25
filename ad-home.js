import { adsController } from "./ad/ad-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("show-ad").addEventListener("click", () => {
    adsController();
  });
});
