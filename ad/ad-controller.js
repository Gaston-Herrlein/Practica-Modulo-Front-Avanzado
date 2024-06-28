import { getAds } from "./ad-model.js";
import { buildAdsList, buildAdsError } from "./ad-view.js";
import {
  showError,
  hiddenMessage,
  showSuccess,
} from "../notification/notification-controller.js";
import { showSpinner, hiddenSpinner } from "../spinner/spinnerrController.js";

const bannerNodo = document.getElementById("banner");

export async function adsController() {
  const spinnerWrapp = document.querySelector("#spinner-wrapper");
  try {
    showSpinner(spinnerWrapp);
    const ads = await getAds();
    if (ads.length === 0) {
      hiddenSpinner(spinnerWrapp);
      showAdsError({ Error: "La lista de anuncios esta vacía" });
    } else {
      hiddenSpinner(spinnerWrapp);

      if (bannerNodo.classList.value === "banner") {
        bannerNodo.classList.remove("banner");
        bannerNodo.classList.add("grid");
      }
      bannerNodo.innerHTML = "";

      showAdsSuccess("Anuncios recibidos correctamente");
      renderAds(ads, bannerNodo);
    }
  } catch (err) {
    hiddenSpinner(spinnerWrapp);
    showAdsError({ Error: err });
  }
}

function renderAds(Ads, AdsList) {
  Ads.forEach((ad) => {
    const adItem = document.createElement("div");
    adItem.classList.add("flex-column", "center", "mt-l");
    adItem.innerHTML = buildAdsList(ad);
    AdsList.appendChild(adItem);
  });
}

function showAdsError(errors) {
  const notificationWrapper = document.querySelector("#notification-wrapper");
  showError(notificationWrapper, errors);

  setTimeout(() => {
    hiddenMessage(notificationWrapper);
  }, 3000);
}
function showAdsSuccess(message) {
  const notificationWrapper = document.querySelector("#notification-wrapper");
  showSuccess(notificationWrapper, message);

  setTimeout(() => {
    hiddenMessage(notificationWrapper);
  }, 1000);
}
