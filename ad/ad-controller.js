import { getAds } from "./ad-model.js";
import { buildAdsList, buildAdsError } from "./ad-view.js";

const bannerNodo = document.getElementById("banner");

export async function adsController() {
  try {
    const ads = await getAds();
    if (bannerNodo.classList.value === "banner") {
      bannerNodo.classList.remove("banner");
      bannerNodo.classList.add("grid");
    }
    bannerNodo.innerHTML = "";
    renderAds(ads, bannerNodo);
  } catch (error) {
    renderErrorAds(bannerNodo);
    throw new Error(error);
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

function renderErrorAds(errorList) {
  const notificationWrapper = document.querySelector("#notification-wrapper");
  notificationWrapper.classList.add("flex-column", "center");
  notificationWrapper.innerHTML = buildAdsError();
  errorList.appendChild(notificationWrapper);
}

function rendereSpinner() {}
