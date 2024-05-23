import { createAd } from "./createAd-model.js";

export function AdCreationController(adCreation) {
  adCreation.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(adCreation);
    const ad = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      tag: formData.get("tags"),
      buy: formData.get("buy"),
      imege: formData.get("picture"),
    };

    console.log(ad);

    try {
      await createAd(ad);
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      alert(error);
    }
  });
}
