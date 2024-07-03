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
import { deleteButtonController } from "./deleteButton/adDeleteButton-controller.js";

const adNodo = document.getElementById("adContainer");
const spinnerWrapp = document.querySelector("#spinner-wrapper");

export async function adDetailController() {
  if (!getAdId()) {
    showAdDetailError({ error: "Anuncio no encotrado" });
  } else {
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
    } catch (err) {
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
  const { userId } = decodeJwtToken(jwt);
  return userId;
}

function isOwner(userId) {
  // Se usa la doble comparacion ya que adID es un string y UserID un number
  return isLogin() && getUserId() == userId;
}

function renderAd(ad, container) {
  const adItem = document.createElement("div");
  adItem.classList.add("flex-column", "center", "mt-l");
  console.log(ad);
  adItem.innerHTML = buildAd(ad);
  container.appendChild(adItem);
  if (isOwner(ad.userId)) {
    const container = document.querySelector(".card-container");
    addRemoveButton(container);

    //Creado el boton le añado el escuchador de eventos
    document
      .querySelector("#deleteButton")
      .addEventListener("click", deleteButtonController);
  }
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
