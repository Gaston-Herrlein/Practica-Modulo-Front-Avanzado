import { deletProductById } from "./adDeleteButton-model.js";

export async function deleteButtonController() {
  const adId = new URLSearchParams(window.location.search).get("id");
  const userWantToDelete = window.confirm("¿Quieres borrar el producto?");
  if (userWantToDelete) {
    await deletProductById(adId);
    redirectHome();
  }
  return;
}

async function redirectHome() {
  setTimeout(() => {
    window.location.href = "/";
  }, 500);
}
