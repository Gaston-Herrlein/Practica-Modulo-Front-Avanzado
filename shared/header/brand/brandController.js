export function brandController() {
  const brandNode = document.querySelector("#a-brand");

  const imgBrand = document.createElement("img");
  imgBrand.classList.add("nav-brand-img");
  imgBrand.src = "./assets/image/wallapop.png";
  imgBrand.alt = "wallapop-icon";

  brandNode.appendChild(imgBrand);
}
