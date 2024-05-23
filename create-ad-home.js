import { AdCreationController } from "./createAd/createAd-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "index.html";
  }

  const adCreation = document.querySelector("#adCreation");
  AdCreationController(adCreation);
});
