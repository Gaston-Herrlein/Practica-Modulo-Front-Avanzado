import { brandController } from "./brand/brandController.js";
import { navBarController } from "./navBar/navBar-controller.js";

export function headerController() {
  const headerNode = document.querySelector("header");
  headerNode.appendChild(headerLayout());
  brandController();
  navBarController();
}

function headerLayout() {
  //Creo un container con el layout de mi header
  const container = document.createElement("div");
  container.classList.add("d-grid");

  const containerBrand = document.createElement("a");
  containerBrand.setAttribute("id", "a-brand");

  const containerSearch = document.createElement("div");
  containerSearch.setAttribute("id", "search");

  const containerNavBar = document.createElement("nav");
  containerNavBar.setAttribute("id", "navBar-home");

  const containerTags = document.createElement("div");
  containerTags.setAttribute("id", "filterByCategories");

  container.appendChild(containerBrand);
  container.appendChild(containerSearch);
  container.appendChild(containerNavBar);
  container.appendChild(containerTags);

  return container;
}
