import { createAd } from "./createAd-model.js";
import {
  showError,
  hiddenMessage,
  showSuccess,
} from "../notification/notification-controller.js";
import { showSpinner, hiddenSpinner } from "../spinner/spinnerrController.js";

export function AdCreationController(adCreation) {
  adCreation.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(adCreation);
    const ad = {
      title: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      category: formData.get("category"),
      type: formData.get("buy"),
      image: formData.get("image"),
    };

    const spinnerWrapp = document.querySelector("#spinner-wrapper");
    showSpinner(spinnerWrapp);

    try {
      await createAd(ad);
      hiddenSpinner(spinnerWrapp);
      showCreateSuccess("Create ad ok!");
    } catch (error) {
      hiddenSpinner(spinnerWrapp);
      showCreateErrors({ error });
    }
  });

  function showCreateSuccess(message) {
    const notificationWrapper = document.querySelector("#notification-wrapper");
    showSuccess(notificationWrapper, message);

    setTimeout(() => {
      hiddenMessage(notificationWrapper);
      window.location.href = "./index.html";
    }, 1000);
  }

  function showCreateErrors(error) {
    const notificationWrapper = document.querySelector("#notification-wrapper");
    showError(notificationWrapper, error);

    setTimeout(() => {
      hiddenMessage(notificationWrapper);
    }, 1000);
  }
}
