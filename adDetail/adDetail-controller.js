import { isLogin } from "../session/session-controller.js";
import { addRemoveButton } from "./adDetail-view.js";
import {
  showError,
  showSuccess,
  hiddenMessage,
} from "../notification/notification-controller.js";
import { getProductById } from "./adDetail-model.js";
import { buildAd } from "./adDetail-view.js";
import { showSpinner, hiddenSpinner } from "../spinner/spinnerrController.js";

const adNodo = document.getElementById("adContainer");
const spinnerWrapp = document.querySelector("#spinner-wrapper");

export async function adDetailController() {
  if (!getAdId()) {
    showAdDetailError({ error: "Anuncio no encotrado" });
  } else {
    const userId = getUserId();
    const adId = getAdId();

    try {
      showSpinner(spinnerWrapp);
      const ad = await getProductById(adId);
      if (Object.keys(ad).length === 0) {
        hiddenSpinner(spinnerWrapp);
        showAdDetailError({ error: "Anuncio no encontrado" });
      } else {
        if (adNodo.classList.value === "adContainer") {
          adNodo.classList.remove("adContainer");
          adNodo.classList.add("grid");
        }
        adNodo.innerHTML = "";

        hiddenSpinner(spinnerWrapp);
        showAdsSuccess("Anuncios recibidos correctamente");
        renderAd(ad, adNodo);
      }
    } catch {
      hiddenSpinner(spinnerWrapp);
      showAdDetailError({ Error: err });
    }
  }
}

function getAdId() {
  const searchParams = new URLSearchParams(window.location.search);
  const adId = searchParams.get("id");
  return adId;
}

function getUserId() {
  const jwt = window.localStorage.getItem("token");
  //Id de usuario
  const { userId } = decodeJwtToken(jwt);
  return userId;
}

function handleDeleteAdButton() {
  if (isLogin()) {
    const jwt = window.localStorage.getItem("token");

    if (jwt) {
      const userInfo = decodeJwtToken(jwt);

      if (userInfo.userId === getAdId()) {
        addRemoveButton(nodo);
      }
    }
  }
}

function renderAd(ad, container) {
  const adItem = document.createElement("div");
  adItem.classList.add("flex-column", "center", "mt-l");
  adItem.innerHTML = buildAd(ad);
  container.appendChild(adItem);
}

function decodeJwtToken(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function showAdDetailError(error) {
  const notificationWrapper = document.querySelector("#notification-wrapper");
  showError(notificationWrapper, error);

  setTimeout(() => {
    hiddenMessage(notificationWrapper);
    window.location.href = "./index.html";
  }, 3000);
}

function showAdsSuccess(message) {
  const notificationWrapper = document.querySelector("#notification-wrapper");
  showSuccess(notificationWrapper, message);

  setTimeout(() => {
    hiddenMessage(notificationWrapper);
  }, 1000);
}
