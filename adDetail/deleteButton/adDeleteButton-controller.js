import { deletProductById } from "./adDeleteButton-model.js";

export async function deleteButtonController() {
  const adId = new URLSearchParams(window.location.search).get("id");

  await deletProductById(adId);
  setTimeout(() => {
    window.location.href = "/";
  }, 1000);
  //   window.location.href = "./index.html";
}
