import { AdCreationController } from "./createAd/createAd-controller.js";
import {
  showError,
  hiddenMessage,
} from "../notification/notification-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    showJWTError({ error: "Sin autenticación" });
  }

  const adCreation = document.querySelector("#adCreation");
  AdCreationController(adCreation);
});

function showJWTError(error) {
  const notificationWrapper = document.querySelector("#notification-wrapper");
  showError(notificationWrapper, error);

  setTimeout(() => {
    hiddenMessage(notificationWrapper);
    window.location.href = "index.html";
  }, 2000);
}
