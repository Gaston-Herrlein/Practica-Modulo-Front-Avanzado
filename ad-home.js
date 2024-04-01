/**
 * Cuando el documento este cargado añadirle el escuchador de eventos
 * Agregar el evento al boton para que ejecute la carga de articulos
 */
import { adsController } from "./ad/ad-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("show-ad").addEventListener("click", () => {
    adsController();
  });
});
